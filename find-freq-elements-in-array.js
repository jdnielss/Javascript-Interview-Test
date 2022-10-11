/**
 * Find the frequency of elements in array
 * let arr = ["hello", "world", "javascript", "hello", "javascript"]
 *
 * @param {string[]} words
 *
 * @returns {Object}
 */

function answer(words) {
	return words.reduce((words, word) => {
		if (word in words) {
			words[word]++
		} else {
			words[word] = 1
		}
		return words
	}, {})
}

let arr = ["hello", "world", "javascript", "hello", "javascript"]
console.log(answer(arr))
