

// for (let number=0;number<20;number++){
//     for (let i = 2; i < number; i++) {
//         if(number % i === 0){
//             console.log(number, "not Prime Number");
//             break;
//         }
//         else if( i === number-1){
//             console.log(number, "prime number");
//             break
//         }

//     }
// }

for (let number = 0; number < 20; number++) {
    console.log(number);
    for (let i = 2; i < number; i++) {
        if (number % i ===0) {
            console.log(number,"number is not prime");
            break
        }
        else if (i === number -1) {
            console.log(number, "prime number");
        }
    }    
}

// function num(num) {
//     if (num <= 1) return false
//     for (let i = 2; i < num; i++) {
//         if (i % 2 === 0) {
//             console.log("not prime number");
//         }
//     }
//     console.log("prime number ", num);
// }
//     num(9)


// for (let i = 100; i > 0; i--) {
// console.log(i);
// }