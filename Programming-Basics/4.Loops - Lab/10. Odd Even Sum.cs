using System;

namespace Odd_Even_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int oddSum = 0;
            int evenSum = 0;

            for (int i = 1; i <= n; i++)
            {
                int current = int.Parse(Console.ReadLine());
                if (i%2 == 0)
                {
                    evenSum += current;
                }
                else
                {
                    oddSum += current;
                }
            }

            if (oddSum == evenSum)
            {
                Console.WriteLine($"Yes\nSum = {oddSum}");
            }
            else
            {
                Console.WriteLine($"No\nDiff = {Math.Abs(oddSum - evenSum)}");
            }
        }
    }
}
