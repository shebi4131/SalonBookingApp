namespace SalonBookingAPI.Models;

public class Booking
{
    public int Id { get; set; }
    public string? CustomerName { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public int ServiceId { get; set; }
    public DateTime Date { get; set; }
    public string? TimeSlot { get; set; }

    public Service? Service { get; set; } // navigation
}
