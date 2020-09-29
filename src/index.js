
exports.min = function min (array) {
    return (Array.isArray(array) && array.length) ? Math.min(...array): 0;
}

exports.max = function max (array) {
    return (Array.isArray(array) && array.length) ? Math.max(...array): 0;
}

exports.avg = function avg (array) {
    const reducer = function (accumulator, current) {
        return accumulator + current;
    };
    return (Array.isArray(array) && array.length) ? array.reduce(reducer) / array.length: 0;
}
