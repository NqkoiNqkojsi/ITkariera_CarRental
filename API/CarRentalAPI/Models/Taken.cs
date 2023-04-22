using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CarRentalAPI.Models
{
    public class Taken
    {
        [Key]
        public int Id { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public int CarID { get; set; }
        public string UserID { get; set; }

    }
}
