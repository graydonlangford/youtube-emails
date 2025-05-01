function requestSubscriptionPage(pageToken) {
  // console.log('getting page %s', pageToken)
  try {
    const results = YouTube.Subscriptions.list('id, snippet, contentDetails', {mine: true, maxResults: 50, pageToken: pageToken})
    if (results == null) {
      console.log('Unable to find subscriptions')
      return
    }
    return results
  } catch (err) {
    console.log('Failed with error %s', err.message)
  }
}

function test () {
  let sub = requestSubscriptionPage(null)
  console.log(JSON.stringify(sub))
}

/**
 * searches for subscriptions
 */
function getSubscriptions() {
  let subscripions = []
  let morePages = true

  let pageToken = null
  let allSubscriptions = []
  while (morePages == true) {
    let pageResults = requestSubscriptionPage(pageToken)
    if (!pageResults) {
      console.log('Error getting subscription page')
      morePage = false
    } else {
      allSubscriptions = allSubscriptions.concat(pageResults.items)
      // console.log(pageResults.nextPageToken)
      if (pageResults.nextPageToken === undefined) {
        morePages = false
      } else {
        morePages = true
        pageToken = pageResults.nextPageToken
      }
    }
  }
  return allSubscriptions
}