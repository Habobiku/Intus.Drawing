using Intus.Drawing.FrontEnd.Models.Rectangle;
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
            var rectangle = await _shapeService.GetShapeFromJson<Rectangle>();
            if (rectangle == null)
            {
                return BadRequest("Not found config for rectangle");
            }

            return Ok(new GetRectangleViewModel { Height = rectangle.Height, Width = rectangle.Width, Perimeter = rectangle.GetPerimeter()});
        }

        [HttpPost("rectangle")]
        public async Task<ActionResult> SaveRectangle([FromBody] SubmitRectangleModel model)
        {
            try
            {
                await _shapeService.TrySaveShapeToJson<Rectangle>(new Rectangle(model.Width, model.Height));
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
            return Ok();
        }
    }
}

