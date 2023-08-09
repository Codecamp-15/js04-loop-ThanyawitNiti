// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก
let n = +prompt('Digit');
let sum = 0;
let count = 0;
while(n) {
    let remainder = n % 10 ; // เอาไปหาร 10 แล้วเหลือเศษเท่าไหร่
    n = (n-remainder) / 10 ;
    sum += remainder ;
    count++;
}
console.log(sum)