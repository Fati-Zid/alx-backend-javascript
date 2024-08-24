const { readFileSync } = require('fs');

module.exports = function countStudents(path) {
  const res = {};
  let studentsCount = 0;
  let students;

  try {
    students = readFileSync(path).toString().split('\r\n');
  } catch (err) {
    if (err.errno === -4058) {
      throw new Error('Cannot load the database');
    }
  }

  for (let i = 1; i < students.length; i += 1) {
    if (students[i] === '') {
      continue;
    }

    const student = students[i].split(',');
    const firstName = student[0];
    const field = student[3];

    if (!res[field]) {
      res[field] = [];
    }

    res[field].push(firstName);
    studentsCount += 1;
  }
  console.log(`Number of students: ${studentsCount}`);

  const entries = Object.entries(res);
  entries.forEach(([key, value]) => {
    console.log(
      `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`
    );
  });
};
