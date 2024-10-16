const TABLE_SIZE = 5;

let robot = {
    x: null,
    y: null,
    facing: null,
    placed: false
};


function place(x, y, facing) {
    if (x >= 0 && x < TABLE_SIZE && y >= 0 && y < TABLE_SIZE && 
		(facing === "NORTH" || facing === "EAST" || facing === "SOUTH" || facing === "WEST")) {
        robot.x = x;
        robot.y = y;
        robot.facing = facing;
        robot.placed = true;
    }
}


function move() {
    if (!robot.placed) return;

    switch (robot.facing) {
        case "NORTH":
            if (robot.y < TABLE_SIZE-1) robot.y++;
            break;
        case "EAST":
            if (robot.x < TABLE_SIZE-1) robot.x++;
            break;
        case "SOUTH":
            if (robot.y > 0) robot.y--;
            break;
        case "WEST":
            if (robot.x > 0) robot.x--;
            break;
    }
}

function left() {
    if (!robot.placed) return;

    if (robot.facing === "NORTH") {
        robot.facing = "WEST";
    } else if (robot.facing === "WEST") {
        robot.facing = "SOUTH";
    } else if (robot.facing === "SOUTH") {
        robot.facing = "EAST";
    } else if (robot.facing === "EAST") {
        robot.facing = "NORTH";
    }
}


function right() {
    if (!robot.placed) return;

    if (robot.facing === "NORTH") {
        robot.facing = "EAST";
    } else if (robot.facing === "EAST") {
        robot.facing = "SOUTH";
    } else if (robot.facing === "SOUTH") {
        robot.facing = "WEST";
    } else if (robot.facing === "WEST") {
        robot.facing = "NORTH";
    }
}


function report() {
    if (!robot.placed) return;
    return `${robot.x},${robot.y},${robot.facing}`;
}


function processCommands() {
    const commands = document.getElementById("console").value.split("\n");
    let output = "";
    console.log(commands)
    for (let command of commands) {
        command = command.trim().toUpperCase();
        if (command.startsWith("PLACE")) {
            const args = command.split(/[ ,]+/);
            if (args.length === 4) {
                const x = parseInt(args[1]);
                const y = parseInt(args[2]);
                const facing = args[3];
                place(x, y, facing);
            }
        } else if (command === "MOVE") {
            move();
        } else if (command === "LEFT") {
            left();
        } else if (command === "RIGHT") {
            right();
        } else if (command === "REPORT") {
            const reportOutput = report();
            if (reportOutput) output += reportOutput + "\n";
        }
    }

    const outputContainer = document.getElementById("output-container");
    const outputElement = document.getElementById("output");

    if (output) {
        outputElement.innerHTML = output.replace(/\n/g, "<br>");
        outputContainer.style.display = "block"; 
    } else {
        outputElement.innerHTML = "No output yet";
        outputContainer.style.display = "none"; 
    }
}
