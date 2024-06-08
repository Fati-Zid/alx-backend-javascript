export default function getStudentsByLocation(students, city) {
  return students.filters(city);
}
