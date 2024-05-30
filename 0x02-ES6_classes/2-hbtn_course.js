export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name != 'string') ? throw new Error('name must be string') : this.name = _name;
    if (typeof (length) != 'number') ? throw new Error('name must be number') : this.length = _length;
    // Type validation for students
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) ? throw new Error('students must be an array of strings') : this.students = _students;
  }
  // Getter & Setter:
    // name:
    get name() { 
      return this._name;
    }
    set name(value) {
      if (typeof value != 'string') {
        throw new Error('name must be string');
        }
      this._name = value;
    }
    
  // Length:
  get length() {
    return this._length;
  }
  set length(value){
    if (typeof value != 'number') {
      throw new Error('length must be number');
      }
    this._length = value;
  }

  // Students:
  get students() {
    return this._students;
  }
  set students(arrayValue){
    if (!Array.isArray(this.students) || this.students.every(typeof student === 'string'))
      throw new Error('students must be an array of strings');
    this._students = arrayValue;
  }
  }

