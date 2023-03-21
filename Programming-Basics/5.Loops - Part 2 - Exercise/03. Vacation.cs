using System;

namespace Vacation
{
    class Program
    {
        static void Main(string[] args)
        {
            double neededMoney = double.Parse(Console.ReadLine());
            double ownedMoney = double.Parse(Console.ReadLine());

            int spendDayCounter = 0;
            int days = 0;
            
            while (spendDayCounter < 5 && ownedMoney < neededMoney)
            {
                string command = Console.ReadLine();
                double money = double.Parse(Console.ReadLine());

                if (command == "spend")
                {
                    spendDayCounter++;
                    ownedMoney -= money;

                    if(ownedMoney < 0)
                    {
                        ownedMoney = 0;
                    }
                }
                else if (command == "save")
                {
                    spendDayCounter = 0;
                    ownedMoney += money;
                }
                days++;
            }

            if (spendDayCounter == 5)
            {
                Console.WriteLine("You can't save the money.");
                Console.WriteLine($"{days}");
            }
            else
            {
                Console.WriteLine($"You saved the money for {days} days.");
            }
        }
    }
}
