function betterThanAverage(classPoints, yourPoints) {
  // Calculate the sum of classPoints
  const classPointsSum = classPoints.reduce((acc, point) => acc + point, 0);

  // Calculate the average of classPoints
  const classPointsAverage = classPointsSum / classPoints.length;

  // Compare yourPoints to class average
  if (yourPoints > classPointsAverage) {
    return true;
  } else {
    return false;
  }
}
