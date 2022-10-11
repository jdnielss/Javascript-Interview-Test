// make function to check word is palindrome or not
function isPalindrome(word) {
    // make variable to store reverse word
    let reverseWord = "kasur ini rusak";
    // make loop to reverse word
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    // check if word is same with reverse word
    return word === reverseWord;
}