interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: 'Fati',
  lastName: 'Zid',
  age: 26,
  location: 'morroco',
};

const student_2: Student = {
  firstName: 'Hak',
  lastName: 'Raf',
  age: 28,
  location: 'egypte',
};

const studentsList: Array<Student> = [student_1, student_2];

// REnder table via vanilla JS:
const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
document.body.appendChild(table);
