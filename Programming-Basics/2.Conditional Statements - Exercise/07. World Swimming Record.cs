using System;

namespace World_Swimming_Record
{
    class Program
    {
        static void Main(string[] args)
        {
            double recordInSeconds = double.Parse(Console.ReadLine());
            double distanceInMeters = double.Parse(Console.ReadLine());
            double timeFor1m = double.Parse(Console.ReadLine());

            double distanceNeeded = distanceInMeters * timeFor1m;
            double delay = Math.Floor(distanceInMeters / 15) * 12.5;
            double totalTime = distanceNeeded + delay;

          if (recordInSeconds <= totalTime)
            {
                Console.WriteLine($"No, he failed! He was {(totalTime - recordInSeconds):f2} seconds slower.");
            }
            else
            {
                Console.WriteLine($"Yes, he succeeded! The new world record is {totalTime:f2} seconds.");
            }

        }
    }
}
