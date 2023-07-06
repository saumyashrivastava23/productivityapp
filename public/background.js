chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.timeInSeconds) {
    setTimeout(function() {
      var notificationOptions = {
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Timer Notification',
        message: 'Time is up!'
      };

      chrome.notifications.create('timerNotification', notificationOptions);
      sendResponse({ message: 'Notification created' });
    }, request.timeInSeconds * 1000);
  }

  return true;
});
