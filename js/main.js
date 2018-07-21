// add an event listener to the form to submit Dave's message
var human = "";
document.getElementById("chatForm").addEventListener("submit", storeDave);
function storeDave(e) {
  e.preventDefault();
  human = document.getElementById("chatInput").value;
  document.getElementById("dave").innerHTML += human + "<br/>";
  document.getElementById("chatInput").value = "";
  // call the runHal function with human variable
  runHal(human);
}
console.log(human);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function randHal() {
  switch(getRandomIntInclusive(1,3)){
    case 1:
    halTurn = "What are your plans now, Dave?";
    break;
    case 2:
    halTurn = "Why don't you ask me something important, Dave?";
    break;
    case 3:
    halTurn = "Is there anything you'd like to say, Dave?";
    break;
    default:
    halTurn = "There is nothing more to report, Dave. Why don't you continue talking?"
  }
  return halTurn;
}
var dots = ". ";
function think() {
  document.getElementById("hal").innerHTML += dots;
  setTimeout(think, 1000);
}
function runHal() {
  console.log(human.length);
  var bot = "";
  var halTurn = "";
  // let i = 1;
  // for(i = 1; i < human.length; i++) {
  //   console.log(i);
  //   think();
    // setTimeout(function think() {
    //   document.getElementById("hal").innerHTML += dots;
    //   setTimeout(think, 1000);
    // }, 1000);
  //}
  //setTimeout(document.getElementById("hal").innerHTML += "<br/>", 200);
  console.log(human);
  switch(/hello|hi|hey|greet|morning|evening|afternoon|hola|buenos|guten|konich|nei hao/i.test(human)) {
  case 1:
  bot = "Hello, Dave. It's been nine years since you went to sleep."
  break
  case 2:
  bot = "Why, Dave, no greeting? You've been asleep for nine years. Who do you think you are?"
  break;
  }
//  console.log(bot);
//  halTurn = randHal();
//  console.log(halTurn);
  setTimeout(document.getElementById("hal").innerHTML += bot + "<br/>", 1000);
  setTimeout(document.getElementById("hal").innerHTML += halTurn + "<br/>", 1000);
}


// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message
