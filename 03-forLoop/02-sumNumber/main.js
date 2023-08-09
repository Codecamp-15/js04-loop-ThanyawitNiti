// // 1 + 2 +3 ...+100 
// // even 2 + 4 +6 +.. +100
// // odd 1 + 3 + 5 +7 +..+99
// ทำซ้ำๆ concept แรก ที่จะนึกถึงคือ loop 
//2.1
// let sum =0;
// for ( let i = 1 ; i <=100 ; i++) {
//     // let sum = 0; worng !!!!! พอขึ้นรอบใหม่ sum จะ 0 
//     // ต้องเอาไว้ข้างนอก 
//     sum = sum + i
//     // 1  -> sum = 0 +1  = 1
//     //2 ->   sum = 1 +2  = 3
//     //3 ->   sum = 3 +3  = 6
//     console.log(sum)
        

// }
//5050
//2.2
// even 2 + 4 +6 +.. +100
// let b = 0
// for ( let i = 2 ; i <=100 ; i += 2) {

//     b = b + i 
//     // 1  -> b = 0 +2 
//     //2 ->   b = 2 +4  
//     //3 ->   b = 6 +6  
//     console.log(b)
        

// } //2550

//2.2
let sumEven = 0;
let sumOdd = 0 ;
let sum = 0;
for ( let i = 1 ; i <=100 ; i ++) {
    sum += i;
    if ( i% 2 ==0) sumEven += i;
    // sumEven = 2 + 4 +6...
    else sumOdd += i;
}
console.log(sumEven,sum-sumEven,sumOdd)

//2.2
// odd 1 + 3 + 5 +7 +..+99

// let c = 0
// for ( let i = 1 ; i <=100 ; i += 2) {

//     c = c + i
//     // 1  -> c = 0 +1 
//     //2 ->   c = 1 +3  
//     //3 ->   c = 4 +5  
//     console.log(c)
// } //2500

// % 2 == 0 * 2
//  -
// % 3 == 3 * 2

// let a = 0;
// let b = 0;
// let c;
// let d;
// for (let i = 1 ; i <= 100 ; i++) {
//     for ( let z = 0 ; z % 2 ==0 ; z++) {
//         console.log(`${i} `)

//     }
        
//     // a = a + (i % 2 == 0) 
//     // a = 0 + 2 -> 2
//     // a = 2 + 4 -> 6
//     if (i % 2 == 0) {
//         c = (a + i) * 2; 
//         console.log(c);
//     } else if ( i % 3 == 0) {
//         d = (a + i ) *2 
//     }
// }
// if else จะมีปัญหาเลข 6 เพราะ หาร 2/3 ลงตัว เข้าแค่ if ไม่เข้า else 
// ควรแยกเป็น สอง if 

// let sumEvenSquare = 0;
// let sumThird = 0;
// for (let i = 1 ; i <= 100 ; i++) {
//     if ( i % 2 == 0) {
//         // console.log(`${i}^2`);
//         sumEvenSquare = sumEvenSquare + i**2;
//     } if ( i % 3 == 0) { 
//         // console.log(`${i}^2`);
//         sumThird = sumThird + i**2;
//     }
// }
// let sumEvenSquare = 0;
// for (let i = 1 ; i <= 100 ; i++) {
//         if ( i % 2 == 0) {
//             sumEvenSquare = sumEvenSquare + i**2; } }
// sumEvenSquare = 2;
// for (let i = 1 ; i <= 100 ; i++) {
//     if ( i % 2 == 0) {
//         sumEvenSquare = 2 = sumEvenSquare= 2  + i2 ** 2; } }
// sumEvenSquare = 6;

// console.log (`sumEvenSq : ${sumEvenSquare}`);
// console.log (`sumthirdSq : ${sumThird}`);
// console.log (`result : ${sumEvenSquare - sumThird}`);

//องค์ประกอบในการเขียนโปรแกรม
// เข้าใจเครื่องมือ tools -> JS 
// การทำความเข้าใจตัวปัญหา
// การเข้าใจตัวปัญหา become -> Hard skill Design solution
