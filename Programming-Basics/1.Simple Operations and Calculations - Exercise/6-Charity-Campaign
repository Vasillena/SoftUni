using System;

namespace Charity_Campaign
{
    class Program
    {
        static void Main(string[] args)
        {
            int days = int.Parse(Console.ReadLine());
            int bakers = int.Parse(Console.ReadLine());
            int cakes = int.Parse(Console.ReadLine());
            int waffles = int.Parse(Console.ReadLine());
            int pancakes = int.Parse(Console.ReadLine());
            double cakesSum = cakes * 45;
            double wafflesSum = waffles * 5.80;
            double pancakesSum = pancakes * 3.20;
            double daySum = (cakesSum + wafflesSum + pancakesSum) * bakers;
            double sum = daySum * days;
            double finalSum = sum - 0.125 * sum;

            Console.WriteLine($"{finalSum:F2}");


        }
    }
}
