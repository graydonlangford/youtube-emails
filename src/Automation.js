function dailySubSummary() {

  let subscripions = getSubscriptions()
  console.log('found %s subscriptions', subscripions.length)

  subscripions.forEach((subscription, i, subscriptions) => {
    let channelId = subscription.snippet.resourceId.channelId
    let videos = requestVideos(channelId)
    console.log('found %s videos for channel %s', videos.length, channelId)

    subscription.videos = videos ? videos : []

  })

  console.log(subscripions)
}
