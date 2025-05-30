// Count consonants and vowels.

function countConsoAndVowels(inputString){
    let str = inputString.toLowerCase();

    let vowels = 'aeiou';
    let vowelsCount = 0;
    let cosonantsCount = 0;

    for(let char of str){
        if(/[a-z]/.test(char)){
            if(vowels.includes(char)){
                vowelsCount++;
            }else{
                cosonantsCount++;
            }
        }
    }

    return {vowelsCount, cosonantsCount}
}

let inputString = "Kalpesh More is a OG Gangsteer"

let result = countConsoAndVowels(inputString);

console.log(`Vowels:${result.vowelsCount},  Consonants:${result.cosonantsCount}`)