const reverseString = function(string) {
    let str = string.split('');
    let arr = [];
    while (str.length > 0)
        arr.push(str.pop());
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
