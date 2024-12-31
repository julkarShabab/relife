export function calculateCalories(bmr, activityLevel) {
    const activityMultiplier = {
        sedentary: 1.2,
        lightly_active: 1.375,
        moderately_active: 1.55,
        very_active: 1.725,
        extra_active: 1.9
    };
    return (bmr * activityMultiplier[activityLevel]).toFixed(2);
}