using CarRentalAPI.Data;
using CarRentalAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ApiDbContext _context;
        public CarController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Create")]
        public JsonResult Create(Car car)
        {
            if(car==null)
            {
                return new JsonResult(BadRequest(car));
            }
            _context.Cars.Add(car);
            _context.SaveChanges();
            return new JsonResult(Ok(car));
        }

        [HttpPost]
        [Route("Edit")]
        public JsonResult Edit(Car car)
        {
            var DbCar = _context.Cars.Find(car.Id);
            if (DbCar == null)
                return new JsonResult(NotFound());
            DbCar = car;
            return new JsonResult(Ok(car));
        }

        
        [HttpGet]
        [Route("GetByID")]
        public JsonResult GetById(int id)
        {
            var car = _context.Cars.Find(id);
            if(car==null)
            {
                return new JsonResult(NotFound());
            }
            return new JsonResult(Ok(car));
        }

        [HttpGet]
        [Route("GetAll")]
        public JsonResult GetAll()
        {
            var cars = from c in _context.Cars select c;
            if (cars == null)
            {
                return new JsonResult(NotFound());
            }
            return new JsonResult(Ok(cars));
        }

        [HttpPost]
        [Route("Query")]
        public JsonResult CreateRent(Taken taken)
        {
            var car = _context.Cars.FirstOrDefault(c => c.Id == taken.CarID);
            if (car == null)
            {
                return new JsonResult(NotFound());
            }
            var user = _context.Users.FirstOrDefault(u => u.Id == taken.UserID);
            if (user == null)
            {
                return new JsonResult(NotFound());
            }
            if ((car.Taken.Any(t => t.To>taken.From && t.To<taken.To)) ||
                (car.Taken.Any(t => t.From>taken.From && t.From<taken.To)) ||
                 (car.Taken.Any(t => t.From < taken.From && t.To> taken.To)))
            {
                return new JsonResult(BadRequest(taken));
            }

            _context.Add(taken);
            _context.SaveChanges();
            return new JsonResult(Ok(taken))
        }

    }
}
