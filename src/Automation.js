function dailySubSummary() {

  let subsAndVideos = getSubsAndVideos()

  // let subsAndVideos = [
  //   {
  //       "kind": "youtube#subscription",
  //       "id": "mAKwap3l9GS8BPsXKULE0ZexmAp7KNUba0Bp7M4XGdw",
  //       "snippet": {
  //           "publishedAt": "2021-05-03T16:21:55.520954Z",
  //           "title": "3Blue1Brown",
  //           "channelId": "UCxiVvVlc4NWX5Erap2XQ_5Q",
  //           "resourceId": {
  //               "kind": "youtube#channel",
  //               "channelId": "UCYO_jab_esuFRV4b17AJtAw"
  //           },
  //           "thumbnails": {
  //               "medium": {
  //                   "url": "https://yt3.ggpht.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s240-c-k-c0x00ffffff-no-rj"
  //               },
  //               "default": {
  //                   "url": "https://yt3.ggpht.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s88-c-k-c0x00ffffff-no-rj"
  //               },
  //               "high": {
  //                   "url": "https://yt3.ggpht.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s800-c-k-c0x00ffffff-no-rj"
  //               }
  //           },
  //           "description": "My name is Grant Sanderson. Videos here cover a variety of topics in math, or adjacent fields like physics and CS, all with an emphasis on visualizing the core ideas. The goal is to use animation to help elucidate and motivate otherwise tricky topics, and for difficult problems to be made simple with changes in perspective.\n\nFor more information, other projects, FAQs, and inquiries see the website: https://www.3blue1brown.com"
  //       },
  //       "etag": "Nu18YiNmMztSEvxBLrM8c8hFZxk",
  //       "contentDetails": {
  //           "totalItemCount": 212,
  //           "newItemCount": 0,
  //           "activityType": "all"
  //       },
  //       "videos": []
  //   },
  //   {
  //       "kind": "youtube#subscription",
  //       "snippet": {
  //           "publishedAt": "2022-01-25T19:27:55.521628Z",
  //           "description": "",
  //           "channelId": "UCxiVvVlc4NWX5Erap2XQ_5Q",
  //           "resourceId": {
  //               "kind": "youtube#channel",
  //               "channelId": "UCy0tKL1T7wFoYcxCe0xjN6Q"
  //           },
  //           "thumbnails": {
  //               "default": {
  //                   "url": "https://yt3.ggpht.com/ytc/AIdro_lG8iUz4mpHBrzJSDYEKT0qe2XmhZUUUzhzcJbz9cE3rQ=s88-c-k-c0x00ffffff-no-rj"
  //               },
  //               "high": {
  //                   "url": "https://yt3.ggpht.com/ytc/AIdro_lG8iUz4mpHBrzJSDYEKT0qe2XmhZUUUzhzcJbz9cE3rQ=s800-c-k-c0x00ffffff-no-rj"
  //               },
  //               "medium": {
  //                   "url": "https://yt3.ggpht.com/ytc/AIdro_lG8iUz4mpHBrzJSDYEKT0qe2XmhZUUUzhzcJbz9cE3rQ=s240-c-k-c0x00ffffff-no-rj"
  //               }
  //           },
  //           "title": "Technology Connections"
  //       },
  //       "contentDetails": {
  //           "newItemCount": 1,
  //           "totalItemCount": 214,
  //           "activityType": "all"
  //       },
  //       "id": "mAKwap3l9GS8BPsXKULE0UnYsHr32eIRrD5X1NVMqh0",
  //       "etag": "T2oNCQyQOUWX_hXa82TR_PPFHrk",
  //       "videos": []
  //   },
  //   {
  //       "etag": "yVycrPHtnfYTazjecwrEF3tkR9k",
  //       "id": "mAKwap3l9GS8BPsXKULE0SYUZTJBTiXymRHlc0TKU3k",
  //       "kind": "youtube#subscription",
  //       "contentDetails": {
  //           "newItemCount": 1,
  //           "totalItemCount": 1826,
  //           "activityType": "all"
  //       },
  //       "snippet": {
  //           "thumbnails": {
  //               "medium": {
  //                   "url": "https://yt3.ggpht.com/_2CRkKzXaITSMr4koZ55RAS6K0ss6QKGIWGY0-1AsWC2VbMTffTu4dCuCVbQVx7bxvc5oojJ8pk=s240-c-k-c0x00ffffff-no-rj"
  //               },
  //               "high": {
  //                   "url": "https://yt3.ggpht.com/_2CRkKzXaITSMr4koZ55RAS6K0ss6QKGIWGY0-1AsWC2VbMTffTu4dCuCVbQVx7bxvc5oojJ8pk=s800-c-k-c0x00ffffff-no-rj"
  //               },
  //               "default": {
  //                   "url": "https://yt3.ggpht.com/_2CRkKzXaITSMr4koZ55RAS6K0ss6QKGIWGY0-1AsWC2VbMTffTu4dCuCVbQVx7bxvc5oojJ8pk=s88-c-k-c0x00ffffff-no-rj"
  //               }
  //           },
  //           "title": "bogdanhxc",
  //           "resourceId": {
  //               "kind": "youtube#channel",
  //               "channelId": "UCM0B2tvEttmL-gFP1_sgvSA"
  //           },
  //           "description": "I listen to music, sing/scream into the microphone and occasionally give you new cool bands to listen to.\nI also stream on Twitch now.\nThanks for ongoing support!",
  //           "publishedAt": "2024-08-11T13:35:00.119117Z",
  //           "channelId": "UCxiVvVlc4NWX5Erap2XQ_5Q"
  //       },
  //       "videos": [
  //           {
  //               "id": {
  //                   "kind": "youtube#video",
  //                   "videoId": "WrDK0Kl2zeI"
  //               },
  //               "etag": "C5a0U_eRbqYRYTkyVy52fyUatps",
  //               "snippet": {
  //                   "description": "Today I am reacting to, reviewing and listening to new songs by IRONSTONE - Forge Me Anew. Check out the song ...",
  //                   "title": "Deathcore in 2025 is a strange place...",
  //                   "channelTitle": "bogdanhxc",
  //                   "liveBroadcastContent": "none",
  //                   "channelId": "UCM0B2tvEttmL-gFP1_sgvSA",
  //                   "publishTime": "2025-04-30T16:01:01Z",
  //                   "publishedAt": "2025-04-30T16:01:01Z",
  //                   "thumbnails": {
  //                       "default": {
  //                           "url": "https://i.ytimg.com/vi/WrDK0Kl2zeI/default.jpg",
  //                           "height": 90,
  //                           "width": 120
  //                       },
  //                       "high": {
  //                           "height": 360,
  //                           "url": "https://i.ytimg.com/vi/WrDK0Kl2zeI/hqdefault.jpg",
  //                           "width": 480
  //                       },
  //                       "medium": {
  //                           "width": 320,
  //                           "url": "https://i.ytimg.com/vi/WrDK0Kl2zeI/mqdefault.jpg",
  //                           "height": 180
  //                       }
  //                   }
  //               },
  //               "kind": "youtube#searchResult"
  //           }
  //       ]
  //   },
  //   {
  //       "snippet": {
  //           "description": "Do you want to know how our legal system works?  You’ve come to the right place.  LegalEagle is all about giving you an insider’s view to the legal system.  Have some fun and learn to think like a lawyer.  \n\nI get asked a lot about whether being a practicing attorney is like being a lawyer on TV.  I love watching legal movies and courtroom dramas.  It's one of the reasons I decided to become a lawyer.  But sometimes they make me want to pull my hair out because they are ridiculous.  So I created this channel to answer your burning questions about the law and the legal profession.  While all legal movies and shows take dramatic license to make things more interesting (nobody wants to see hundreds of hours of brief writing), many of them have a grain of truth.  Learn everything you always wanted to know about being an attorney!\n\nIf you’re a law student or thinking about law school, check out my other channel made specifically for law students and 0Ls here: https://goo.gl/e3kEHL",
  //           "thumbnails": {
  //               "high": {
  //                   "url": "https://yt3.ggpht.com/ytc/AIdro_kwW7uBHNuJln3mwjAD39KvwvTbVKtoTONHGwiaAp3Njw=s800-c-k-c0x00ffffff-no-rj"
  //               },
  //               "default": {
  //                   "url": "https://yt3.ggpht.com/ytc/AIdro_kwW7uBHNuJln3mwjAD39KvwvTbVKtoTONHGwiaAp3Njw=s88-c-k-c0x00ffffff-no-rj"
  //               },
  //               "medium": {
  //                   "url": "https://yt3.ggpht.com/ytc/AIdro_kwW7uBHNuJln3mwjAD39KvwvTbVKtoTONHGwiaAp3Njw=s240-c-k-c0x00ffffff-no-rj"
  //               }
  //           },
  //           "channelId": "UCxiVvVlc4NWX5Erap2XQ_5Q",
  //           "title": "LegalEagle",
  //           "resourceId": {
  //               "channelId": "UCpa-Zb0ZcQjTCPP1Dx_1M8Q",
  //               "kind": "youtube#channel"
  //           },
  //           "publishedAt": "2021-05-03T16:26:25.682304Z"
  //       },
  //       "kind": "youtube#subscription",
  //       "id": "mAKwap3l9GTDk4V4y-jPNSut5KX8_T08AQb9JD11Hpw",
  //       "etag": "YQbrM9nBdUT0MFPx0OE0T7b-DmA",
  //       "contentDetails": {
  //           "totalItemCount": 708,
  //           "activityType": "all",
  //           "newItemCount": 1
  //       },
  //       "videos": []
  //   },
  //   {
  //       "id": "mAKwap3l9GS8BPsXKULE0ZSO_jITx1cGpFJOfPlrBPY",
  //       "snippet": {
  //           "description": "I make videos about science.\n\nI also write books! You can get them here: https://stevemould.com/books\n\nYou can support me on Patreon here: https://www.patreon.com/stevemould\n\nYou can discuss my videos on reddit: https://reddit.com/r/SteveMould\n\nFor sponsorships and brand deals please email stevemould@zigguratxyz.com\n\nTo get in touch with me about anything else visit https://stevemould.com/contact",
  //           "resourceId": {
  //               "channelId": "UCEIwxahdLz7bap-VDs9h35A",
  //               "kind": "youtube#channel"
  //           },
  //           "title": "Steve Mould",
  //           "publishedAt": "2021-05-03T16:30:12.128532Z",
  //           "thumbnails": {
  //               "default": {
  //                   "url": "https://yt3.ggpht.com/iX-akiHlJYuPDq4YVBO83cfjWW0aQefdewmI326XVhZkzxnS3MrqNVi49J33jLBw5LR_ZVyKFA=s88-c-k-c0x00ffffff-no-rj"
  //               },
  //               "medium": {
  //                   "url": "https://yt3.ggpht.com/iX-akiHlJYuPDq4YVBO83cfjWW0aQefdewmI326XVhZkzxnS3MrqNVi49J33jLBw5LR_ZVyKFA=s240-c-k-c0x00ffffff-no-rj"
  //               },
  //               "high": {
  //                   "url": "https://yt3.ggpht.com/iX-akiHlJYuPDq4YVBO83cfjWW0aQefdewmI326XVhZkzxnS3MrqNVi49J33jLBw5LR_ZVyKFA=s800-c-k-c0x00ffffff-no-rj"
  //               }
  //           },
  //           "channelId": "UCxiVvVlc4NWX5Erap2XQ_5Q"
  //       },
  //       "kind": "youtube#subscription",
  //       "contentDetails": {
  //           "newItemCount": 1,
  //           "activityType": "all",
  //           "totalItemCount": 329
  //       },
  //       "etag": "KJfmbv0ZkSsdLg1bFbyyTpWOLJo",
  //       "videos": [
  //           {
  //               "kind": "youtube#searchResult",
  //               "id": {
  //                   "videoId": "o-dZKBwbsis",
  //                   "kind": "youtube#video"
  //               },
  //               "etag": "CbHQFDh52WckSLtqMGgt5qMFKvA",
  //               "snippet": {
  //                   "description": "Try AnyDesk today: https://anydesk.com/stevemould The Hirox microscope has a rotary head attachments that allows you to ...",
  //                   "title": "I made microscopic DRONE shots!",
  //                   "channelTitle": "Steve Mould",
  //                   "liveBroadcastContent": "none",
  //                   "channelId": "UCEIwxahdLz7bap-VDs9h35A",
  //                   "publishTime": "2025-04-30T19:48:37Z",
  //                   "publishedAt": "2025-04-30T19:48:37Z",
  //                   "thumbnails": {
  //                       "default": {
  //                           "width": 120,
  //                           "height": 90,
  //                           "url": "https://i.ytimg.com/vi/o-dZKBwbsis/default.jpg"
  //                       },
  //                       "high": {
  //                           "height": 360,
  //                           "url": "https://i.ytimg.com/vi/o-dZKBwbsis/hqdefault.jpg",
  //                           "width": 480
  //                       },
  //                       "medium": {
  //                           "width": 320,
  //                           "url": "https://i.ytimg.com/vi/o-dZKBwbsis/mqdefault.jpg",
  //                           "height": 180
  //                       }
  //                   }
  //               }
  //           }
  //       ]
  //   }
  //   ]


  let videoCount = 0
  subsAndVideos.forEach((sub, i, subs) => {
    videoCount += sub.videos.length
  })

  if (videoCount == 0) {
    Logger.log("No videos found")
    return
  }

  Logger.log('sending an email with %s videos', videoCount)

  let recipient = Session.getActiveUser().getEmail()

  let subject = videoCount.toString() + " new Youtube videos from your subscriptions"

  let body = "https://www.youtube.com/feed/subscriptions"

  let htmlTemplate = HtmlService.createTemplateFromFile('EmailTemplate')
  htmlTemplate.data = subsAndVideos
  let htmlOutput = htmlTemplate.evaluate().getContent()

  console.log(htmlOutput)

  let emailResult = MailApp.sendEmail(recipient, subject, body, {
    htmlBody: htmlOutput
  })

  console.log('email results: %s', emailResult)

}