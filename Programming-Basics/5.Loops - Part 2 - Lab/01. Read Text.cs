using System;

namespace Number_in_Range_1_100
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            while(num < 1 || num > 100)
            {
                num = int.Parse(Console.ReadLine());
            }
            Console.WriteLine(num);
        }
    }
}
