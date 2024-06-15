const fibonacci = function(index) {
    if (index < 0) return "OOPS"; 
    if (index === 0) return 0;
    if (index === 1) return 1;

    const arr = [0, 1];
    for (let i = 2; i <= index; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[index];
};

// Do not edit below this line
module.exports = fibonacci;
