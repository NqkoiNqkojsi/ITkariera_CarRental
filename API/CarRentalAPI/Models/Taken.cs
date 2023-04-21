namespace CarRentalAPI.Models
{
    public class Taken
    {
        public DateTime From { get; set; }
        public DateTime To { get; set; }

        public List<Car> Cars { get; set; }
    }
}
