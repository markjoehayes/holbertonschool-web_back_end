export default function updateStudentGradeByCity(studentList, city, newGrades) {
    if (!(studentList instanceof Array)) {
        return [];
    }
    function addGrade(student) {
        newGrades.forEach((person) => {
            if (person.studentID === student.id){
                student.grade = person.grade;
            }
        });
        if (student.grade = undefined) {
            student.grade = 'N/A';
        }
        return student;
    }
        const filteredStudentList = studentList.filter((students) => students.location === city);
        return filteredStudentList.map(addGrade);
}
