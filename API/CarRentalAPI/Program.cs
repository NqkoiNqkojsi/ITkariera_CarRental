using CarRentalAPI.Data;
using CarRentalAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApiDbContext>(options => options.UseSqlite(
    builder.Configuration.GetConnectionString("localDb")));


builder.Services.AddIdentity<ApiUser, IdentityRole>(u => u.User.RequireUniqueEmail=true)
        .AddEntityFrameworkStores<ApiDbContext>()
        .AddDefaultTokenProviders();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
