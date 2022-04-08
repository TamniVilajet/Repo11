// Only change code below this code
var str = "Paragon!";
function myReverse(str) {
    var result = "";
    for(var i = str.length - 1; i>=0;  i--){
        result +=str[i];
    }
    return result;
}
console.log(myReverse(str));
// Only change code above this code
module.exports = myReverse;
