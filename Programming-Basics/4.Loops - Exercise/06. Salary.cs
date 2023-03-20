using System;

namespace Salary
{
    class Program
    {
        static void Main(string[] args)
        {
            int tabsCount = int.Parse(Console.ReadLine());
            int salary = int.Parse(Console.ReadLine());

            for (int i = 1; i <= tabsCount; i++)
            {
                string name = Console.ReadLine();

                switch (name)
                {
                    case "Facebook":
                        salary = salary - 150;
                        break;
                    case "Instagram":
                        salary = salary - 100;
                        break;
                    case "Reddit":
                        salary = salary - 50;
                        break;
                }

                if (salary <= 0)
                {
                    Console.WriteLine("You have lost your salary.");
                    break;
                }
            }

            if (salary > 0)
            {
                Console.WriteLine(salary);
            }
        }
    }
}
