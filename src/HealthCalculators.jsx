import React, { useState } from 'react';
import './HealthCalculators.css';
import { calculateBMI } from './bmiCalculator';
import { calculateBMR } from './bmrCalculator';
import { calculateCalories } from './calorieCalculator';
import { calculateTargetHeartRate } from './heartRateCalculator';

function HealthCalculators() {
    const [weight, setWeight] = useState(70); // Default weight in kg
    const [height, setHeight] = useState(170); // Default height in cm
    const [age, setAge] = useState(25); // Default age in years
    const [gender, setGender] = useState('male'); // Default gender
    const [activityLevel, setActivityLevel] = useState('sedentary');

    const bmi = calculateBMI(weight, height);
    const bmr = calculateBMR(weight, height, age, gender);
    const calories = calculateCalories(bmr, activityLevel);
    const heartRate = calculateTargetHeartRate(age);

    return (
        <div className="calculator-container">
            <h1 className="title">Health Calculators</h1>
            <div className="calculator-section">
                <h2>BMI Calculator</h2>
                <p>BMI: {bmi}</p>
            </div>

            <div className="calculator-section">
                <h2>BMR Calculator</h2>
                <p>BMR: {bmr} kcal/day</p>
            </div>

            <div className="calculator-section">
                <h2>Calorie Intake Calculator</h2>
                <p>Calories: {calories} kcal/day</p>
            </div>

            <div className="calculator-section">
                <h2>Target Heart Rate</h2>
                <p>Target Heart Rate Range: {heartRate.lowerBound} - {heartRate.upperBound} bpm</p>
            </div>

            <div className="input-section">
                <h3>Inputs</h3>
                <label>
                    Weight (kg):
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="input-field"
                    />
                </label>

                <label>
                    Height (cm):
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="input-field"
                    />
                </label>

                <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="input-field"
                    />
                </label>

                <label>
                    Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="input-field">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>

                <label>
                    Activity Level:
                    <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="input-field">
                        <option value="sedentary">Sedentary</option>
                        <option value="lightly_active">Lightly Active</option>
                        <option value="moderately_active">Moderately Active</option>
                        <option value="very_active">Very Active</option>
                        <option value="extra_active">Extra Active</option>
                    </select>
                </label>
            </div>
        </div>
    );
}

export default HealthCalculators;