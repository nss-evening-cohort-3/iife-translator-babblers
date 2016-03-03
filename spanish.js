//Each team member will create one JavaScript file that contains one IIFE. 
//Each teammate's IIFE will augment the other teammates' IIFEs.
//store in a object lexicon defined by language translated to:

//capitalize team object agreed on and used as it acts like a "Class" pass in
//what babler was from other js files
var Babbler = (function(oldBabbler){    
  //object properites lexicon for spanish
  var toSpanish = {
    merry: "Alegre",
    christmas: "Navidad",
    and: "y",
    happy: "Feliz",
    new: "Nuevo",
    year: "Ano"
  };
  // quicky check to see if phrase entered matches and return correct order as 
  // english is not 1-1 translation
  oldBabbler.translateToSpanish = function(textPassedIn) {
    if (textPassedIn === "merry christmas and happy new year") {
      return "Feliz navidad y próspero año nuevo";
      } else {

      //separator " " is removed from the string and the substrings are returned in an array.
        var parsePhraseEntered = textPassedIn.split(" ");
        //used for loop to handle mutiple entries of the same word in the array
        for (var i = 0; i < parsePhraseEntered.length; i++) {
      
        //take the spanish object, look in the object to make sure the words passed in are 
        //contained in the object (named value pairs), if they are, replace the value 
        //in the new array like example on section 71 and i am checking to make sure that
        //a value exists in the info passed in
          if (toSpanish[parsePhraseEntered[i]] !== undefined)  {
          parsePhraseEntered[i] = toSpanish[parsePhraseEntered[i]];
          }
          //build string from new array items
        }
        var newPhraseTranslated = parsePhraseEntered.join(" ");
          return newPhraseTranslated;  //ends function with new phrase translated
      }
    }
  return oldBabbler //ends function with phrase to be 
 }(Babbler || {})); //Optional bonus 1
