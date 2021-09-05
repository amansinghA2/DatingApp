using System.Security.AccessControl;
using System.Runtime.InteropServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DatingApp.API.Data;

namespace DatingApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DataContext _context;

        public WeatherForecastController(DataContext context)
        {
            this._context = context;
        }



        [HttpGet]
        public IActionResult GetValues()
        {
            return Ok(_context.Values.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetValue(int id)
        {
            return Ok(_context.Values.FirstOrDefault(x => x.ID == id));
        }


    }
}
