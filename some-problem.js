// 01 Write a function that takes an array of numbers and returns the sum of all the numbers.
// 02 Write a function that takes an array and returns the maximum number.
// 03 Write a function that takes an array and returns a new array with the elements in reverse order.
// 04 Write a function that checks if a given value exists in an array.
// 05 Write a function that counts how many times a specific value appears in an array.
// 06 Write a function that removes duplicate values from an array.
// 07 Write a function that merges two arrays and returns the result.
// 08 Write a function that returns a new array containing only the elements that are present in both arrays.
// 09 Write a function that removes a specific element from an array.

// 01 // Write a function that takes an array of numbers and returns the sum of all the numbers.
// function sumOfArray(numbers){
//     let sum = 0
//     for (let i = 0; i <= numbers.length; i+=2) {
//         sum = sum + i
//     }
//     return sum
// }
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result =sumOfArray(number)
// console.log(result);

// 02 Write a function that takes an array and returns the maximum number.

function maxNumber(arr) {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>maxNum) {
            maxNum=arr[i]
        }
    }
    // const masNum = Math.max(maxNum)
    return maxNum
}

const numbers = [12473, 321, 21, 12, 329876]
const result = maxNumber(numbers)
console.log(result);


//03 Write a function that takes an array and returns a new array with the elements in reverse order.
// function takeArrayReturn(numbers){
//     let reverse = []
//     for (let i = 0; i < numbers.length; i++) {
//         let latter = numbers[i]
//         reverse.unshift(latter)
//     }
//     return reverse
// }
// const number = [1, 2, 3];
// console.log(takeArrayReturn(number));

// 04 Write a function that checks if a given value exists in an array.
// function removeSpecificElement(numbers, exists) {
//     return numbers.find(number => number === exists)
// }

// const number = [1, 2, 3];

// console.log(removeSpecificElement(number, 3));




// 06 Write a function that removes duplicate values from an array.
// const dublicate = ["masud", "masodur", "masud", "somun"];

// function dublicateF(arr){
//     let unique =[]
//     for (const singName of arr) {
//         if (unique.includes(singName)===false) {
//             unique.push(singName)
//         }
//     }
//     return unique
// }


// const result = dublicateF(dublicate)
// console.log(result);


//09 Write a function that removes a specific element from an array.
// function removeSpecificElement(numbers, removenum) {
//     return numbers.filter(number => number !== removenum)
// }

// const number = [1, 2, 3];

// console.log(removeSpecificElement(number, 2));