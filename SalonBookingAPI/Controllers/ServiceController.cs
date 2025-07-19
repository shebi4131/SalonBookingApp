using Microsoft.AspNetCore.Mvc;
using SalonBookingAPI.Data;

namespace SalonBookingAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServiceController : ControllerBase
{
    private readonly AppDbContext _context;
    public ServiceController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetServices()
    {
        var services = _context.Services.ToList();
        return Ok(services);
    }
}
