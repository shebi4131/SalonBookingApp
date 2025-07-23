namespace SalonBookingAPI.Models.DTOs;

public class RegisterDto
{
    public string Name { get; set; }       // optional display name
    public string Email { get; set; }
    public string Password { get; set; }
    public string ConfirmPassword { get; set; }
}
