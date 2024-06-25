const palindromes = function (pali) {
    let arr = Array.from(pali);
    console.log(arr);
    arr = arr.filter((char) => is_punt_or_wspace(char));
    console.log(arr);
    arr = arr.map((char) => char.toLowerCase());
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if(arr[i] != arr[arr.length - 1 - i]){
            return false;
        }
    }
    return true;
};

function is_punt_or_wspace (c){
    arr = [".", ",", ":", "!", "?", " "];
    if (arr.some(invalid => invalid == c)){
        return false;
    } else {
        return true;
    }
}

// Do not edit below this line
module.exports = palindromes;
