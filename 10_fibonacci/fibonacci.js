const fibonacci = function (element) {
    if (element < 0){
        return "OOPS";
    }
    let arr = [0, 1];
    let count = 1;
    while (count < element){
        count++;
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr[element];
};

// Do not edit below this line
module.exports = fibonacci;
