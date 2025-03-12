function inputStudentMarks (marks){
    if (marks < 0|| marks > 100){
        return "Invalid marks. Enter correct marks";
    }

    if (marks >79 ){
        return "You scored an A";
    }else if (marks >= 60 && marks <= 79){
        return "You scored a B-";
    }else if (marks > 49 && marks <= 59){
        return "You scored a C-.";
    }else if (marks >= 40 && marks <= 49) {
        return "You scored a D-";
    }else{
        return "You scored an E-";
    }

}

console.log(inputStudentMarks(39))