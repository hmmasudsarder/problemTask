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

// function maxNumber(arr) {
//     let maxNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>maxNum) {
//             maxNum=arr[i]
//         }
//     }
//     // const masNum = Math.max(maxNum)
//     return maxNum
// }

// const numbers = [12473, 321, 21, 12, 329876]
// const result = maxNumber(numbers)
// console.log(result);


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


//05 Write a function that counts how many times a specific value appears in an array.

// function manyTime(arr, exists) {
//     const count = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element === exists) {
//             count.push(element)
//         }
//     }
//     const lengthCount = count.length
//     return { count, lengthCount }
// }

// const numbers = [1, 2, 1, 3, 2, 3, 4, 5, 6, 6, 6, 6, 7, 8, 9]
// const res = manyTime(numbers, 6)
// console.log(res);

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

// 07 Write a function that merges two arrays and returns the result.

function combail(arr, arr1) {
    const result = [...arr, ...arr1];
    return result
}

// const arr = [3, 23, 4, 5,];
// const arr1 = [43, 5, 3, 6, 9]
// let resu = combail(arr, arr1);
// console.log(resu);

//08 Write a function that returns a new array containing only the elements that are present in both arrays.

function containings(arr1, arr2){
    const newArry = [];
    for (const element of arr1) {
        for (const element2 of arr2) {
            if (element === element2) {
                newArry.push(element)
            }
        }
    }
    return newArry
}

const arr = [1, 2, 3, 4, 5,];
const arr1 = [3, 4, 5, 6, 9]

// const res = containings(arr, arr1)
// console.log(res);

//09 Write a function that removes a specific element from an array.
// function removeSpecificElement(numbers, removenum) {
//     return numbers.filter(number => number !== removenum)
// }

// const number = [1, 2, 3];

// console.log(removeSpecificElement(number, 2));




function sumArray(array1, array2){
    let arrapu = [];
    for (let i = 0; i < array1.length; i++) {
            for (let index = 0; index < array1.length; index++) {
                if (array1[i]+array1[index]===array2[0]) {
                    arrapu.push(i)
                    // arrapu.push(index)
                
                }
            }        
    }
    return arrapu
}

const array1 = [4, 5, 2, 8, 1, 2];
const array2 = [9];
const res = sumArray(array1, array2)
console.log(res);