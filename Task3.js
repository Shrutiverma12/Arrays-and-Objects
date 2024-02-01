const student = {};

//a-
Object.preventExtensions(student);

//b-
const eatensibleStatus = Object.isExtensible(student);

//c-
const teacher = {
  subject: "Maths",
};

//d-
Object.seal(teacher);

//e-
const sealedStatus = Object.isSealed(teacher);

//f-
console.log(eatensibleStatus);
console.log(sealedStatus);
