

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    chrome.tabs.query({ currentWindow: true, active: true }, async tabs => {
      if (!!tabs[0]) {
        let URL = tabs[0].url;

        if(URL.indexOf("https://www.facebook.com/")>-1){
           chrome.pageAction.show(tabId);
        }
      }
    });
  }
});
