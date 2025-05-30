//Calculate the sum of first five fibonacci numbers

function calculateFiboSumOf5(num){
    let arr = [0, 1];

    for(let i = 2; i<num; i++){
         arr[i] = arr[i-1] + arr[i-2];
    }

    let sum = arr.reduce((acc, curr) =>  acc + curr, 0)

    return sum;
}

let num = 10;

console.log(calculateFiboSumOf5(num))