using System;
using System.Text.Json;
using Intus.Drawing.Persistence.Entities;
using Intus.Drawing.Persistence.Entities.Abstractions;
using Intus.Drawing.Persistence.Services.Interfaces;
using Microsoft.Extensions.Options;

namespace Intus.Drawing.Persistence.Services
{
    public class ShapeService : IShapeService
    {
        private readonly ShapeSettings _shapeSettings;
        private readonly Dictionary<Type, Func<Shape>> _defaultShapeCreators;

        public ShapeService(IOptions<ShapeSettings> shapeSettings)
        {
            _shapeSettings = shapeSettings.Value ?? throw new ArgumentNullException(nameof(shapeSettings));
            _defaultShapeCreators = new Dictionary<Type, Func<Shape>> { { typeof(Rectangle), CreateDefaultRectangle } };
        }

        public async Task<T?> GetShapeFromJson<T>() where T : Shape
        {
            string filePath = GetFilePath(typeof(T));
            if (!File.Exists(filePath))
            {
                return GetDefaultShape<T>();
            }

            var json = await File.ReadAllTextAsync(filePath);
            return JsonSerializer.Deserialize<T>(json);
        }

        public async Task TrySaveShapeToJson<T>(Shape shape) where T : Shape
        {
            string filePath = GetFilePath(shape.GetType());
            if (string.IsNullOrEmpty(filePath) || !File.Exists(filePath))
            {
                //TODO clarify exception
                throw new InvalidOperationException("File path could not be determined.");
            }

            var json = JsonSerializer.Serialize<T>((T)shape);
            await File.WriteAllTextAsync(filePath, json);
        }

        private string GetFilePath(Type shapeType)
        {
            if (string.IsNullOrEmpty(_shapeSettings.DirectoryPath))
                return string.Empty;

            string fileName = shapeType.Name + ".json";
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), _shapeSettings.DirectoryPath, fileName);
            return filePath;
        }

        private T? GetDefaultShape<T>() where T : Shape
        {
            if (_defaultShapeCreators.TryGetValue(typeof(T), out var createDefaultShape))
            {
                return (T)createDefaultShape();
            }

            return null;
        }

        private Shape CreateDefaultRectangle()
        {
            return new Rectangle(_shapeSettings.DefaultRectangle.Width, _shapeSettings.DefaultRectangle.Height);
        }
    }
}

