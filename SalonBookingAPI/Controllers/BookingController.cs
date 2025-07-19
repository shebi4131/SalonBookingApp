using Microsoft.AspNetCore.Mvc;
using SalonBookingAPI.Data;
using SalonBookingAPI.Models;

namespace SalonBookingAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingController : ControllerBase
{
    private readonly AppDbContext _context;
    public BookingController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult CreateBooking([FromBody] Booking booking)
    {
        if (booking == null || string.IsNullOrEmpty(booking.CustomerName) || booking.ServiceId <= 0)
        {
            return BadRequest("Invalid booking data.");
        }
        _context.Bookings.Add(booking);
        _context.SaveChanges();
        return Ok(booking);
    }
}
