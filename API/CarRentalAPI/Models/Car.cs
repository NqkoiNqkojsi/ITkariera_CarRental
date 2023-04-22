using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CarRentalAPI.Models
{
    public class Car
    {
        [Key]
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Type { get; set; }
        public int Year { get; set; }
        public int NumberOfSeats { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        [JsonIgnore]
        public List<Taken> Taken =new List<Taken>();
        public string ImgDir { get; set; }
    }
}
