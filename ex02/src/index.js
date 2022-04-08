// Only change code below this code
var myStr = "Paragon is the best!";
function useMethods(str) {
    var myReverse;
    var countCharacters;

    var words = str.split(" ");
    words = words.reverse();

    countCharacters = words.map((s) => s.length);
    words = words.map((r) => r.split("").reverse().join(""));
    
    myReverse = words.join(" ");
    
    return { myReverse, countCharacters};
}
console.log(useMethods(myStr));
// Only change code above this code
module.exports = useMethods;


