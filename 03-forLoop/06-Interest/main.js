// - ให้คำนวณเงินฝากสะสมโดยปีที่ 1 มีเงินเริ่มต้น 100,000 ธนาคารให้ดอกเบี้ยร้อยละ 2.5 ต่อปี
// - โดยจ่ายดอกเบี้ยปีละครั้ง ดอกเบี้ยที่ได้จะสะสมและทบยอดไปในเงินฝากปีถัดไป
// - เมื่อครบ 10 ปี จะมียอดเงินฝากสะสมเท่าใด (ไม่มีการฝากเพิ่มและถอนออก)

//  1st = 100_000

// 2.5 % ของ 100_000 = 100_000 x 2.5 / 1000 => 2500



let m = 100_000;
let r;
for (i =1 ; i <= 10 ; i ++) {
    r = m * 2.5  /100 
    console.log(` ดอกเบี้ย + เงินต้น `)
    m = m + r
    console.log(`ปีที่ : ${i}  ${r.toFixed(2)} + ${m.toFixed(2)} = ${m.toFixed(2)} `)
}
// console.log(i)

console.log(m.toFixed(2))