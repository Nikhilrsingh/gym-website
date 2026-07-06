/*================ BMI CALCULATOR ================*/

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiBtn = document.getElementById("calculateBMI");
const bmiValue = document.getElementById("bmiValue");
const bmiProgress = document.getElementById("bmiProgress");
const idealWeight=document.getElementById("idealWeight");
const dailyCalories=document.getElementById("dailyCalories");
const fitnessGoal=document.getElementById("fitnessGoal");
const gymPlan=document.getElementById("gymPlan");
const bmiStatus = document.getElementById("bmiStatus");

if (bmiBtn) {

  bmiBtn.addEventListener("click", () => {

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
      bmiValue.innerHTML = "--";
      bmiStatus.innerHTML = "Please enter a valid height and weight.";
      bmiValue.style.color = "#ff2b2b";
      return;
    }

    const bmi = weight / ((height / 100) * (height / 100));
    const minWeight=(18.5*((height/100)*(height/100))).toFixed(1);
const maxWeight=(24.9*((height/100)*(height/100))).toFixed(1);

idealWeight.innerHTML=`${minWeight} - ${maxWeight} kg`;

let calories=Math.round(weight*33);

dailyCalories.innerHTML=calories+" kcal";

    bmiValue.innerHTML = bmi.toFixed(1);
    let percent = (bmi / 40) * 100;

if(percent > 100) percent = 100;

bmiProgress.style.width = percent + "%";

    if (bmi < 18.5) {

      fitnessGoal.innerHTML="Muscle Gain";
gymPlan.innerHTML="3 or 6 Month Strength Plan";

      bmiStatus.innerHTML =
      "🔵 Underweight<br><br>You should focus on a nutritious diet and strength training to build healthy muscle mass.";

      bmiValue.style.color = "#4FC3F7";

    }

    else if (bmi < 25) {

      fitnessGoal.innerHTML="Maintain Fitness";
gymPlan.innerHTML="General Fitness Plan";

      bmiStatus.innerHTML =
      "🟢 Normal Weight<br><br>Excellent! Maintain your healthy lifestyle with regular exercise and balanced nutrition.";

      bmiValue.style.color = "#4CAF50";

    }

    else if (bmi < 30) {

      fitnessGoal.innerHTML="Fat Loss";
gymPlan.innerHTML="6 Month Transformation Plan";

      bmiStatus.innerHTML =
      "🟠 Overweight<br><br>A structured workout plan and calorie-controlled diet can help you reach your fitness goals.";

      bmiValue.style.color = "#FF9800";

    }

    else {

      fitnessGoal.innerHTML="Weight Loss";
gymPlan.innerHTML="12 Month Transformation Plan";

      bmiStatus.innerHTML =
      "🔴 Obese<br><br>We recommend beginning a supervised fitness and nutrition program. Our trainers can help you safely achieve your goals.";

      bmiValue.style.color = "#F44336";

    }

  });

}

/*================ BMI TO CONTACT FORM ================*/

const fitnessBtn = document.getElementById("fitnessPlanBtn");

if (fitnessBtn) {

fitnessBtn.addEventListener("click", () => {

const messageBox = document.querySelector('[name="message"]');

if(messageBox){

messageBox.value =

`🏋 BMI Report

BMI : ${bmiValue.innerText}

Goal : ${fitnessGoal.innerText}

Suggested Plan : ${gymPlan.innerText}

Daily Calories : ${dailyCalories.innerText}

Ideal Weight : ${idealWeight.innerText}

I would like to know more about this plan.`;

}

});

}