describe("Toy Robot Simulator", function() {

    beforeEach(function() {
        // Reset robot before each test
        robot.x = null;
        robot.y = null;
        robot.facing = null;
        robot.placed = false;
    });

    it("should place the robot correctly", function() {
        place(0, 0, 'NORTH');
        expect(robot.x).toBe(0);
        expect(robot.y).toBe(0);
        expect(robot.facing).toBe('NORTH');
    });

    it("should not place the robot out of bounds", function() {
        place(5, 5, 'NORTH'); // Invalid place
        expect(robot.placed).toBe(false);
    });

    it("should move the robot correctly", function() {
        place(0, 0, 'NORTH');
        move();
        expect(robot.y).toBe(1);
        expect(robot.x).toBe(0);
    });

    it("should rotate the robot to the left", function() {
        place(0, 0, 'NORTH');
        left();
        expect(robot.facing).toBe('WEST');
    });

    it("should rotate the robot to the right", function() {
        place(0, 0, 'NORTH');
        right();
        expect(robot.facing).toBe('EAST');
    });

    it("should report the robot's position correctly", function() {
        place(1, 2, 'EAST');
        const reportOutput = report();
        expect(reportOutput).toBe('1,2,EAST');
    });

});
