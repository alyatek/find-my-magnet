window.magnets = {};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.magnets[request.url] = request.matches;
});
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: "popup.html" });
});
