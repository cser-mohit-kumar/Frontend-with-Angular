function getGradeIfElse(marks) {
    if (marks >= 76 && marks <= 100) {
        return "A";
    } else if (marks >= 61) {
        return "B";
    } else if (marks >= 56) {
        return "C";
    } else if (marks >= 41) {
        return "D";
    } else {
        return "Failed";
    }
}

console.log(getGradeIfElse(78)); 