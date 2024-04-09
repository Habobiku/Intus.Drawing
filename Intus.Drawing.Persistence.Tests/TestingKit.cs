using System;
using Intus.Drawing.Persistence.Entities;
using Intus.Drawing.Persistence.Services;
using Intus.Drawing.Persistence.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Moq;

namespace Intus.Drawing.Persistence.Tests;

public class TestingKit
{
    public class TestingScope : IDisposable
    {
        public ServiceProvider RootServiceProvider;
        public IServiceScope ServiceScope;
        public IServiceProvider ServiceProvider => ServiceScope.ServiceProvider;
        public IShapeService ShapeService;

        ~TestingScope()
        {
            Dispose(false);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposeManagedResources)
        {
            if (disposeManagedResources)
            {
                ServiceScope.Dispose();
                RootServiceProvider.Dispose();
            }
        }
    }

    public TestingScope CreateTestScope(bool isFileExist = true, double defaultHeight = 10, double defaultWidth = 10, string defaultDirectory = "ShapeExamples")
    {
        // Hook up dependencies
        var scope = new TestingScope();
        var services = new ServiceCollection();
        var mockShapeSettings = new Mock<IOptions<ShapeSettings>>();
        mockShapeSettings.Setup(m => m.Value).Returns(new ShapeSettings
        {
            DirectoryPath = isFileExist ? defaultDirectory : string.Empty,
            DefaultRectangle = new RectangleSettings { Height = defaultHeight, Width = defaultWidth }
        });
        services.AddScoped<IShapeService, ShapeService>();
        services.AddSingleton(mockShapeSettings.Object);

        scope.RootServiceProvider = services.BuildServiceProvider();
        scope.ServiceScope = scope.RootServiceProvider.CreateScope();

        scope.ShapeService = scope.ServiceProvider.GetRequiredService<IShapeService>();

        return scope;
    }
}
