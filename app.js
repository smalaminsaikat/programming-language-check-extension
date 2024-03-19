document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("checkButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: checkLanguage,
      });
    });
  });
});

function checkLanguage() {
  let language = "";
  const langMeta = document.querySelector('meta[http-equiv="Content-Language"]');
  if (langMeta) {
    language = langMeta.getAttribute("content");
  } else {
    const scriptTags = document.querySelectorAll('script[type="text/javascript"]');
    if (scriptTags.length > 0) {
      language = "JavaScript";
    } else {
      language = "Unknown";
    }
  }
  chrome.runtime.sendMessage({ language: language });
}
