using System.ComponentModel.DataAnnotations;

namespace Intus.Drawing.FrontEnd.Models.Rectangle
{
	public class SubmitRectangleModel
	{
        [Required]
        public double Width { get; set; }

        [Required]
        public double Height { get; set; }
    }
}

