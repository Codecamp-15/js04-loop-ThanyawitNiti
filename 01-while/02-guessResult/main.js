// ไม่เหมือน โดยตัวแรกจะเริ่มที่ 0 
// ตัวที่ สองจะเริ่มที่ 1 เพราะ i++ จะทิ้งค่าเก่าไว้ให้คนอื่น
// โค้ดทั้งสองให้ผลลัพธ์ออกมาเหมือนกันหรือไม่

```js
let i = 0;
while (++i < 5) alert(i);
```

```js
let i = 0;
while (i++ < 5) alert(i);
```
