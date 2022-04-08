// Only change code below this code
var myArr = [2, 5, 9, 8, 1];
function bubbleSort(arr) {
    var max = [];
    for(var i = 0; i<arr.length; i++) {
        for(var j = 0; j<arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                max = arr[j];  
                arr[j] = arr[j+1];
                arr[j+1] = max;
            }
        } 
    }
    return arr;
}

console.log(bubbleSort(myArr));
// Only change code above this code
module.exports = bubbleSort;


