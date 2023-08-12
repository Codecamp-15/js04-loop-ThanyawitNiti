// // 1 + 2 +3 ...+100 
// // even 2 + 4 +6 +.. +100
// // odd 1 + 3 + 5 +7 +..+99

let sumall =0;
for ( let i = 1 ; i <=100 ; i++) {
    
    sumall = sumall + i
    // 1  -> sum = 0 +1  = 1
    //2 ->   sum = 1 +2  = 3
    //3 ->   sum = 3 +3  = 6
}
console.log(sumall)
        


let sumEven = 0;
let sumOdd = 0 ;
let sum = 0;
for ( let i = 1 ; i <=100 ; i ++) {
    sum += i;
    // console.log(sum)
    if ( i% 2 ==0) sumEven += i;
    // sumEven = 2 + 4 +6...
    else sumOdd += i;
}
console.log(sumEven,sum-sumEven,sumOdd)





// let sumEvenSquare = 0;
// let sumThird = 0;
// for (let i = 1 ; i <= 100 ; i++) {
//     if ( i % 2 == 0) {
//         console.log(`${i}^2`);
//         sumEvenSquare = sumEvenSquare + i**2;
//         // 1st   4  = 0 + (2**2)
//         //2st    20 = 4 + (4**2) 
//         console.log(sumEvenSquare)
//     } if ( i % 3 == 0) { 
//         console.log(`${i}^2`);
//         sumThird = sumThird + i**2;
//         // 1st   9  = 0 + (3**2)
//         //2st    45 = 4 + (3**2)
//         console.log(sumThird)
//     }
// }

let sumEvenSquare = 0;
for (let i = 1 ; i <= 100 ; i++) {
        if ( i % 2 == 0) {
            sumEvenSquare = sumEvenSquare + i**2; } }
console.log(sumEvenSquare);

let sumThird = 0;
for (let i = 1 ; i <= 100 ; i++) {
    if ( i % 3 == 0) {
        console.log(`${i}`);
        console.log(`${sumThird} = ${sumThird} + ${i} **2`);
        sumThird  = sumThird  + i ** 2;  
        console.log(`${sumThird} `);
    }
}

console.log(sumThird);

console.log (`sumEvenSq : ${sumEvenSquare}`);
console.log (`sumthirdSq : ${sumThird}`);
console.log (`result : ${sumEvenSquare - sumThird}`);

