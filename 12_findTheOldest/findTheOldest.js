const findTheOldest = function(arr) {
    let thisDate = new Date (2024, 6);
    arr = arr.sort(function(a,b){
        if(a.yearOfDeath){
            let first = a.yearOfDeath - a.yearOfBirth;
        } else{
            let first = thisDate - a.yearOfBirth;
        }
        if(b.yearOfDeath){
            let second = b.yearOfDeath - b.yearOfBirth;
        } else{
            let second = thisDate - b.yearOfBirth;
        }
    })
    return arr;
};

// Do not edit below this line
module.exports = findTheOldest;
