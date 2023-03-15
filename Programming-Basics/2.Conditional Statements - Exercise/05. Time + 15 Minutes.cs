using System;

namespace Time___15_Minutes
{
    class Program
    {
        static void Main(string[] args)
        {
            int startHour = int.Parse(Console.ReadLine());
            int startMinutes = int.Parse(Console.ReadLine());
            int timeInMinutes = startHour * 60 + startMinutes;
            int timePlus15 = timeInMinutes + 15;
            int finalHour = timePlus15 / 60;
            int finalMinutes = timePlus15 % 60;

            if (finalHour >= 24)
            {
                finalHour = finalHour - 24;
            }

            if (finalMinutes < 10)
            {
                Console.WriteLine($"{finalHour}:0{finalMinutes}");
            }
            else
            {
                Console.WriteLine($"{finalHour}:{finalMinutes}");
            }
        }
    }
}
