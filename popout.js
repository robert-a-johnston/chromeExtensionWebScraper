chrome.tabs.query({currentWindow: true, active: true}), function (tabs) {
  // take in array of all tabs
  // check tab currently on
  var activeTab = tabs[0]

  var obj = {}

  chrome.tabs.sendMessage(activeTab.id {command: 'runCommands', data: obj})
}