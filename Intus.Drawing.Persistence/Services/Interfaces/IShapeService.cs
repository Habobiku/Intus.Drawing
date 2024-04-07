using Intus.Drawing.Persistence.Entities.Abstractions;

namespace Intus.Drawing.Persistence.Services.Interfaces
{
    public interface IShapeService
    {
        Task<T?> GetFigureFromJson<T>() where T : Shape;
        Task SaveFigureToJson(Shape shape);
    }
}

