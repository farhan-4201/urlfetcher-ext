chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes("facebook.com")) {
      console.log(`Facebook tab detected: ${tabId} - ${tab.url}`);
      chrome.storage.local.set({ fbTabId: tabId, fbTabUrl: tab.url });
    }
  });
  
  chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      if (tab.url && tab.url.includes("facebook.com")) {
        console.log(`Facebook tab detected on activation: ${tab.id} - ${tab.url}`);
        chrome.storage.local.set({ fbTabId: tab.id, fbTabUrl: tab.url });
      }
    });
  });
  