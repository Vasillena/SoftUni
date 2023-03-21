using System;

namespace Graduation
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int counter = 1;
            double sum = 0;

            while (counter <= 12)
            {
                double grade = double.Parse(Console.ReadLine());

                if (grade >= 4)
                {
                    sum += grade;
                    counter++;
                }
            }
            double average = sum / 12;
            Console.WriteLine($"{name} graduated. Average grade: {average:f2}");
        }
    }
}
