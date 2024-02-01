const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true,
};

//a-
function displayStudentInfo(student) {
  for (let i in student) {
    console.log("Propert : ", i, " , ", " Value :", student[i]);
  }
}
displayStudentInfo(student);
