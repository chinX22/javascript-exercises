const sumAll = function(intOne, intTwo) {
    if(typeof intOne != "number" || typeof intTwo != "number"){
        return "ERROR";
    }
    
    if (intOne < 0 || intTwo < 0){
        return "ERROR";
    }
    
    if (intOne > intTwo){
        start = intTwo;
        end = intOne
    } else {
        start = intOne
        end = intTwo
    }
    let sum = start;
    let difference = end - start;
    for (let i = 1; i <= difference; i++){
        sum += start + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
