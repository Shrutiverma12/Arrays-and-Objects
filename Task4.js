const student = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
];

//1-Add a student
function addStudent(firstName, lastName, age, grade) {
  student.push({
    id: student.length + 1,
    firstName: firstName,
    lastName: lastName,
    age: age,
    grade: grade,
  });
}
addStudent("Shruti", "Verma", 19, "A");

//2-Update Student
function updateInfo(id, firstName, lastName, age, grade) {
  student[id - 1].firstName = firstName;
  student[id - 1].lastName = lastName;
  student[id - 1].age = age;
  student[id - 1].grade = grade;
}

updateInfo(3, "Niyati", "Goal", 15, "B");

//3-Delete a Student:
function deleteStudent(id) {
  student.splice(id - 1, 1);
}

//deleteStudent(2, 1);

//4-List All Students:
function ListStudent() {
  for (let i in student) {
    console.log(student[i].firstName, student[i].lastName);
  }
}

//ListStudent();

//5-Find Students by Grade:
function findStudentByGrade(grade) {
  return student.filter((element) => {
    return element.grade === grade;
  });
}

let x = findStudentByGrade("A");

//5-Calculate Average Age:
function averageAge() {
  let averageAge = student.reduce((acc, cur) => {
    return acc + cur.age;
  }, 0);
  return averageAge / student.length;
}
console.log(averageAge());
