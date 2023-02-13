const calculateBMI = (weight, height) => weight / (height * height);
const bmi = calculateBMI(73, 1.8288);

if (bmi < 18.5) console.log("Underweight");
else if (bmi > 18.5 && bmi < 24.9) console.log("Normal");
else if (bmi > 25 && bmi < 29.9) console.log("Overweight");
else console.log("Obese");
