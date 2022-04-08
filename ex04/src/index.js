// Create a temps array here
var temps = [ [31, 32, 19, 37], [29, 27, 55, 36], 
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
// End of temps array
// Create a function below this line
function myArrayFunction(arr) {
    var averageDayTemp = [];
    for(var i = 0; i < arr.length; i++) {
        var suma = 0;
        for(var j = 0; j < arr[i].length; j++) {
            suma += (arr[i][j] / 4); 
        }
        averageDayTemp.push(suma);
    }

    return averageDayTemp;
}
console.log(myArrayFunction(temps));
// End of creating a function
module.exports = myArrayFunction;