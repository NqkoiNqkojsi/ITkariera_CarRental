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
builder.Services.AddAutoMapper(typeof(Program).Assembly);


builder.Services.AddIdentity<ApiUser, IdentityRole>(u => u.User.RequireUniqueEmail=true)
        .AddEntityFrameworkStores<ApiDbContext>()
        .AddDefaultTokenProviders()
        .AddRoles<IdentityRole>();


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
