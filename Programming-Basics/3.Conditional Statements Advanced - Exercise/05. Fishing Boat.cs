using System;

namespace Fishing_Boat
{
    class Program
    {
        static void Main(string[] args)
        {
            int budget = int.Parse(Console.ReadLine());
            string season = Console.ReadLine();
            int fisherman = int.Parse(Console.ReadLine());
            double price = 0;
            double discount = 0;

            if (season == "Spring")
            {
                price = 3000;
            }
            else if (season == "Summer" || season == "Autumn")
            {
                price = 4200;
            }
            else if (season == "Winter")
            {
                price = 2600;
            }

            if (fisherman <= 6)
            {
                price *= 0.9;
            }
            else if (fisherman >= 7 && fisherman <= 11)
            {
                price *= 0.85;
            }
            else if (fisherman >= 12)
            {
                price *= 0.75;
            }


            if (fisherman % 2 == 0 && season != "Autumn")
            {
                price *= 0.95;
            }

            double diffPrice = Math.Abs(price - budget);
             if (budget >= price)
            {
                Console.WriteLine($"Yes! You have {diffPrice:f2} leva left.");
            }
            else
            {
                Console.WriteLine($"Not enough money! You need {diffPrice:f2} leva.");
            }
        }
    }
}
