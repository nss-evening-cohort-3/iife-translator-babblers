// lexicon object: Italian
var babbler = (function(babbler) {
  var italian = {
    merry:"bon",  
    christmas:"Natale", 
    happy:"Felice", 
    new:"Nuovo", 
    year:"Anno",
    holiday:"vacanza", 
    and:"e"
  }; 

// function to accept a string from user and   return the new translation
  babbler.translateToItalian = function(string) {
//the original array must be split up and searchable to find the translated word
    var array = string.split(" ")
// index.Of is used to find the English word and replace it with the Italian 
    for (var i = 0; i < array.length; i++) {
    array[array.indexOf("merry")] = italian.merry;
    array[array.indexOf("christmas")] = italian.christmas;
    array[array.indexOf("happy")] = italian.happy;
    array[array.indexOf("new")] = italian.new;
    array[array.indexOf("year")] = italian.year;
    array[array.indexOf("holiday")] = italian.holiday;
    array[array.indexOf("and")] = italian.and;
    }
    var sentence = array.join(" ");
    return sentence; 
}
return babbler;

// pass the babbler into the object ??? also, where is the missing curly bracket? 
}(Babbler || {})); 
