const removeFromArray = function(arr) {
    let count = 0;
    let newarr =[];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arguments.length; j++){
            jtypeis = typeof arguments[j];
            itypeis = typeof arr[i];
            if (arr[i] == arguments[j] && itypeis == jtypeis){
                break;
            } else if (j == (arguments.length - 1)){
                
                    newarr[count] = arr[i];
                    count++;
                
               
            }
            
        }
    }
    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
