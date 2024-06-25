const repeatString = function(phrase, numberofTimes) {
    if(numberofTimes < 0){
        return "ERROR"
    }
    let finalphrase =""
    for(let i = 0; i < numberofTimes; i++ ){
        finalphrase += phrase
    }
    return finalphrase
};

// Do not edit below this line
module.exports = repeatString;
