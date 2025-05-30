//find closest number which is divisible by 5

function closestNumDivisibleBy5(num){
   
    let remainder = num % 5;

    if(remainder === 0){
        return num;
    }

    let lower = num  - remainder;

    let higher = remainder > 0  ? num + (5 -remainder): num  - remainder;

    return (num - lower) <= (higher - num) ? lower : higher;

}


let num = closestNumDivisibleBy5(16);

console.log(`The closest number which is divivsible by 5 is ${num}`)