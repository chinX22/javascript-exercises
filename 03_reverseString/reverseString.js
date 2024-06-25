const reverseString = function(phrase) {
    let str = ""
    for(let i = 1; i <= phrase.length; i++){
        str += phrase[phrase.length - i]
    }
    return str
};

// Do not edit below this line
module.exports = reverseString;
