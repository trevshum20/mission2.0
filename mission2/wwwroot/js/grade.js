//$("#submitgrade").click(function () {
//    alert("Hi");
//})

//document.getElementById("submitgrade").addEventListener("click", function () {
//    alert("hi");
//})

$("#submitgrade").click(function () {
    var assignments = $("#assignments").val();
    var groupproject = $("#groupproject").val();
    var quizzes = $("#quizzes").val();
    var exams = $("#exams").val();
    var intex = $("#intex").val();
    var numGrade = ((assignments * .55) + (groupproject * .05) + (quizzes * .1) + (exams * .2) + (intex * .1));

    //var numGrade = 94;
    var letGrade = "";

    if (numGrade >= 94) {
        letGrade = "Your letter grade will be an A"
    } else if (numGrade >= 90) {
        letGrade = "Your letter grade will be an A-"
    }
    else if (numGrade >= 87) {
        letGrade = "Your letter grade will be a B+"
    }
    else if (numGrade >= 84) {
        letGrade = "Your letter grade will be a B"
    }
    else if (numGrade >= 80) {
        letGrade = "Your letter grade will be a B-"
    }
    else if (numGrade >= 77) {
        letGrade = "Your letter grade will be a C+"
    }
    else if (numGrade >= 74) {
        letGrade = "Your letter grade will be a C"
    }
    else if (numGrade >= 70) {
        letGrade = "Your letter grade will be a C-"
    }
    else if (numGrade >= 67) {
        letGrade = "Your letter grade will be a D+"
    }
    else if (numGrade >= 64) {
        letGrade = "Your letter grade will be a D"
    }
    else if (numGrade >= 60) {
        letGrade = "Your letter grade will be a D-"
    }
    else {
        letGrade = "Your letter grade will be an E"
    }

    //$("#numbergrade").val() = "Number Grade: ";

    alert("Your numeric grade will be " + numGrade + "%\n" + letGrade);
})


