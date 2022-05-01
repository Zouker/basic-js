const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = n.toString().split('').map(el => +el)
    let min = arr.reduce((a, b) => {
        return a < b ? a : b
    })

    if (arr.length === 3) {
        let first = arr.slice(0, -2) + arr.slice(2)
        let second = +arr.slice(1).join('')
        let third = +arr.slice(0, 2).join('')
        let newArr = [first, second, third]
        return +newArr.reduce((a, b) => a > b ? a : b)
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            arr.splice(i, 1)
        }
    }
    return +arr.join('')

    throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
}

module.exports = {
    deleteDigit
};
