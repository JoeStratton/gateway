/*
 * this is the core game logic
 * DO NOT PUT EVENT LISTENERS INTO THIS FILE
 * DO NOT PUT CREATE JS OR JQUERY INTO THIS FILE
 */

 /**
  * Allows an object to be moved based on key press integers
  * @param object to be moved
  * @param direction the object is moving in
  */

var gamestate = {
    position : {
        x: 0,
        y: 0
    },
    level: 1,
    start: {
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0
    },
    aha: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    elevator: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    gap: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    interest: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    },
    survey: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null
    }
};

// For switching between the two animation sprites, ugly method!!!
var moving = false;

function move (direction) {

    console.log("X Pos:" + gamestate.position.x);
    console.log("Y Pos:" + gamestate.position.y);

    switch (direction) {

        // Left
        case 37:
            // Ugly way to handle sprite animation :(
            if (moving === false) {
                userPlayer.gotoAndPlay("walkLeft");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("walkLeft");
                moving = false;
            }

            switch (canvasID) {
                // Start
                case canvasIDList[0]:
                    if (gamestate.position.x > 600 && gamestate.position.x < 710 && gamestate.position.y > 70) {     // Stay within vertical sidewalk
                        gamestate.position.x -= 10;
                    } else if (gamestate.position.x > -10 && gamestate.position.y > 290) {    // Stay within horizontal sidewalk
                        gamestate.position.x -= 10;
                    }
                    break;

                // Aha
                case canvasIDList[1]:
                    gamestate.position.x -= 10;
                    break;

                // Gap
                case canvasIDList[2]:
                    if ((gamestate.position.x > 0.375 * gameWidth) && (gamestate.position.y < 0.07 * gameHeight)) {     // Plant
                        gamestate.position.x -= 0.01 * gameWidth;
                    } else if ((gamestate.position.x > 0.05 * gameWidth) && (gamestate.position.y < 0.35 * gameHeight) && (gamestate.position.y > 0.07 * gameHeight)) {
                        gamestate.position.x -= 0.01 * gameWidth;
                    } else if ((gamestate.position.x > 0.42 * gameWidth) && (gamestate.position.y > 0.31 * gameHeight)) {   // Hallway
                        gamestate.position.x -= 0.01 * gameWidth;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    gamestate.position.x -= 10;
                    break;

                // Inter
                case canvasIDList[4]:
                    gamestate.position.x -= 10;
                    break;

                // Elev
                case canvasIDList[5]:
                    gamestate.position.x -= 10;
                    break;

                // End
                case canvasIDList[6]:
                    gamestate.position.x -= 10;
                    break;
            }
            break;

        // Up
        case 38:
            // Ugly way to handle sprite animation :(
            // We also don't have sprites for up animation
            if (moving === false) {
                userPlayer.gotoAndPlay("down1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("down2");
                moving = false;
            }

            switch (canvasID) {
                // Start
                case canvasIDList[0]:
                    if (gamestate.position.y > 300 || (gamestate.position.x > 590 && gamestate.position.x < 710 && gamestate.position.y > 80)) {
                        gamestate.position.y -= 10;
                    }
                    break;

                // Aha
                case canvasIDList[1]:
                    gamestate.position.y -= 10;
                    break;

                // Gap
                case canvasIDList[2]:
                    if ((gamestate.position.y > 0.05 * gameHeight) && (gamestate.position.x < 0.2 * gameWidth)) {
                        gamestate.position.y -= 0.02 * gameHeight;
                    } else if ((gamestate.position.y > 0.07 * gameHeight) && (gamestate.position.x > 0.2 * gameWidth) && (gamestate.position.x < 0.375 * gameWidth)) {  // Plant
                        gamestate.position.y -= 0.02 * gameHeight;
                    } else if ((gamestate.position.y > 0.05 * gameHeight) && (gamestate.position.x > 0.375 * gameWidth) && (gamestate.position.x < 0.55 * gameWidth)) {
                        gamestate.position.y -= 0.02 * gameHeight;
                    } else if ((gamestate.position.y > 0.1 * gameHeight) && (gamestate.position.x > 0.55 * gameWidth)) {    // Chairs
                        gamestate.position.y -= 0.02 * gameHeight;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    gamestate.position.y -= 10;
                    break;

                // Inter
                case canvasIDList[4]:
                    gamestate.position.y -= 10;
                    break;

                // Elev
                case canvasIDList[5]:
                    gamestate.position.y -= 10;
                    break;

                // End
                case canvasIDList[6]:
                    gamestate.position.y -= 10;
                    break;
            }
            break;

        // Right
        case 39:
            // Ugly way to handle sprite animation :(
            if (moving === false) {
                userPlayer.gotoAndPlay("walkRight");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("walkRight");
                moving = false;
            }

            switch (canvasID) {
                // Start
                case canvasIDList[0]:
                    if (gamestate.position.x > 580 && gamestate.position.x < 700 && gamestate.position.y > 70) {   // Stay within vertical sidewalk
                        gamestate.position.x += 10;
                    } else if (gamestate.position.x < 1310 && gamestate.position.y > 290) {    // Stay within horizontal sidewalk
                        gamestate.position.x += 10;
                    }
                    break;

                // Aha
                case canvasIDList[1]:
                    gamestate.position.x += 10;
                    break;

                // Gap
                case canvasIDList[2]:
                    if ((gamestate.position.x < 0.2 * gameWidth) && (gamestate.position.y < 0.07 * gameHeight)) {   // Plant
                        gamestate.position.x += 0.01 * gameWidth;
                    } else if ((gamestate.position.x < 0.55 * gameWidth) && (gamestate.position.y < 0.1)) {
                        gamestate.position.x += 0.01 * gameWidth;
                    } else if ((gamestate.position.x < 0.515 * gameWidth) && (gamestate.position.y > 0.31 * gameHeight)) {
                        gamestate.position.x += 0.01 * gameWidth;
                    } else if ((gamestate.position.x < 0.9 * gameWidth) && (gamestate.position.y > 0.1 * gameHeight)) {
                        gamestate.position.x += 0.01 * gameWidth;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    gamestate.position.x += 10;
                    break;

                // Inter
                case canvasIDList[4]:
                    gamestate.position.x += 10;
                    break;

                // Elev
                case canvasIDList[5]:
                    gamestate.position.x += 10;
                    break;

                // End
                case canvasIDList[6]:
                    gamestate.position.x += 10;
                    break;
            }
            break;

        // Down
        case 40:
            // Ugly way to handle sprite animation :(
            if (moving === false) {
                userPlayer.gotoAndPlay("down1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("down2");
                moving = false;
            }

            switch (canvasID) {
                // Start
                case canvasIDList[0]:
                    if (gamestate.position.y < 370) {
                        gamestate.position.y += 10;
                    }
                    break;

                // Aha
                case canvasIDList[1]:
                    gamestate.position.y += 10;
                    break;

                // Gap
                case canvasIDList[2]:
                    if ((gamestate.position.y < 0.31 * gameHeight) && (gamestate.position.x < 0.42 * gameWidth)) {
                        gamestate.position.y += 0.02 * gameHeight;
                    } else if ((gamestate.position.y < gameHeight) && (gamestate.position.x > 0.42 * gameWidth) && (gamestate.position.x < 0.515 * gameWidth)) {  // Hallway
                        gamestate.position.y += 0.02 * gameHeight;
                    } else if ((gamestate.position.y < 0.31 * gameHeight) && (gamestate.position.x > 0.515 * gameWidth)) {
                        gamestate.position.y += 0.02 * gameHeight;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    gamestate.position.y += 10;
                    break;

                // Inter
                case canvasIDList[4]:
                    gamestate.position.y += 10;
                    break;

                // Elev
                case canvasIDList[5]:
                    gamestate.position.y += 10;
                    break;

                // End
                case canvasIDList[6]:
                    gamestate.position.y += 10;
                    break;
            }
            break;

        default:
            break;
    }
}
