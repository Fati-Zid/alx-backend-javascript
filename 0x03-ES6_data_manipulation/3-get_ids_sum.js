function getStudentIdsSum(students) {
  return students.reduce((student) => student.id);
}
export default getStudentIdsSum;
