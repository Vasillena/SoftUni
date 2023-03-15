using System;

namespace Small_Shop
{
    class Program
    {
        static void Main(string[] args)
        {
            string product = Console.ReadLine();
            string city = Console.ReadLine();
            double quantity = double.Parse(Console.ReadLine());

            double price = 0;

            switch (product)
            {
                case "coffee":
                    switch (city)
                    {
                        case "Sofia":
                            price = 0.50;
                            break;
                        case "Plovdiv":
                            price = 0.40;
                            break;
                        case "Varna":
                            price = 0.45;
                            break;
                    }
                    break;
                case "water":
                    switch (city)
                    {
                        case "Sofia":
                            price = 0.80;
                            break;
                        case "Plovdiv":
                            price = 0.70;
                            break;
                        case "Varna":
                            price = 0.70;
                            break;
                    }
                    break;
                case "beer":
                    switch (city)
                    {
                        case "Sofia":
                            price = 1.20;
                            break;
                        case "Plovdiv":
                            price = 1.15;
                            break;
                        case "Varna":
                            price = 1.10;
                            break;
                    }
                    break;
                case "sweets":
                    switch (city)
                    {
                        case "Sofia":
                            price = 1.45;
                            break;
                        case "Plovdiv":
                            price = 1.30;
                            break;
                        case "Varna":
                            price = 1.35;
                            break;
                    }
                    break;
                case "peanuts":
                    switch (city)
                    {
                        case "Sofia":
                            price = 1.60;
                            break;
                        case "Plovdiv":
                            price = 1.50;
                            break;
                        case "Varna":
                            price = 1.55;
                            break;
                    }
                    break;
            }
            
            double total = quantity * price;
            Console.WriteLine(total);
        }
    }
}
