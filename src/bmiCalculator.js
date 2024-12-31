export function calculateBMI(weight, height) {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2); // Return BMI rounded to two decimal places
}