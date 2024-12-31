export function calculateTargetHeartRate(age) {
    const maxHeartRate = 220 - age;
    const lowerBound = (maxHeartRate * 0.5).toFixed(0);
    const upperBound = (maxHeartRate * 0.85).toFixed(0);
    return { lowerBound, upperBound };
}