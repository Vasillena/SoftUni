using System;

namespace Moving
{
    class Program
    {
        static void Main(string[] args)
        {
            int width = int.Parse(Console.ReadLine());
            int lenght = int.Parse(Console.ReadLine());
            int height = int.Parse(Console.ReadLine());

            int volume = width * lenght * height;
            string command = Console.ReadLine();
            int totalBoxes = 0;

            while (command != "Done")
            {
                int numOfBoxes = int.Parse(command);
                totalBoxes += numOfBoxes;
                if (totalBoxes > volume)
                {
                    Console.WriteLine($"No more free space! You need {totalBoxes - volume} Cubic meters more.");
                    break;
                }
                command = Console.ReadLine();
            }

            if (command == "Done")
            {
                Console.WriteLine($"{volume - totalBoxes} Cubic meters left.");
            }
        }
    }
}
