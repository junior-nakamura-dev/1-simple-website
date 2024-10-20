class StudentModel {
    name?: string;
    age: number;
    isStudent: boolean;

    constructor(age: number, isStudent: boolean, name?: string) {
        this.name = name ? name : 'Test';
        this.age = age;
        this.isStudent = isStudent;
    }
}

export default StudentModel;
