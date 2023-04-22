using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CarRentalAPI.Models
{
    public class FromTo
    {
        public DateTime From { get; set; }
        public DateTime To { get; set; }
    }
    public class Taken : FromTo
    {
        [Key]
        public int Id { get; set; }
        public int CarID { get; set; }
        public string UserID { get; set; }

    }
}
