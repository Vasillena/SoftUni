using System;

namespace Alcohol_Market
{
    class Program
    {
        static void Main(string[] args)
        {
            double whiskeyPrice = double.Parse(Console.ReadLine());
            double beerLiters = double.Parse(Console.ReadLine());
            double wineLiters = double.Parse(Console.ReadLine());
            double rakiaLiters = double.Parse(Console.ReadLine());
            double whiskeyLiters = double.Parse(Console.ReadLine());
            double rakiaPrice = whiskeyPrice / 2;
            double winePrice = rakiaPrice - (0.4*rakiaPrice);
            double beerPrice = rakiaPrice - (0.8*rakiaPrice);
            double rakiaSum = rakiaLiters * rakiaPrice;
            double wineSum = wineLiters * winePrice;
            double beerSum = beerLiters * beerPrice;
            double whiskeySum = whiskeyLiters * whiskeyPrice;
            double total = rakiaSum + wineSum + beerSum + whiskeySum;

            Console.WriteLine($"{total:F2}");

        }
    }
}
