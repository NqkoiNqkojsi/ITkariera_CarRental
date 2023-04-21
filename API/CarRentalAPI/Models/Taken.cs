using System.ComponentModel.DataAnnotations;

namespace CarRentalAPI.Models
{
    public class Taken
    {
        [Key]
        public int Id { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public List<Car> Cars { get; set; }
    }
}
