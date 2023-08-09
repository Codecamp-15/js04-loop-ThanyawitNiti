// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหรือเปล่า
// let a ;
// for (let i =1 ; i <=100 ; i++) {
//      if (i/i === 1 || i/1 === i) {

//      }
// } console.log(a)
//5/1
//5/2
//5/3
//5/4
//5/5
// tecnic -> flag มองทุกอย่างเป็นจำนวนเฉพาะไว้ก่อน
// let isPrime;
let n;
for(let n = 2; n<=100 ; n++)  {
    let isPrime = true ; 
    // 8/1
    // 8/2 = 4
    // 9/3 
    // 10/2 = 5
    // 11/2
    // 11/3
    // 11/4
    // 11/5
    // 11/6
    // 11/7
    // 11/8
    // 11/9
    // 11/10
    
    for (let divider =2 ; divider < n; divider++) {
    if (n % divider == 0) isPrime = false;
    // 8/4 -> true ตัดขึ้น 9 
    // 9 /3 ลงตัว => ตัดขึ้น 10 
    break; // ทำให้รันไว้ขึ้น มีผลกับ ตัวเลขเยอะๆ
    //n =5 --- 5/2 => 1.6 => isPrime = true
    //n =5 --- 5/3 => 1.6 => isPrime = true
    //n =5 --- 5/4 => 1.6 => isPrime = true
    //n =5 --- 5/5 => 1 => isPrime = false
}
if(isPrime)console.log(`numner ${n} is prime number`); //=> //11
}
// if(isPrime) 
// else console.log(`numner ${n} is not prime number`)