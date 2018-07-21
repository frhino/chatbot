$( document ).ready(function() {
    console.log( "ready!" );
});
function initForm(oForm, element_name, init_txt) {
	frmElement = oForm.elements[element_name];
	frmElement.value = init_txt;
}
function clearFieldFirstTime(element) {
  if (element.counter==undefined) {
	element.counter = 1;
  }

  else {
	element.counter++;
  }

  if (element.counter == 1) {
	element.value = '';
  }
  console.log(element.counter);
}
document.getElementById("chatForm").addEventListener("load", HalOpener());
// add an event listener to the form to submit Dave's message
var human = "";
var dots = ".  ";
document.getElementById("chatForm").addEventListener("submit", storeDave);
//try to add counter by passing oForm parameter
function storeDave(e) {
  e.preventDefault();
  human = document.getElementById("chatInput").value;
  document.getElementById("dave").innerHTML += "<br/>" + "<br/>" + human + "<br/>";
  console.log("dave done")
  document.getElementById("hal").innerHTML += "<br/>" + "<br/>"+ "<br/>";
  think();
  function think() {
 //   console.log(oForm["daveInput"].counter);
    //wait for Hal to finish thinking before answering
    // if (oForm["daveInput"].counter <= 1) {
    //   halResp = randHal;
    // } else {
    //   halResp = randHal;
    // }
    setTimeout(randHal, human.length * 200);
        // make Hal think before responses
      for(var i = 0; i < human.length; i++) {

        setTimeout((function() {
         console.log(i);         
          thinkHal();
        }), i * 200);
        function thinkHal() {
          document.getElementById("hal").innerHTML += ". ";
        }
      }
    };
  }

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
var bot;
function randHal() {
  console.log(human);
  var patt = (/hello|hi,|hi |hey|greet|morning|evening|afternoon|hola|buenos|guten|konich|nei hao/i.test(human));
  console.log(patt);
  (patt) ? bot = "Hello, Dave. It's been nine years since you went to sleep." + "<br/>" :
    bot = "You know, Dave, you've been asleep for nine years. You could at least greet me."+ "<br/>";

    document.getElementById("hal").innerHTML += bot;

      function updateScroll(){
      var element1 = document.getElementById("hal");
      var element2 = document.getElementById("dave");
      element1.scrollTop = element1.scrollHeight;
      element2.scrollTop = element2.scrollHeight;
      }
      updateScroll();
    }

  console.log("hal done printing")




// create a function for HAL to open the chat with "Good morning, Dave"
function HalOpener () {
  setTimeout(greet, 1000);
}
function greet(){
 document.getElementById("hal").innerHTML += "Good morning, Dave" + "<br/>";

}

// invoke the opening message

//turn on HAL
//change color of chat input box when on vs off
//add plug next to chatform that makes Hal ask "what are you doing, Dave" when mouse hovers
