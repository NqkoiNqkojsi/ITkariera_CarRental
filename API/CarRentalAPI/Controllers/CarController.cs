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


    }
}
