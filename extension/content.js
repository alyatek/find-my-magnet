// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

//   sendResponse({ matches: matches[0] });
// });

const regex = /href="(magnet.*?)"/gi;

if ((m = regex.exec(document.documentElement.innerHTML))) {
  chrome.runtime.sendMessage({
    url: window.location.href,
    matches: m[1],
  });
}
