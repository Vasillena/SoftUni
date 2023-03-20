using System;

namespace New_House
{
    class Program
    {
        static void Main(string[] args)
        {
            string flowerType = Console.ReadLine();
            int flowerNumber = int.Parse(Console.ReadLine());
            int budget = int.Parse(Console.ReadLine());

            const double rosesPrice = 5;
            const double dahliasPrice = 3.80;
            const double tulipsPrice = 2.80;
            const double narcissusPrice = 3;
            const double gladiolasPrice = 2.50;

            // double discount = 0;
            double price = 0;

            if (flowerType == "Roses")
            {
                price = flowerNumber * rosesPrice;
                if(flowerNumber > 80)
                {
                    //discount = price * 0.1;
                    price *= 0.9;
                }
            }
            else if (flowerType == "Dahlias")
            {
                price = flowerNumber * dahliasPrice;
                if (flowerNumber > 90)
                {
                    //discount = price * 0.15;
                    price *= 0.85;
                }
            }
            else if (flowerType == "Tulips")
            {
                price = flowerNumber * tulipsPrice;
                if (flowerNumber > 80)
                {
                    //discount = price * 0.15;
                    price *= 0.85;
                }
            }
            else if (flowerType == "Narcissus")
            {
                price = flowerNumber * narcissusPrice;
                if (flowerNumber < 120)
                {
                    price *= 1.15;
                }
            }
            else if (flowerType == "Gladiolus")
            {
                price = flowerNumber * gladiolasPrice;
                if (flowerNumber < 80)
                {
                    price *= 1.20;
                }
            }
            double diffPrice = Math.Abs(budget - price);

            if (budget >= price)
            {
                Console.WriteLine($"Hey, you have a great garden with {flowerNumber} {flowerType} and {diffPrice:f2} leva left.");
            }
            else
            {
                Console.WriteLine($"Not enough money, you need {diffPrice:f2} leva more.");
            }
        }
    }
}
