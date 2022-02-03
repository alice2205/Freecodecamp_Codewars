// Calculate BMI
function bmi(weight, height) {
    let ind = weight / (height**2);
    if (ind<= 18.5)  {return "Underweight"}
    else if (ind<= 25.0)  {return  "Normal"}
    else if (ind<= 30.0)  {return "Overweight"}
    else if (ind> 30)  {return "Obese"}
}