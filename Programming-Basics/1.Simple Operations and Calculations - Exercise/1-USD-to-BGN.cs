using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            double usd = double.Parse(Console.ReadLine());
            double bgn = usd * 1.79549;
            bgn = Math.Round(bgn, 2);

            Console.WriteLine(bgn);

        }
    }
}
