using System;

namespace Divide_without_remainder
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            double count1 = 0;
            double count2 = 0;
            double count3 = 0;

            for (int i = 1; i <= n; i++)
            {
                int number = int.Parse(Console.ReadLine());

                if (number % 2 == 0)
                {
                    count1++;
                }
                if (number % 3 == 0)
                {
                    count2++;
                }
                if (number % 4 == 0)
                {
                    count3++;
                }
            }

            double p1 = count1 / n * 100;
            double p2 = count2 / n * 100;
            double p3 = count3 / n * 100;

            Console.WriteLine($"{p1:f2}%");
            Console.WriteLine($"{p2:f2}%");
            Console.WriteLine($"{p3:f2}%");
        }
    }
}
