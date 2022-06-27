async function onCommand(command) {
  let [currentTab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  let newTab = await chrome.tabs.create({});
  if (currentTab.groupId != -1) {
    await chrome.tabs.group({groupId: currentTab.groupId, tabIds: newTab.id});
  }
}

chrome.commands.onCommand.addListener(onCommand);
