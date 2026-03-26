import readline from "readline";

// Camel case -> celsiusToFahrenheit -> JS functions
// Pascal case -> CelsiusToFahrenheit -> React components

function celsiusToFahrenheit(celsius) { //
  return (celsius * 9) / 5 + 32; //แสดงการคำนวณอุณหภูมิจากเซลเซียสเป็นฟาเรนไฮต์ โดยการคูณค่าอุณหภูมิในหน่วยเซลเซียสด้วย 9 แล้วหารด้วย 5 และบวกด้วย 32 เพื่อให้ได้ค่าอุณหภูมิในหน่วยฟาเรนไฮต์
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9; //แสดงการคำนวณอุณหภูมิจากฟาเรนไฮต์เป็นเซลเซียส โดยการลบ 32 จากค่าอุณหภูมิฟาเรนไฮต์แล้วคูณด้วย 5 และหารด้วย 9 เพื่อให้ได้ค่าอุณหภูมิในหน่วยเซลเซียส
}

const rl = readline.createInterface({
  input: process.stdin, //พารามิเตอร์ที่ใช้ในการรับข้อมูลจากผู้ใช้ผ่านทางคอนโซล
  output: process.stdout, //พารามิเตอร์ที่ใช้ในการรับข้อมูลจากผู้ใช้และแสดงผลลัพธ์ในคอนโซล
});

rl.question("Enter your temperature:", function (tempInput) {
  const temp = parseFloat(tempInput); //แปลงค่าที่ผู้ใช้ป้อนเป็นตัวเลขทศนิยมโดยใช้ฟังก์ชัน parseFloat ซึ่งจะช่วยให้สามารถคำนวณอุณหภูมิได้อย่างถูกต้อง
  rl.question("Enter unit (C or F):", function (unitInput) {
    const unit = unitInput.trim().toUpperCase(); //แปลงค่าที่ผู้ใช้ป้อนเป็นตัวอักษรตัวใหญ่และลบช่องว่างที่ไม่จำเป็นออกด้วยฟังก์ชัน trim() และ toUpperCase() เพื่อให้สามารถตรวจสอบหน่วยได้อย่างถูกต้อง

    let result; //ประกาศตัวแปร result เพื่อเก็บผลลัพธ์ของการแปลงอุณหภูมิที่ได้จากฟังก์ชัน celsiusToFahrenheit หรือ fahrenheitToCelsius ขึ้นอยู่กับหน่วยที่ผู้ใช้ป้อนเข้ามา

    // if statement
    if (unit === "C") { //ตรวจสอบว่าหน่วยที่ผู้ใช้ป้อนเป็น "C" หรือไม่ ถ้าใช่ก็จะทำการแปลงอุณหภูมิจากเซลเซียสเป็นฟาเรนไฮต์
      result = celsiusToFahrenheit(temp);
      console.log(`${temp}C is ${result.toFixed(2)}F`); //แสดงผลลัพธ์ของการแปลงอุณหภูมิจากเซลเซียสเป็นฟาเรนไฮต์ โดยใช้ template literal เพื่อแสดงค่าอุณหภูมิในหน่วยเซลเซียสและฟาเรนไฮต์ โดยใช้ toFixed(2) เพื่อจำกัดทศนิยมให้แสดงเพียง 2 ตำแหน่ง
    } else if (unit === "F") { //ตรวจสอบว่าหน่วยที่ผู้ใช้ป้อนเป็น "F" หรือไม่ ถ้าใช่ก็จะทำการแปลงอุณหภูมิจากฟาเรนไฮต์เป็นเซลเซียส
      result = fahrenheitToCelsius(temp);
      console.log(`${temp}F is ${result.toFixed(2)}C`); //แสดงผลลัพธ์ของการแปลงอุณหภูมิจากฟาเรนไฮต์เป็นเซลเซียส โดยใช้ template literal เพื่อแสดงค่าอุณหภูมิในหน่วยฟาเรนไฮต์และเซลเซียส โดยใช้ toFixed(2) เพื่อจำกัดทศนิยมให้แสดงเพียง 2 ตำแหน่ง
    } else {
      console.log(`Invalid unit! Please enter C or F.`); //แสดงข้อความแจ้งเตือนเมื่อผู้ใช้ป้อนหน่วยที่ไม่ถูกต้อง โดยใช้ template literal เพื่อแสดงข้อความว่า "Invalid unit! Please enter C or F." ซึ่งหมายความว่าหน่วยที่ผู้ใช้ป้อนไม่ถูกต้องและควรป้อนเป็น C หรือ F เท่านั้น
    }
    rl.close(); //ปิดการเชื่อมต่อกับ readline หลังจากที่ได้แสดงผลลัพธ์หรือข้อความแจ้งเตือนแล้ว เพื่อให้โปรแกรมสิ้นสุดการทำงานอย่างถูกต้อง
  });
});