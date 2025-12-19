export default function updateStudentGradeByCity(studentList, city, newGrades) {
    if (!(studentList instanceof Array)) {
        return [];
    }
    
    const filteredStudentList = studentList.filter((student) => student.location === city);
    
    return filteredStudentList.map((student) => {
        // Find the grade for this student
        const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
        
        // Create a new object with the grade added
        return {
            ...student,
            grade: gradeObj ? gradeObj.grade : 'N/A'
        };
    });
}
