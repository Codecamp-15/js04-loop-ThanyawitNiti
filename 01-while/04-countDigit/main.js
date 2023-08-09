let n = +prompt('Digit');
// console.log(i);
//pattern recognition
// 1150 /10 -> 115 -> count =1 ;
// 115 /10 -> 11/5 -> count =2 ;
// 11.5/10 -> 1.15 -> count =3;
// 1.15/10 -> 0.115 -> count =4 ;
// ความยาก คิดให้ถี่ถ้วนแล้วเอามาใส่ condition
let count = 0;
//สำหรับเลขติดลบ
if (n < 0 ) n = -n;
while ( n >= 1) {
    console.log(n);
    count++;
    n = n / 10;
    // 11.5/10 -> 1.15 -> น้อยกว่า 10 จึง stop 
}
console.log(count)


//(1152 -2) /10 -> n=115
    // (115 * 10) +2
//(115- 5) /10 -> n=11
//(11-1) /10 -> n = 1
//(1-1) /10 -> n =0
// let sum = 0;
// while(n) {
//     let remainder = n % 10 ; // เอาไปหาร 10 แล้วเหลือเศษเท่าไหร่
//     n = (n-remainder) / 10 ;
//     sum += remainder ;
//     count++;
// }
// console.log(count,sum)





