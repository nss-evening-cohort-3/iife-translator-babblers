//The team should create an extra JavaScript file that handles interacting with 
//the form elements and determining which method should be called.

//Main JS file that accepts values from index html
//varible declarations of a button to capure the input from the html

var button = document.getElementById("translator");
button.addEventListener("click", babble);

var clearButton = document.getElementById("clear");

//need to set the HTML Tag with result from IFFE
function removeText(){
  document.getElementById("textInput").value= "";
  document.getElementById("translatedGreeting").innerHTML= "";

}

clearButton.addEventListener("click", removeText);

//add event listener to button element and call the language evaluation

// This function should determine which conversion should
// happen based on which language is selected from the HTML
// look at what value from the HTML call the appropriate "getter";

function babble() {
  var language = document.getElementById("selector").value;
  var textInput = document.getElementById("textInput").value;
  var translated; 
  var translatedGreeting = document.getElementById("translatedGreeting");
    if (language === "spanish") {
       translated = Babbler.translateToSpanish(textInput);
    }
      else if (language === "hindi") {
        translated = Babbler.translateToHindi(textInput);        
      }
        else if (language === "italian") {
         translated = Babbler.translateToItalian(textInput); 
        }
          else if (language === "japanese") {
            translated = Babbler.translateToJapanese(textInput);
          } 
            else if(language === "french")  {
              translated = Babbler.translateToFrench(textInput);
            };
    translatedGreeting.innerHTML="<p>"+translated+"</p>"; //skipped id. and put actual id with property
 };     




















