

<>Calculate BMI (8kyu)</>

function bmi(weight, height) {
    let ibm = weight/(height*height)
    if (ibm <= 18.5) return "Underweight"
    else if (ibm <= 25) return "Normal"
    else if (ibm <= 30) return "Overweight"
    else if (ibm > 30) return "Obese"};