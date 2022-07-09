async function onCommand(command) {
  let [currentTab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  let newTab = await chrome.tabs.create({});
  if (currentTab.groupId != -1) {
    await chrome.tabs.group({groupId: currentTab.groupId, tabIds: newTab.id});
  }
  await chrome.tabs.move(newTab.id, {index: currentTab.index+1});
}

chrome.commands.onCommand.addListener(onCommand);
