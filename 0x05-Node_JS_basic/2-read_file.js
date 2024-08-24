const { readFileSync } = require('fs');

function readFile(path) {
  try {
    const data = readFileSync(path);
    return data.toString();
  } catch (err) {
    if (err.errno === -4058) {
      throw new Error('Cannot load the database');
    }
  }
}

module.exports = function countStudents(path) {
  const res = {};
  let studentsCount = 0;
  const data = readFile(path);
  const students = data.split('\r\n');

  for (let i = 1; i < students.length; i++) {
    const student = students[i].split(',');
    const firstName = student[0];
    const field = student[3];

    if (!res[field]) {
      res[field] = [];
    }
    res[field].push(firstName);
    studentsCount++;
  }
  console.log(`Number of students: ${studentsCount}`);

  const entries = Object.entries(res);

  entries.forEach(([key, value]) => {
    console.log(
      `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`
    );
  });
};
