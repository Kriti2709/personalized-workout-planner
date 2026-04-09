const calculateMacros = (user) => {
  const { weight, height, age, gender, goal } = user;

  let bmr =
    gender === "female"
      ? 10 * weight + 6.25 * height - 5 * age - 161
      : 10 * weight + 6.25 * height - 5 * age + 5;

  const tdee = bmr * 1.55;

  let calories, protein, fat, carbs;

  if (goal === "muscle_gain") {
    calories = tdee + 300;
    protein = weight * 2.2;
    fat = weight * 1.2;
  } else if (goal === "weight_loss") {
    calories = tdee - 400;
    protein = weight * 2.0;
    fat = weight * 0.9;
  } else {
    calories = tdee;
    protein = weight * 1.8;
    fat = weight * 1.0;
  }

  carbs = (calories - protein * 4 - fat * 9) / 4;
  if (carbs < 50) carbs = 50;

  return { calories, protein, carbs, fat, tdee, bmr };
};

const getDietPlan = (user) => {
  const macros = calculateMacros(user);

  return {
    macros,
    meals: [
      { time: "7:00", type: "Pre-workout", foods: [{ name: "Oats", calories: 420 }] },
      { time: "10:30", type: "Post-workout", foods: [{ name: "Whey Protein", calories: 160 }] },
      { time: "13:00", type: "Lunch", foods: [{ name: "Chicken & Rice", calories: 500 }] },
      { time: "16:00", type: "Snack", foods: [{ name: "Yogurt", calories: 130 }] },
      { time: "20:00", type: "Dinner", foods: [{ name: "Salmon", calories: 350 }] }
    ]
  };
};

module.exports = { calculateMacros, getDietPlan };