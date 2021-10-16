document.querySelector('.new-command-button').addEventListener('click', function(){
  var newItem = `<div class="command-item">
  <select>
    <option value="wait">Wait</option>
    <option value="click">Click</option>
    <option value="enter">Enter Value</option>
    <option value="save">Save Value</option>
  </select>
  <input class="value-1" placeholder="200ms"/>
  <input class="value-2" placeholder="Optional"/>
</div> `
  document.querySelector('.commands-list').innerHTML+=newItem
})
chrome.tabs.query({currentWindow: true, active: true}), function (tabs) {
  // take in array of all tabs
  // check tab currently on
  var activeTab = tabs[0]

  var obj = {}

  chrome.tabs.sendMessage(activeTab.id, {command: 'runCommands', data: obj})
}