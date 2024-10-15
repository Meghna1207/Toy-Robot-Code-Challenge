# Toy-Robot-Code-Challenge
Welcome to the Toy Robot Simulator

## Project Overview
The Toy Robot Simulator allows users to place a toy robot on a 5x5 grid and command it to move around. You can instruct the robot to move in different directions, turn left or right, and report its current position. This simulator not only demonstrates the principles of movement and direction but also showcases the power of user input in programming.

## Features
- **Grid Movement**: Move the robot in a 5x5 grid environment.
- **Directional Control**: Turn the robot to face North, East, South, or West.
- **Command Input**: Easily input commands through a user-friendly interface.
- **Position Reporting**: Get the current position and direction of the robot.

## Technologies Used
- **HTML5**: For structuring the simulator interface.
- **CSS3**: For styling the user interface and making it visually appealing.
- **JavaScript**: For implementing the core functionality and logic of the simulator.

## Installation
To run the Toy Robot Simulator locally, follow these simple steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Meghna1207/Toy-Robot-Code-Challenge.git
Open the index.html file in your browser.

## Design Decisions
### Grid Size
- **Decision**: The grid size is set to 5x5.
- **Reason**: This size meets the challenge requirements while keeping the logic simple enough to implement and test.

### Command Processing
- **Decision**: Commands such as `PLACE`, `MOVE`, `LEFT`, `RIGHT`, and `REPORT` are processed sequentially via the `processCommands()` function.
- **Reason**: This approach simplifies user input handling by allowing multiple commands to be inputted at once.

### Boundary Checking
- **Decision**: The robot’s movements are restricted to the bounds of the 5x5 grid.
- **Reason**: This prevents the robot from falling off the grid, adhering to the problem statement.

### Facing Directions
- **Decision**: The robot can face four cardinal directions: North, East, South, and West.
- **Reason**: These directions provide a simple and logical way to control the robot's movement on the grid.

### Use of JavaScript
- **Decision**: JavaScript is utilized for handling the robot's movement, direction control, and reporting function.
- **Reason**: JavaScript is well-suited for managing user interactions and logic on the client side, making it ideal for this web-based project.

### Separation of Concerns
- **Decision**: HTML is used for structure, CSS for styling, and JavaScript for functionality.
- **Reason**: This separation keeps the code organized and maintainable, allowing for easier updates and debugging in the future.

  ## Documentation
 [Project Documentation](User Guide)
