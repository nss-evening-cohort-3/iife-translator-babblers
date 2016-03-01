var Babbler = (function(babbler){
  var hindi = {
    merry: "kee badhaee",
    christmas: "krisamas",
    and: "aur",
    happy: "mubarek",
    new: "naya",
    year: "saal",

  }
  babbler.translateToHindi = function(string) {
    var array = string.split(" ")
    
    for (var i = 0; i < array.length; i++) {
    array[array.indexOf("merry")] = hindi.merry;
    array[array.indexOf("christmas")] = hindi.christmas;
    array[array.indexOf("and")] = hindi.and;
    array[array.indexOf("happy")] = hindi.happy;
    array[array.indexOf("new")] = hindi.new;
    array[array.indexOf("year")] = hindi.year;
    }
    var sentence = array.join(" ");
    return sentence;
  }
  return babbler;
}(Babbler || {}));