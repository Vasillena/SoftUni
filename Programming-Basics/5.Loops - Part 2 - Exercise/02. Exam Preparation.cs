using System;

namespace Exam_Preparation
{
    class Program
    {
        static void Main(string[] args)
        {
            int limitOfBadGrades = int.Parse(Console.ReadLine());

            int countOfBadGrades = 0;
            int countOfTotalProblems = 0;
            int sumOfGrades = 0;

            string lastProblem = string.Empty;

            while (countOfBadGrades < limitOfBadGrades)
            {
                string command = Console.ReadLine();
                if (command == "Enough")
                {
                    double averageGrade = (double)sumOfGrades / countOfTotalProblems;
                    Console.WriteLine($"Average score: {averageGrade:f2}");
                    Console.WriteLine($"Number of problems: {countOfTotalProblems}");
                    Console.WriteLine($"Last problem: {lastProblem}");
                    break;
                }

                int grade = int.Parse(Console.ReadLine());

                if (grade <= 4)
                {
                    countOfBadGrades++;
                }
                sumOfGrades += grade;
                countOfTotalProblems++;
                lastProblem = command;
            }
            if (countOfBadGrades == limitOfBadGrades)
            {
                Console.WriteLine($"You need a break, {countOfBadGrades} poor grades.");
            }
        }
    }
}
