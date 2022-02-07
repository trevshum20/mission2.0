using System;
using System.ComponentModel.DataAnnotations;


namespace mission2.Models
{
    public class GradeCalculatorModel
    {

        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int Assignments { get; set; }
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int GroupProject { get; set; }
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int Quizzes { get; set; }
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int Exams { get; set; }
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int Intex { get; set; }

    }
}
