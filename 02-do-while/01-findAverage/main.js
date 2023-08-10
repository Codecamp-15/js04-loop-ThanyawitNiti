// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา
// 
// GET : Input
// CHECK : number
// IF number
//     ADD number to sum
//     ADD 1 to count
//     BACK TO LINE 7 
// ELSE 
//     PRINT sum
//     PRINT average

//stop -> 0 ,  - , '' , cancel , esc

let input ;
let sum = 0;
let avg ;
let count = 0;


do { 
    input = +prompt('Enter Number');
    if (null || NaN || undefined || input <= 0 ) {
        break;
   }  
   sum = sum + input
    count++;
    avg = sum / count;
    console.log(`sum = ${sum} and avg = ${avg}`);


} while ( input>=1)  ;



