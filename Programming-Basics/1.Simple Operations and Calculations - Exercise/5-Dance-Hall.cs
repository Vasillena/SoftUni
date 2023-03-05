using System;

namespace Dance_Hall
{
    class Program
    {
        static void Main(string[] args)
        {
            double hallLenght = double.Parse(Console.ReadLine());
            double hallWidht = double.Parse(Console.ReadLine());
            double wardrobeSide = double.Parse(Console.ReadLine());
            double hallArea = (hallLenght * 100) * (hallWidht * 100);
            double wardrobeArea = (wardrobeSide * wardrobeSide) * 10000;
            double benchArea = hallArea / 10;
            double freeSpace = hallArea - wardrobeArea - benchArea;
            double dancersCount = freeSpace / (40 + 7000);
            
            Console.WriteLine(Math.Floor(dancersCount));
        }
    }
}
