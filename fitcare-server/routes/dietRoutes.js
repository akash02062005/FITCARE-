const express = require('express');
const router = express.Router();
const Diet = require('../models/Diet');
const generateDiet = ({ age, gender, goal, preference, allergies }) => {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isYoung = age < 30;
  const isMid = age >= 30 && age < 50;
  const isSenior = age >= 50;

  const hydrationTips = [
    "Drink 2.5–3 liters of water daily.",
    "Start your morning with warm lemon water.",
    "Drink herbal teas to improve digestion.",
    "Avoid sugary drinks and opt for infused water.",
    "Coconut water post-workout is great for electrolytes."
  ];

  const mealPatterns = [
    "Split your meals into 3 major and 2 minor meals a day.",
    "Follow 16:8 intermittent fasting for fat adaptation.",
    "Avoid heavy dinners and eat protein-rich breakfasts.",
    "Eat every 4 hours to maintain stable blood sugar levels."
  ];

  const lifestyleTips = [
    "Sleep at least 7–8 hours daily.",
    "Walk 10,000 steps a day and stretch often.",
    "Do not skip meals — balance is key.",
    "Track your food and hydration using an app.",
    "Limit screen time and stay mindful while eating."
  ];

  const weightLossFoods = [
    "Include leafy greens, oats, cucumbers, and yogurt.",
    "Snack on fruits like papaya and apples.",
    "Add chia seeds and flaxseeds to smoothies.",
    "Avoid fried foods, sweets, and refined carbs."
  ];

  const muscleGainFoods = [
    "Include eggs, paneer, chicken breast, and whey protein.",
    "Use peanut butter, nuts, and bananas for mass.",
    "Eat quinoa, legumes, and cottage cheese regularly.",
    "Have a high-protein smoothie post workout."
  ];

  const maintenanceFoods = [
    "Maintain balance with brown rice, dal, vegetables, and fruits.",
    "Ensure enough fiber, iron, and vitamin B12 in your diet.",
    "Use minimal oil and stay away from packaged snacks."
  ];

  const preferences = {
    keto: [
      "Eat cheese, avocados, eggs, and nuts.",
      "Use olive oil and butter as fat sources.",
      "Avoid all bread, rice, and sugar-heavy fruits.",
      "Use coconut flour or almond flour for baking."
    ],
    vegan: [
      "Focus on tofu, legumes, quinoa, and leafy vegetables.",
      "Use plant milk and avoid honey.",
      "Take B12 supplements and include nutritional yeast.",
      "Include soy products and beans daily."
    ],
    vegetarian: [
      "Rely on lentils, dairy, sprouts, and fruits.",
      "Limit fried items like samosas and pakoras.",
      "Use ghee or olive oil in moderation.",
      "Include curd, paneer, and jaggery for strength."
    ],
    indian: [
      "Eat roti, dal, sabzi, and curd with rice in moderation.",
      "Avoid deep-fried snacks like bhujia and samosas.",
      "Snack on roasted chana or fruit chaat.",
      "Add turmeric and ginger to meals for anti-inflammation."
    ],
    mediterranean: [
      "Include hummus, olives, fish, and nuts.",
      "Use extra virgin olive oil generously.",
      "Base meals around beans, lentils, and grilled vegetables.",
      "Consume red wine occasionally with dinner."
    ],
    default: [
      "Eat whole foods: vegetables, fruits, legumes, nuts, and lean meats.",
      "Avoid processed sugar and flour-based snacks.",
      "Cook at home with fresh ingredients daily.",
      "Use herbs like parsley, basil, and garlic in your meals."
    ]
  };

  let plan = "";

  if (isYoung) {
    plan += "🔥 As you're younger, your metabolism is faster — focus on nutrient-dense foods. ";
  } else if (isMid) {
    plan += "⚖️ Maintain your energy with balanced macros and regular workouts. ";
  } else if (isSenior) {
    plan += "🧓 For seniors, ensure enough calcium, fiber, and avoid heavy meals at night. ";
  }

  if (gender === "Female") {
    plan += "👩 Include iron-rich foods and calcium to support hormonal balance. ";
  } else if (gender === "Male") {
    plan += "👨 Focus on strength-building nutrients and avoid excess caffeine. ";
  }

  if (goal === "Weight Loss") {
    plan += pick(weightLossFoods) + " ";
  } else if (goal === "Muscle Gain") {
    plan += pick(muscleGainFoods) + " ";
  } else {
    plan += pick(maintenanceFoods) + " ";
  }

  const prefKey = preference?.toLowerCase() || "default";
  const prefList = preferences[prefKey] || preferences.default;
  plan += pick(prefList) + " ";

  if (allergies && allergies.trim()) {
    plan += `⚠️ Avoid allergens such as ${allergies.trim()}. Use alternatives where possible. `;
  }

  plan += pick(hydrationTips) + " ";
  plan += pick(mealPatterns) + " ";
  plan += pick(lifestyleTips);

  return plan;
};

router.post('/recommend', async (req, res) => {
  const { age, gender, goal, preference, allergies } = req.body;

  try {
    const recommendation = generateDiet({ age, gender, goal, preference, allergies });
    const entry = new Diet({
      age,
      gender,
      goal,
      preference,
      allergies,
      plan: recommendation
    });

    await entry.save();
    res.json({ recommendation });
  } catch (err) {
    console.error('❌ Error saving diet:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
