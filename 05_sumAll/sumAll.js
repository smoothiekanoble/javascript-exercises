const sumAll = function(start, end) {
    if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0)
        return "ERROR";
    let out = 0;
    let a = (start < end) ? start : end;
    let b = (start < end) ? end : start;
    for (; a <= b; a++)
        out += a;
    return out;
};

// Do not edit below this line
module.exports = sumAll;
