using System;

namespace Metric_Converter
{
    class Program
    {
        static void Main(string[] args)
        {
            double value = double.Parse(Console.ReadLine());
            string input = Console.ReadLine();
            string output = Console.ReadLine();

            if (input == "mm")
            {
                value = value / 1000;
            }
            else if (input == "cm")
            {
                value = value / 100;
            }

            if (output == "mm")
            {
                value = value * 1000;
            }
            else if (output == "cm")
            {
                value = value * 100;
            }
            Console.WriteLine($"{value:f3}");
        }
    }
}
