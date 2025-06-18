chrome.tabs.onCreated.addListener((tab) => {
  if (tab.pendingUrl === "chrome://newtab/" || tab.url === "chrome://newtab/") {
    chrome.tabs.update(tab.id, {
      url: "https://kayoosh2009.github.io/Browser/"
    });
  }
});
