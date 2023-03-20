using System;

namespace Volleyball
{
    class Program
    {
        static void Main(string[] args)
        {
            string typeYears = Console.ReadLine();
            int holidayYears = int.Parse(Console.ReadLine());
            int weekendTravelHome = int.Parse(Console.ReadLine());

            double numberWeekendSofia = 48 - weekendTravelHome;
            double gameWeekSofia = numberWeekendSofia * 3.0 / 4;

            double gameWeekendHome = weekendTravelHome;
            double gameWeek = holidayYears * 2.0 / 3;

            double result = gameWeek + gameWeekendHome + gameWeekSofia;

            switch (typeYears)
            {
                case "leap":
                    var procent = 0.15;
                    result = result + (procent * result);
                    Console.WriteLine(Math.Truncate(result));
                    break;
                default:
                    Console.WriteLine(Math.Truncate(result));
                    break;
            }


        }
    }
}
