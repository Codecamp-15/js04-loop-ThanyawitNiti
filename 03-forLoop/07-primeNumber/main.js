// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหรือเปล่า



let n;
for(let n = 2; n<=100 ; n++)  {
    let isPrime = true ; 

    
    for (let divider =2 ; divider < n; divider++) {
    if (n % divider == 0) isPrime = false;
   
    break; 

}
if(isPrime)
console.log(`numner ${n} is prime number`); 
}
