using System;

namespace Coins
{
    class Program
    {
        static void Main(string[] args)
        {
            double resetIn = double.Parse(Console.ReadLine());
            double reset = resetIn * 100.0000;
            int count = 0;

            while (reset >= 200)
            {
                reset -= 200;
                count++;
            }
            while (reset >= 100)
            {
                reset -= 100;
                count++;
            }
            while (reset >= 50)
            {
                reset -= 50;
                count++;
            }
            while (reset >= 20)
            {
                reset -= 20;
                count++;
            }
            while (reset >= 10)
            {
                reset -= 10;
                count++;
            }
            while (reset >= 5)
            {
                reset -= 5;
                count++;
            }
            while (reset >= 2)
            {
                reset -= 2;
                count++;
            }
            while (reset >= 1)
            {
                reset -= 1;
                count++;
            }
            Console.WriteLine(count);
        }
    }
}
