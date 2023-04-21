using System.ComponentModel.DataAnnotations;

namespace CarRentalAPI.Models
{
    public class LoginUserDTO
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [StringLength(15, ErrorMessage = "The password must be between 6 and 15 characters"), MinLength(6)]
        public string Password { get; set; }
    }

    public class UserDTO : LoginUserDTO
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }
        
        public string UCN { get; set; }

    }
}
