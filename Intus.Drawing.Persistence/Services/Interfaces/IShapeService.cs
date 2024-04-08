using Intus.Drawing.Persistence.Entities.Abstractions;

namespace Intus.Drawing.Persistence.Services.Interfaces
{
    public interface IShapeService
    {
        Task<T?> GetShapeFromJson<T>() where T : Shape;
        Task TrySaveShapeToJson<T>(Shape shape) where T : Shape;
    }
}

