using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace CarRentalAPI.Models
{
    public class ApiUser : IdentityUser
    {
        
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string UCN { get; set; }
      
    }
}
