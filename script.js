function btnCalculate() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value 
    
    let bmi = weight / ((height/100)*(height/100))

    if (bmi < 18.5) {
        document.getElementById('result').innerHTML = "Your BMI is <strong>" + bmi.toFixed(1) + "</strong> which means you are <strong>Underweight</strong>"
    }
    else if (bmi >= 18.5 && bmi <=24.9) {
        document.getElementById('result').innerHTML = "Your BMI is <strong>" + bmi.toFixed(1) + "</strong> which means you are <strong>Normal</strong>"
    }
    else if (bmi >24.9 && bmi <=29.9)   {
        document.getElementById('result').innerHTML = "Your BMI is <strong>" + bmi.toFixed(1) + "</strong> which means you are <strong>Overweight</strong>"
    }
    else {
        document.getElementById('result').innerHTML = "Your BMI is <strong>" + bmi.toFixed(1) + "</strong> which means you are <strong>Obesity</strong>"

    }
}
