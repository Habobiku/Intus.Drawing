# Shape Drawing Web Application

This project is a web application that allows users to interact with SVG shapes, specifically rectangles. The application is built using Angular 15 for the frontend and .NET 8 for the backend API.

## Features

- **Shape Display**: The application displays an SVG shape whose initial dimensions are loaded from a JSON file.
- **Shape Resizing**: Users can resize the shape using their mouse.
- **Perimeter Display**: The application displays the perimeter of the shape near the shape itself.
- **Shape Saving**: After a user resizes the shape, the application updates the JSON file with the new dimensions of the shape.
- **Shape Flexibility**: Although the current implementation focuses on rectangles, the application is designed to handle any shape thanks to the implementation of a `ShapeService`.
- **Notification Service**: The application includes a notification service that informs the user whether an API request was successful or encountered an error.
- **Loading Bar**: A loading bar is displayed while the application is processing, providing visual feedback to the user.
- 
## API Endpoints

The backend API consists of the following endpoints:

- `GET {URL}/api/shape`: Returns the current shape from the JSON file.
- `POST {URL}/api/shape`: Updates the shape in the JSON file with the shape data sent in the request body.

 ## Default Values and Exception Handling
 
- The application has default values set for the shape dimensions and directory path. 
- If the file does not exist at the specified directory path, the application will return the default shape. 
- During saving values an exception is thrown if the file does not exist at the specified path.

## Tests
The application includes a suite of tests to ensure its functionality. Here are some of the tests we wrote:

- GetShapeFromJson_ReturnsDefaultShape_WhenFileDoesNotExist: This test checks that the GetShapeFromJson method returns the default shape when the file does not exist.
- TrySaveShapeToJson_ThrowsException_WhenFilePathIsInvalid: This test ensures that the TrySaveShapeToJson method throws an exception when the file path is invalid.
- SaveAndRetrieveShape_ReturnsExpectedShape: This test verifies that a shape can be saved and then retrieved with the expected dimensions.
