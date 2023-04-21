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
        [Route("CreateEdit")]
        public JsonResult CreateEdit(Car car)
        {
            if (car.Id == 0)
                _context.Cars.Add(car);
            else
            {
                var DbCar = _context.Cars.Find(car.Id);
                if (DbCar == null)
                    return new JsonResult(NotFound());
                DbCar = car;
            }
            _context.SaveChanges();
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


    }
}
