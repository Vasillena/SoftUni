using System;

namespace Account_Balance
{
    class Program
    {
        static void Main(string[] args)
        {
            int numOfTransactions = int.Parse(Console.ReadLine());
            int counter = 1;
            double total = 0;

            while (counter <= numOfTransactions)
            {
                double amount = double.Parse(Console.ReadLine());
                if (amount < 0)
                {
                    Console.WriteLine("Invalid operation!");
                    break;
                }
                Console.WriteLine($"Increase: {amount:f2}");
                counter++;
                total += amount;
            }

            Console.WriteLine($"Total: {total:f2}");
        }
    }
}
