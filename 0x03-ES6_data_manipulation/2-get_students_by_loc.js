export default function getStudentsByLocation(students, city) {
  return students.filters((student) => student.location === city);
}
