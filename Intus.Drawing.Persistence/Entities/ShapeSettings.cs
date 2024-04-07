using Intus.Drawing.Persistence.Entities.Abstractions;

namespace Intus.Drawing.Persistence.Entities
{
    public class ShapeSettings 
    {
        public string DirectoryPath { get; set; } = string.Empty;
        public RectangleSettings DefaultRectangle { get; set; } = new RectangleSettings();
    }

    public class RectangleSettings
    {
        public double Width { get; set; }
        public double Height { get; set; }
    }
}
