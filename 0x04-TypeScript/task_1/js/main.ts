interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}
interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher: string = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

class StudentClass {
  constructor(private student: SetConstructor) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.student.firstName;
  }
}
