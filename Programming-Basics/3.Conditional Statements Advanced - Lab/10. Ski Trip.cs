using System;

namespace Ski_Trip
{
    class Program
    {
        static void Main(string[] args)
        {
            int days = int.Parse(Console.ReadLine());
            string room = Console.ReadLine();
            string rating = Console.ReadLine();

            int nights = days - 1;
            double pricePerNight = 0;
            double discount = 0;

            switch (room)
            {
                case "room for one person":
                    pricePerNight = 18;
                    break;
                case "apartment":
                    pricePerNight = 25;
                    if (nights < 10)
                    {
                        discount = 0.3;
                    }
                    else if (nights >=10 && nights <=15)
                    {
                        discount = 0.35;
                    }
                    else if (nights > 15)
                    {
                        discount = 0.5;
                    }
                    break;
                case "president apartment":
                    pricePerNight = 35;
                    if (nights < 10)
                    {
                        discount = 0.1;
                    }
                    else if (nights >= 10 && nights <= 15)
                    {
                        discount = 0.15;
                    }
                    else if (nights > 15)
                    {
                        discount = 0.20;
                    }
                    break;
            }
            double totalPrice = pricePerNight * nights;
            totalPrice = totalPrice - totalPrice * discount;
            // totalPrice -= totalPrice * discount;

            if (rating == "positive")
            {
                totalPrice += totalPrice * 0.25;
            }
            else if (rating == "negative")
            {
                totalPrice -= totalPrice * 0.1;
            }
            Console.WriteLine($"{totalPrice:F2}");
        }
    }
}
