

var Babbler = (function(babbler){
  // Lexicon object. replace with your own lexicon!
  var japanese = {
    merry:     "merii",
    christmas: "kurisumasu",
    and:       "soshite",
    happy:     "akemashite",
    new:       "omeditou",
    year:      "gozaimasu",
  };

// this function accepts a string and returns a different string.
  babbler.translateToJapanese = function(string) { 

    // split sentence up into an array so the words are indexed and searchable with "indexOf"
    var array = string.split(" ") // array = ["merry", "christmas", "and", "happy", "new", "year"]

    //use .indexOf to find specific words in the array and overwrite them with Japanese replacements
    for (var i = 0; i < array.length; i++) {

    array[array.indexOf("merry")]     = japanese.merry; // array[0] = "merii"
    array[array.indexOf("christmas")] = japanese.christmas; // array[1] = "kurisumasu"
    array[array.indexOf("and")]       = japanese.and;
    array[array.indexOf("happy")]     = japanese.happy;
    array[array.indexOf("new")]       = japanese.new;
    array[array.indexOf("year")]      = japanese.year;
    }
    //make the array back into a string
    var sentence = array.join(" "); 

    //return new translated sentence
    return sentence;
  }
  return babbler;

//pass in Babbler object to augment, OR if this is the first Babbler, pass in an empty object to start
}(Babbler || {}));

