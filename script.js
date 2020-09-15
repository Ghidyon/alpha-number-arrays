const firstInput = [2, 4, 5, 10];
const secondInput = [2, 5, 7, 9, 11, 12, 14, 13, 20];


//Question 1

//(a) => Function to get squares of numbers
const getSquares = array => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        let squares = Math.pow(array[i], 2);
        output.push(squares);
    }
    console.log(`Squared Numbers => [${output}]`);
}

getSquares(firstInput);


//(b) => Function to get odd numbers
const getOddNumbers = array => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            output.push(array[i]);
        }
    }
    console.log(`Odd Numbers => [${output}]`);
}
getOddNumbers(secondInput);


//(c) => Function to get sum of numbers
const getSum = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(`Sum of numbers in array is ${sum}`);
}

getSum(firstInput);
getSum(secondInput);


//Question 2

//(a) => Using map() to get squares of numbers
const squaredNums = element => Math.pow(element, 2);
const squares = firstInput.map(squaredNums);
console.log(`Squared Numbers => [${squares}]`);


//(b) => Using filter() to get odd numbers
const oddNums = element => element % 2 !== 0;
const oddNumbers = secondInput.filter(oddNums);
console.log(`Odd Numbers => [${oddNumbers}]`);


//(c) => Using reduce() to get sum of numbers
const sumOfNums = (total, element) => total + element;
const sum1 = firstInput.reduce(sumOfNums);
const sum2 = secondInput.reduce(sumOfNums);
console.log(`Sum of numbers in array is ${sum1}`);
console.log(`Sum of numbers in array is ${sum2}`);

//Methods map(), filter() and reduce() are easier to use


//Question 3: Arranging number array in ascending order
const numArray = [88, 32, 24, 299, 17];
const getAscendingOrder = (a, b) => a - b
const arrangedArray = numArray.sort(getAscendingOrder);
console.log(`Array of numbers arranged in ascending order => [${arrangedArray}]`);