
let weight = +prompt("Nhap can nang vao day");
let height = +prompt("Nhap chieu cao ao day");
let bmi = weight / (height ^ 2);
if (bmi < 18.5)
    document.write("Underweight");
else if (bmi < 25.0)
    document.write("Normal");
else if (bmi < 30.0)
    document.write("Overweight");
else
    document.write("Obese");
