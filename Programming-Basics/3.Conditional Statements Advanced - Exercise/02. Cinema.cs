using System;

namespace Cinema
{
    class Program
    {
        static void Main(string[] args)
        {
            string projectionType = Console.ReadLine();
            int rolls = int.Parse(Console.ReadLine());
            int columns = int.Parse(Console.ReadLine());
            double price = 0.0;

            if (projectionType == "Premiere")
            {
                price = 12.00;
            }
            else if (projectionType == "Normal")
            {
                price = 7.50;
            }
            else if (projectionType == "Discount")
            {
                price = 5.00;
            }
            double income = price * rolls * columns;
            Console.WriteLine($"{income:F2} leva");
        }
    }
}
