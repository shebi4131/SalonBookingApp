using Microsoft.EntityFrameworkCore;
using SalonBookingAPI.Data;
using SalonBookingAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Enable CORS
builder.Services.AddCors();

// Register the DbContext with SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors( policy =>
    policy.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

//// Seed initial data
//using (var scope = app.Services.CreateScope())
//{
//    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
//    dbContext.Database.Migrate(); // Apply migrations
//    if (!dbContext.Services.Any())
//    {
//        dbContext.Services.AddRange(
//            new Service { Name = "Haircut", Price = 20.00m, DurationMinutes = 30 },
//            new Service { Name = "Manicure", Price = 15.00m, DurationMinutes = 45 }
//            );
//        dbContext.SaveChanges();
//    }
//}

    app.Run();

