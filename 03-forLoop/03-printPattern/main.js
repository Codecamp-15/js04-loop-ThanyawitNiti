//บรรทัด แรก มี 1 สตาร์

// a ='*'
// for ( i = * ;)
// print 4 แถวยังไง
//let อยู่ข้างนอก ตัวแปรถูก อัปเดตเรื่อยๆ
//let str='';
// for (let i = 1 ; i <= 5 ; i++) {
//     // console.log('*')
//     let str = '';
//     for (let j = 1 ; j <= 5 ; j++){
//         str = str + '*';
//     }
//     console.log(str);
// }
// star pattern
// forloop
// pattern recog
// for (let i = 1 ; i <= 4 ; i++) {
//     // console.log('*')
//     let str = '';
//     for (let j = 1 ; j <= i ; j++){
//         str = str + '*';
//     }
//     console.log(str);
// }

let str =''
for ( let i =1; i <=4 ; i++) {
    for ( let j =1; j <=4 ; j++){
        if ( j<=i) str += '*';
    }
    str += '\n';

}
console.log(str)