// ประเภทของ Loop
// condition loop -> ถ้า logic ไม่ดี พังง่าย ถ้า true ตลอด จะกลายเป็น infinite loop
// ตัดสินใจว่าจะ รันต่อไหม โดย base on Boolean
// counting Loop
// ตัดสินใจว่าจะทำต่อไหมจากตัวเลข
// list Loop
// ตัดสินใจว่าจะทำต่อไหมจากจำนวนของในรายการ -> check stock สินค้า -> แบ่งเป็นอีก 3 ประเภท
// condition loop : While Loop
// ตัดสินใจ จาก condition 
// while (condition ตัวตัดสินใจ ถ้าเป็นจริง loop body ถูกรัน พอรันจบ จะกลับมาที่นี่อีกรอบ ถ้าเป็น false หยุดเดิน) {
//     loop body 
//  } แนะนำให้เขียน () ที่หลัง กันเผลอ save และ คอมค้าง

// let i =1 ;
// while( i <=10 ) { // ตามใดที่ i น้อยกว่า 10 ให้ รันไปเรื่อยๆ
//     // loop block
//     console.log(i)
//     // i = i + 1;
//     // i++;
//     ++i;
// }
// console.log("end...")

// // if else ประยุกต์ กับ loop 
// let i =1 ;
// while( i <=20 ) {  //loop run 20 times
//     if ( i%3 == 0) { // 1/3 ->fase -> dont do if second 2/3 ->fase -> skip if third 3/3 -> do if
//     console.log(i); // ต้องผ่าน if ถึงทำ log 
//     }
//     // if ( i%3 !=0 )
//     else if  ( i % 5 == 0) {
//         console.log(`${i} High Five`); // 15 will not show `${i} High Five` because logic do %3 first so switch % 5 to first
//     }
// }
// console.log("end...")

// FizzBuzz
// Range 1-20
// divided by 3 == 0 : print Fizz
// divided by 5 == 0 : print Buzz
// divided by 3 and 5 == 0 : print Fizz Buzz
// others : print number
// ค่อยๆทำทีลบรรทัด
// handle ที่เป็นปัญหาcondition ที่ยากสุด แต่เขียนจากแบบง่าย
let i = 1;
while ( i <= 20) {
    // if (i % 5 === 0 && i % 3 === 0) {
    //     console.log('Fizz Buzz') ;
    // } else if (i % 3 === 0) {
    //     console.log('FIzz');
    // } else if (i % 5 === 0 ) {
    //     console.log('Buzz');
    // } else {
    //     console.log(i);
    // }
    // i++;
    i % 5 === 0 && i % 3 === 0
        ? console.log('Fizz Buzzzzz')
        : i % 3 === 0
        ?console.log('FIzz')
        :i % 5 === 0
        ? console.log('Buzz')
        : console.log(i)
        i++;
}
console.log('end')