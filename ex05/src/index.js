// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListAray array
// Create a function below this line
function myMonitorsFunction(monitorsList) {
    var monitorsList = [];
    var i;
    for(i = 0; i<=monitorsListArray.length-1; i++){
        monitorsList.push([monitorsListArray[i],i+1])
    } 

    return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));
// End of creating a function
module.exports = myMonitorsFunction;