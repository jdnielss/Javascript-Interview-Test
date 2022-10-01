/**
 * Filtering array to number only
 * @param {Array} arr
 * @param {Boolean} unique
 * @param {Boolean} reverse
 */
const SortingToNumber = ({ arr = [], unique = true, reverse = false } = []) => {
    let filter = arr.filter(num => typeof(num) === 'number').sort();
    if (unique) filter = new Set([...filter]);
    if (reverse) filter = Array.from(filter).reverse();

    return filter;
}

const array = [1, 4, 'kamu', 5, 8, 2, 'aku', 3, 2, 4];
const test = SortingToNumber({ arr: array, unique: true, reverse: true });
console.log(test); // return [ 8, 5, 4, 3, 2, 1 ]

module.exports = SortingToNumber
