chrome.runtime.onMessage.addListener((msg, sender, response) =>{
  if(msg.name == 'runCommands'){
    var scapeObj = msg.data
  }
})