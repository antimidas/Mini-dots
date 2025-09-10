chrome.action.onClicked.addListener((tab) => openInPolypane(tab.url));

const openInPolypane = (url) => {
  chrome.tabs.update({ url: `polypane://${url}` });
};

const handleContextMenu = (info) => {
  if (info.menuItemId === "open-in-polypane") {
    openInPolypane(info.linkUrl);
  }
};

chrome.contextMenus.onClicked.addListener(handleContextMenu);

chrome.contextMenus.create({
  id: "open-in-polypane",
  title: "Open in Polypane",
  contexts: ["link"],
  type: "normal",
});

chrome.commands.onCommand.addListener(function (command, tab) {
  if (command === "open-in-polypane") {
    if (tab) {
      openInPolypane(tab.url);
    } else {
      chrome.tabs.query({ active: true }, (tabs) => {
        openInPolypane(tabs[0].url);
      });
    }
  }
});
