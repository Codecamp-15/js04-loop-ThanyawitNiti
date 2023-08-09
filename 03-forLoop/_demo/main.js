//Advance : Nested Loop;
// Loop ซ้อน Loop
for (let i =2 ; i <=3 ; i++) {
    console.log(`เริ่มสูตรคูณแม่ ${i}`);
    for(let j = 1 ; j <=12 ; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        

    }
    console.log('\n'); //เว้นบรรทัด
}
console.log('end..')