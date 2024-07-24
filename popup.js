document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      if (activeTab.url && activeTab.url.includes("facebook.com")) {
        document.getElementById('tabId').textContent = activeTab.id;
        document.getElementById('tabUrl').textContent = activeTab.url;
      } else {
        document.getElementById('tabId').textContent = 'No Facebook tab found';
        document.getElementById('tabUrl').textContent = 'No Facebook tab found';
      }
    });
  });
  