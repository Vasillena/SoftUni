using System;

namespace Summer_Outfit
{
    class Program
    {
        static void Main(string[] args)
        {
            int degrees = int.Parse(Console.ReadLine());
            string dayPeriod = Console.ReadLine();
            string outfit = string.Empty;
            string shoes = string.Empty;

            if (dayPeriod == "Morning")
            {
                if (degrees >= 10 && degrees <= 18)
                {
                    outfit = "Sweatshirt";
                    shoes = "Sneakers";
                }
                else if (degrees > 18 && degrees <= 24)
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
                else if (degrees >= 25)
                {
                    outfit = "T-Shirt";
                    shoes = "Sandals";
                }
            }
            else if (dayPeriod == "Afternoon")
            {
                if (degrees >= 10 && degrees <= 18)
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
                else if (degrees > 18 && degrees <= 24)
                {
                    outfit = "T-Shirt";
                    shoes = "Sandals";
                }
                else if (degrees >= 25)
                {
                    outfit = "Swim Suit";
                    shoes = "Barefoot";
                }
            }
            else if (dayPeriod == "Evening")
            {
                if (degrees >= 10 && degrees <= 18)
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
                else if (degrees > 18 && degrees <= 24)
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
                else if (degrees >= 25)
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
            }
            Console.WriteLine($"It's {degrees} degrees, get your {outfit} and {shoes}.");
        }
    }
} 
