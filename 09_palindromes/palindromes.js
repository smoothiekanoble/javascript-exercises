const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const temp = str.toLowerCase().split('');
    const pal = temp.filter((char) => alphanumerical.includes(char)).join('');
    const reverse = pal.split('').reverse().join('');
    return (reverse === pal);
};

// Do not edit below this line
module.exports = palindromes;
