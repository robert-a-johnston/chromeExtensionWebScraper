chrome.runtime.onMessage.addListener((msg, sender, response) =>{
  if(msg.command == 'runCommands'){
    let scrapeObj = msg.data
    console.log(scrapeObj)
  }
})

function clickEvent(selector, obj, index, endItem){

}

function saveEvent(selector, obj, index, endItem){

}
function enterEvent(selector, obj, index, endItem){
  
}