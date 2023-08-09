// ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข

let n = +prompt('Digit');

let count = 0;

if (n < 0 ) n = -n;
while ( n >= 1) {
    console.log(n);
    count++;
    n = n / 10;
}
console.log(count)






