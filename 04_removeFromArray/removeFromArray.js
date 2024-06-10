const removeFromArray = function(arr, ...rest) {
    for (let rmv of rest){
        if (arr.includes(rmv)){
            for (let i = 0; i < arr.length; i++){
                if (arr[i] === rmv){
                    arr.splice(i, 1);
                    i--;
                }
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
