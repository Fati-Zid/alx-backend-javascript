/* eslint-disable no-unused-vars */
import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(students, city) {
  return students.filters((student) => student.location === city);
}
