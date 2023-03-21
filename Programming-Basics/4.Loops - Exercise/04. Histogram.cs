using System;

namespace Histogram
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            double count1 = 0;
            double count2 = 0;
            double count3 = 0;
            double count4 = 0;
            double count5 = 0;

            for (int i = 1; i <= n; i++)
            {
                int number = int.Parse(Console.ReadLine());

                if (number < 200)
                {
                    count1++;
                }
                else if (number >= 200 && number <= 399)
                {
                    count2++;
                }
                else if (number >= 400 && number <= 599)
                {
                    count3++;
                }
                else if (number >= 600 && number <= 799)
                {
                    count4++;
                }
                else if (number >= 800)
                {
                    count5++;
                }
            }

            double p1 = count1 / n * 100;
            double p2 = count2 / n * 100;
            double p3 = count3 / n * 100;
            double p4 = count4 / n * 100;
            double p5 = count5 / n * 100;

            Console.WriteLine($"{p1:f2}%");
            Console.WriteLine($"{p2:f2}%");
            Console.WriteLine($"{p3:f2}%");
            Console.WriteLine($"{p4:f2}%");
            Console.WriteLine($"{p5:f2}%");
        }
    }
}
