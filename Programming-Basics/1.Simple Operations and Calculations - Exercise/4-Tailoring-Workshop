using System;

namespace Tailoring_Workshop
{
    class Program
    {
        static void Main(string[] args)
        {
            int tables = int.Parse(Console.ReadLine());
            double tablesLenght = double.Parse(Console.ReadLine());
            double tablesWidth = double.Parse(Console.ReadLine());
            double coversArea = tables * (tablesLenght + 2 * 0.30) * (tablesWidth + 2 * 0.30);
            double squaresArea = tables * (tablesLenght/2) * (tablesLenght / 2);
            double priceInDollars = coversArea * 7 + squaresArea * 9;
            double priceInLeva = priceInDollars * 1.85;

            Console.WriteLine($"{priceInDollars:f2} USD");
            Console.WriteLine($"{priceInLeva:f2} BGN");
        }
    }
}
