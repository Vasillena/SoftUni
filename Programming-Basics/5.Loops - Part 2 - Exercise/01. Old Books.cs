using System;

namespace Old_Books
{
    class Program
    {
        static void Main(string[] args)
        {
            string targetBook = Console.ReadLine();
            int capacity = int.Parse(Console.ReadLine());
            int counter = 0;
            bool bookIsFound = false;

            string currentBook = Console.ReadLine();

            while (counter < capacity)
            {
                if (currentBook == targetBook)
                {
                    bookIsFound = true;
                    break;
                }
                counter++;
                currentBook = Console.ReadLine();
            }
            if (bookIsFound == false)
            {
                Console.WriteLine("The book you search is not here!");
                Console.WriteLine($"You checked {capacity} books.");
            }
            else
            {
                Console.WriteLine($"You checked {counter} books and found it.");
            }

        }
    }
}
