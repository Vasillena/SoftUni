using System;

namespace Invalid_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            bool check = !((number >= 100 && number <= 200) || (number == 0));
            if (check == true)
            {
                Console.WriteLine("invalid");
            }
        }
    }
}
