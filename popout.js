chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if(msg.command == 'run-complete'){
    document.querySelector('textarea').value = JSON.stringify(msg.data)
    document.querySelector('textarea').style.display='block'
    alert('commands run')
  }
})


function createCommandObject(){

  let commandsArray =[]

  let commands = document.querySelectorAll('.commands-list .command-item')
  // adds values to object and push into array
  for(let i = 0; i < commands.length; i++){
    let itemObj = {}
    itemObj.type = commands[i].querySelector('select').value
    itemObj.one = commands[i].querySelector('.value-1').value
    itemObj.two = commands[i].querySelector('.value-2').value
    commandsArray.push(itemObj)
  }
  console.log('ca', commandsArray)
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
    // take in array of all tabs
    // check tab currently on
    let activeTab = tabs[0]
  
    let obj = commandsArray
  
    chrome.tabs.sendMessage(activeTab.id, {command: 'runCommands', data: obj})
  })
}

document.querySelector('.run-command-button').addEventListener('click', function(){
  createCommandObject()
})

document.querySelector('.new-command-button').addEventListener('click', function(){
  // creates new fields when add command button is clicked
  let newItem = `<div class="command-item">
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
chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
  // take in array of all tabs
  // check tab currently on
  let activeTab = tabs[0]

  let obj = {}

  chrome.tabs.sendMessage(activeTab.id, {command: 'runCommands', data: obj})
})