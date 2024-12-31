export function calculateBMI(weight, height) {
    const heightInMeters = height / 100; 
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2); 
}