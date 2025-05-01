function requestVideos(channelId) {
  console.log('requesting videos for channel %s', channelId)
  let cutoffDate = new Date(Date.now() - (24 * 60 * 60 * 1000)).toISOString()
  try {
    const results = YouTube.Search.list('snippet', {type: 'video', channelId: channelId, maxResults: 5, order: 'date', publishedAfter: cutoffDate})
    if (results == null) {
      console.log('Unable to find subscriptions')
      return
    }
    return results.items
  } catch (err) {
    console.log('Failed with error %s', err.message)
  }

}

function test() {
  console.log(JSON.stringify(requestVideos('UCEIwxahdLz7bap-VDs9h35A')))
}

function getSubsAndVideos() {

  let subscripions = getSubscriptions()
  console.log('found %s subscriptions', subscripions.length)

  subscripions.forEach((subscription, i, subscriptions) => {
    // skip subs with nothing new, to save API tokens
    if (subscription.contentDetails.newItemCount == 0) {
      return
    }

    let channelId = subscription.snippet.resourceId.channelId
    let videos = requestVideos(channelId)
    console.log('found %s videos for channel %s', videos.length, channelId)

    subscription.videos = videos ? videos : []

  })

  return subscripions
}