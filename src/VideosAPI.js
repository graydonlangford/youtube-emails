function test() {

  let subscriptions = requestSubscriptionPage()

  console.log(subscriptions.items[0])

  let channelId = subscriptions.items[0].snippet.resourceId.channelId
  console.log(channelId)

  let videos = requestVideos(channelId)
  console.log()


}


function requestVideos(channelId) {
  let cutoffDate = new Date(Date.now() - (48 * 60 * 60 * 1000)).toISOString()
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