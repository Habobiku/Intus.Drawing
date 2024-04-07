using Intus.Drawing.Persistence.Entities;
using Intus.Drawing.Persistence.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Intus.Drawing.FrontEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ShapeController : ControllerBase
	{
        private readonly IShapeService _shapeService;

        public ShapeController(IShapeService shapeService)
        {
            _shapeService = shapeService ?? throw new ArgumentNullException(nameof(shapeService));
        }

        [HttpGet("rectangle")]
        public async Task<ActionResult> GetRectangle()
        {
            return Ok(await _shapeService.GetFigureFromJson<Rectangle>());
        }
    }
}

