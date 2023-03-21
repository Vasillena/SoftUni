using System;

namespace Graduation_part_2
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int counter = 1;
            double sum = 0;
            double excluded = 0;
            bool isExcluded = false;

            while (counter <= 12)
            {
                double grade = double.Parse(Console.ReadLine());

                if (grade < 4.00)
                {
                    excluded++;
                }
                else if (grade >= 4.00)
                {
                    sum += grade;
                    counter++;
                }
                if (excluded >= 2)
                {
                    isExcluded = true;
                    break;
                }
            }
            if (isExcluded == false)
            {
                double average = sum / 12;
                Console.WriteLine($"{name} graduated. Average grade: {average:f2}");
            }
            else
            {
                Console.WriteLine($"{name} has been excluded at {counter} grade");
            }
        }
    }
}
