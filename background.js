chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.language) {
    document.getElementById("result").innerText = `Programming language: ${request.language}`;
  }
});
