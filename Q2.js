//Check if a string is a palindrome
function isPallindrome(str){
    let cleanedStr = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase();

return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPallindrome("prasad"))