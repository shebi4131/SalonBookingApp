using Microsoft.AspNetCore.Identity;

namespace SalonBookingAPI.Models;

public class ApplicationUser : IdentityUser
{
    public string? Name { get; set; }  // optional field
}
