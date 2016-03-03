var Babbler = (function(babbler){
  var french = {
    merry: "joyeux",
    christmas: "Noël",
    and: "et",
    happy: "bonne",
    new: "noveau",
    year: "annee",

  }
  babbler.translateToFrench = function(string) {
    var array = string.split(" ")
    for (var i = 0; i < array.length; i++) {
    array[array.indexOf("merry")] = french.merry;
    array[array.indexOf("christmas")] = french.christmas;
    array[array.indexOf("and")] = french.and;
    array[array.indexOf("happy")] = french.happy;
    array[array.indexOf("new")] = french.new;
    array[array.indexOf("year")] = french.year;
    }
    var sentence = array.join(" ");
    return sentence;
  }
  return babbler;
}(Babbler || {}));