using Xunit;
using Intus.Drawing.Persistence.Entities;

namespace Intus.Drawing.Persistence.Tests
{
	public class Rectangle_Tests
	{
        private const double DefaultWidth = 10;
        private const double DefaultHeight = 10;

        [Fact]
        public async Task GetShapeFromJson_ReturnsDefaultShape_WhenFileDoesNotExist()
        {
            var scope = new TestingKit().CreateTestScope(isFileExist: false);

            // Act
            var result = await scope.ShapeService.GetShapeFromJson<Rectangle>();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(DefaultWidth, result.Width);
            Assert.Equal(DefaultHeight, result.Height);
        }

        [Fact]
        public async Task TrySaveShapeToJson_ThrowsException_WhenFilePathIsInvalid()
        {
            // Arrange
            var scope = new TestingKit().CreateTestScope(isFileExist: false);
            var shape = new Rectangle(5, 5);

            // Act & Assert
            await Assert.ThrowsAsync<InvalidOperationException>(() => scope.ShapeService.TrySaveShapeToJson<Rectangle>(shape));
        }

        [Fact]
        public async Task SaveAndRetrieveShape_ReturnsExpectedShape()
        {
            // Arrange
            var scope = new TestingKit().CreateTestScope();
            var expectedShape = new Rectangle(1000, 1200);

            // Act
            await scope.ShapeService.TrySaveShapeToJson<Rectangle>(expectedShape);
            var result = await scope.ShapeService.GetShapeFromJson<Rectangle>();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(expectedShape.Width, result.Width);
            Assert.Equal(expectedShape.Height, result.Height);
        }

    }
}

