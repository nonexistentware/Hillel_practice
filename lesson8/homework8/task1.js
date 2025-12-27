const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

const positiveNumbers = [];
const negativeNumbers = [];
const zeros = [];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

function arrayOperations(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers.push(arr[i]);
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeNumbers.push(arr[i]);
            negativeCount++;
        } else {
            zeros.push(arr[i]);
            zeroCount++;
        }
    }
}

arrayOperations(numbers);

console.log("Кількість позитивних чисел: " + positiveCount);
console.log("Кількість негативних чисел: " + negativeCount);
console.log("Кількість нульових чисел: " + zeroCount);
