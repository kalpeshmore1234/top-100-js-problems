// reverse words in a sentence

function reverseWords(sentence){
   // Split the sentence into words using space as a separator
  const words = sentence.split(' ');

  // Reverse the array of words
  const reversedWords = words.reverse();

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(' ');

  return sentence.split(' ').reverse().join(' ')
}

let sentence = 'Kalpesh is a nice guy'

console.log(reverseWords(sentence));