using System;

namespace Clever_Lily
{
    class Program
    {
        static void Main(string[] args)
        {
            int age = int.Parse(Console.ReadLine());
            double washingMachinePrice = double.Parse(Console.ReadLine());
            int toyPrice = int.Parse(Console.ReadLine());

            int savedMoney = 0;
            int moneyGift = 10;

            for (int i = 1; i <= age; i++)
            {
                if (i % 2 == 0)
                {
                    savedMoney += moneyGift;
                    moneyGift += 10;
                    savedMoney -= 1;
                }
                else
                {
                    savedMoney += toyPrice;
                }
            }

            double diff = Math.Abs(washingMachinePrice - savedMoney);

            if (washingMachinePrice > savedMoney)
            {
                Console.WriteLine($"No! {diff:f2}");
            }
            else
            {
                Console.WriteLine($"Yes! {diff:f2}");
            }
        }
    }
}
