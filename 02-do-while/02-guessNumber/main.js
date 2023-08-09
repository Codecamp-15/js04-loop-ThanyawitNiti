// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

// program-1 : input user-1
// let ansNumber = prompt('Enter your magic number');
// ในนี้สามารถมีอะไรได้บ้าง null,string : '' , '   ' ,'qeqwe','12'
// ansNumber === null || ansNumber.trim() === '' || isNaN(ansNumber)
// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === ''; // expression ไม่ได้เพราะเป็น null จึง -> isValid
// let isNan = isNaN(ansNumber);
// if (isNull || isEmpty || isNan) {
//     alert('Invalid Input');
// }
// let isValid = ansNumber === null || ansNumber.trim() === '' || isNaN(ansNumber) ;
// // null ไว้ข้างหน้าเหมือนเอามาเป็น Guard 
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99 ;
// let isInRange = Number(ansNumber) >= 1 || Number(ansNumber) <= 99;
// if (isValid) {
//     alert('Invalid Input');
// } else if (outOfRange) {
//     alert('Invalid Range');
// } else if (isInRange) {
//     alert('Try to guess number'); // Program : Player 2
// }
// Program 1 Version 2 พยายามทำให้รับ input เรื่อยๆ จนกว่าจะพิมพ์ถูก แต่ให้กด ESC ยกเลิกได้
// let ansNumber = ''
// let isEmpty ;
// let isNan ;
// do {
//     ansNumber = prompt('Enter your magic number');
//     //handle null if
//     if (ansNumber !== null) {
//     isEmpty = ansNumber.trim() === '';
//     isNan = isNaN(ansNumber); 
//     }
    
    
// } while (ansNumber == null ||isEmpty || isNan)  //เมื่อไม่ใช่ช่องว่าง ถ้าค่า empty หรือ nan true วนกลับ -> เด้ง promt 


let ansNumber = '42';
let isEmpty ;
let isNan ;
let outOfRange;
do {
    ansNumber = prompt('Enter your magic number') || ''; // null || ''
    
    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber); 
    outOfRange = +ansNumber < 1 || +ansNumber > 99;
    if (isEmpty||isNan) {
        alert('Invalid input');
    } else if (outOfRange ) {
        alert('invalid Range,try1-99');
    }
    
    
} while (isEmpty || isNan )

//Program 2 : Guess
// ทายซ้ำ 
// +hint outofrange
// +hint Invalid Range
// +hint to High, too Low
// alert Correct
// + ทายได้ไม่เกิน 5 ครั้ง
let guessNumber;

do {
    guessNumber = prompt('Enter your answer') || '';
    isEmpty = guessNumber.trim() === '';
    isNan = isNaN(guessNumber); 
    outOfRange = +guessNumber < 1 || +guessNumber > 99;
    if (isEmpty||isNan) {
        alert('Invalid input');
    } else if (outOfRange ) {
        alert('invalid Range,try1-99');
    } else if (+guessNumber > +ansNumber) {
        alert('too high')
    }else if (+guessNumber < +ansNumber) {
        alert('too low')
    }else if (+guessNumber === +ansNumber) {
        alert('Correct')
    }
    
} while(+guessNumber != +ansNumber);