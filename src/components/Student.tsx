import StudentModel from "../model/StudentModel.ts";
import styles from './Student.module.css';

interface StudentProps {
    student: StudentModel
}

function Student(props: React.PropsWithChildren<StudentProps>) {

    return (
        <div className={styles.card}>
            <p> Name: {props.student.name} </p>
            <p> Age: {props.student.age} </p>
            <p> Student: {props.student.isStudent ? 'Yes' : 'No'} </p>
        </div>
    )
}

export default Student;


