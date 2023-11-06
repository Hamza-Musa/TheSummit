function getGrade(s1, s2, s3) {
  let ave = (s1 + s2 + s3) / 3;
  if (ave >= 90) {
    return "A";
  } else if (ave >= 80) {
    return "B";
  } else if (ave >= 70) {
    return "C";
  } else if (ave >= 60) {
    return "D";
  } else {
    return "F";
  }
}
