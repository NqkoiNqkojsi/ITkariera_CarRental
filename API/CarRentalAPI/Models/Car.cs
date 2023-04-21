using System.ComponentModel.DataAnnotations;

namespace CarRentalAPI.Models
{
    public class Car
    {
        [Key]
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int NumberOfSeats { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public Taken? Taken { get; set; }
    }
}
