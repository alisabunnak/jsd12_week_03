import readline from "readline";

// ค่าคงที่สำหรับแปลงหน่วย
const KG_TO_LB = 2.20462;      // 1 กิโลกรัม = 2.20462 ปอนด์
const G_TO_LB = 0.00220462;    // 1 กรัม = 0.00220462 ปอนด์

// ฟังก์ชันแปลงกิโลกรัม -> ปอนด์
function kgToLb(kg) {
  return kg * KG_TO_LB;
}

// ฟังก์ชันแปลงกรัม -> ปอนด์
function gToLb(g) {
  return g * G_TO_LB;
}

// สร้าง interface สำหรับรับข้อมูลจากผู้ใช้ใน terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// รับค่าน้ำหนักจากผู้ใช้
rl.question("Enter weight value: ", function (valueInput) {
  const value = parseFloat(valueInput); // แปลงค่าที่รับมาเป็นตัวเลข

  // ตรวจสอบว่าผู้ใช้กรอกเป็นตัวเลขหรือไม่
  if (isNaN(value) || value < 0) {
    console.log("Invalid value! Please enter a valid positive number.");
    rl.close();
    return;
  }

  // รับหน่วยจากผู้ใช้
  rl.question("Enter unit (KG or G): ", function (unitInput) {
    const unit = unitInput.trim().toUpperCase(); // ลบช่องว่างและแปลงเป็นตัวพิมพ์ใหญ่

    let result; // ตัวแปรเก็บผลลัพธ์

    if (unit === "KG") {
      // ถ้าเป็นกิโลกรัม ให้แปลงเป็นปอนด์
      result = kgToLb(value);
      console.log(`${value} kg is ${result.toFixed(2)} lb`);
    } else if (unit === "G") {
      // ถ้าเป็นกรัม ให้แปลงเป็นปอนด์
      result = gToLb(value);
      console.log(`${value} g is ${result.toFixed(4)} lb`);
    } else {
      // ถ้าหน่วยไม่ถูกต้อง
      console.log("Invalid unit! Please enter KG or G.");
    }

    rl.close(); // ปิดโปรแกรม
  });
});