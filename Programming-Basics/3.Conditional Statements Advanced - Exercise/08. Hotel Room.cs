using System;

namespace Hotel_Room
{
    class Program
    {
        static void Main(string[] args)
        {
            string month = Console.ReadLine();
            int nights = int.Parse(Console.ReadLine());
            double studioPrice = 0;
            double apartmentPrice = 0;
            double discountStudio = 0;
            double discountApartment = 0;

            if (month == "May" || month == "October")
            {
                studioPrice = 50;
                apartmentPrice = 65;

                if (nights > 7 && nights < 14)
                {
                    discountStudio = studioPrice * 0.05;
                }
                else if (nights > 14)
                {
                    discountStudio = studioPrice * 0.3;
                    discountApartment = apartmentPrice * 0.1;
                }
            }
            else if (month == "June" || month == "September")
            {
                studioPrice = 75.2;
                apartmentPrice = 68.7;

                if (nights > 14)
                {
                    discountStudio = studioPrice * 0.2;
                    discountApartment = apartmentPrice * 0.1;
                }
            }
            else if (month == "July" || month == "August")
            {
                studioPrice = 76;
                apartmentPrice = 77;

                if (nights > 14)
                {
                    discountApartment = apartmentPrice * 0.1;
                }
            }

            double finalStudioPrice = (studioPrice - discountStudio) * nights;
            double finalApartmentPrice = (apartmentPrice - discountApartment) * nights;

            Console.WriteLine($"Apartment: {finalApartmentPrice:f2} lv.");
            Console.WriteLine($"Studio: {finalStudioPrice:f2} lv.");
        }
    }
}
