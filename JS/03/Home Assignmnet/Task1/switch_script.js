function getGradeSwitch(marks) {
    switch (true) {
        case (marks >= 76 && marks <= 100):
            return "A";
        case (marks >= 61):
            return "B";
        case (marks >= 56):
            return "C";
        case (marks >= 41):
            return "D";
        default:
            return "Failed";
    }
}

console.log(getGradeSwitch(65));