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

var db = new PouchDB('dbname');

db.put(gamestate);

db.changes({
    onChange: function() {
        console.log('Ch-Ch-Changes');
    }
});

var venturename = 'test';

db.replicate.to('localhost:9000/database/' + venturename);


// For switching between the two animation sprites, ugly method!!!
var moving = false;
var noText = true;

function move (direction) {
    beginGame();

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
                    if (userPlayer.x > 490 && userPlayer.y > 190) {
                        userPlayer.x -= 10;
                    } else if (userPlayer.y < 200 && userPlayer.x > 60) {
                        userPlayer.x -= 10;
                    }
                    break;

                // Gap
                case canvasIDList[2]:
                    if (userPlayer.x > 70 && userPlayer.x <= 1240 && userPlayer.y >= 0 && userPlayer.y <= 110) {
                        userPlayer.x -= 10;
                    } else if (userPlayer.x > 600 && userPlayer.x <= 710 && userPlayer.y >= 100 && userPlayer.y <= 410) {
                        userPlayer.x -= 10;

                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    if (userPlayer.x > 70 && userPlayer.x <= 1240 && userPlayer.y >= 0 && userPlayer.y <= 110) {
                        userPlayer.x -= 10;
                    } else if (userPlayer.x > 600 && userPlayer.x <= 710 && userPlayer.y >= 100 && userPlayer.y <= 410) {
                        userPlayer.x -= 10;
                    }
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
                    if (userPlayer.y > 300) {
                        userPlayer.y -= 10;
                    } else if (userPlayer.x > 590 && userPlayer.x < 710 && userPlayer.y > 130 || goToNextGame) {
                        userPlayer.y -= 10;

                    }
                    break;

                // Aha
                case canvasIDList[1]:
                    if (userPlayer.y > -20 && userPlayer.x < 810) {
                        userPlayer.y -= 10;
                    } else if (userPlayer.y > 140 && userPlayer.x > 810) {
                        userPlayer.y -= 10;
                    } else if (userPlayer.x > 570 && userPlayer.x < 730 && goToNextGame) {
                        userPlayer.y -= 10;
                    }
                    break;

                // Gap
                case canvasIDList[2]:
                    if (userPlayer.x >= 60 && userPlayer.x <= 1240 && userPlayer.y > 10 && userPlayer.y <= 110) {
                        userPlayer.y -= 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x <= 710 && userPlayer.y > 100 && userPlayer.y <= 410) {
                        userPlayer.y -= 10;

                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    if (userPlayer.x >= 60 && userPlayer.x <= 1240 && userPlayer.y > 10 && userPlayer.y <= 110) {
                        userPlayer.y -= 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x <= 710 && userPlayer.y > 100 && userPlayer.y <= 410) {
                        userPlayer.y -= 10;
                    }
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
                    if (userPlayer.x < 800 && userPlayer.y > 190) {
                        userPlayer.x += 10;
                    } else if (userPlayer.x < 800 && userPlayer.y < 120) {
                        userPlayer.x += 10;
                    } else if (userPlayer.y > 130 && userPlayer.y < 200 && userPlayer.x < 1250) {
                        userPlayer.x += 10;
                    } else if (userPlayer.y < 120 && userPlayer.x < 800) {
                        userPlayer.x += 10;
                    }
                    break;

                // Gap
                case canvasIDList[2]:
                    if (userPlayer.x >= 60 && userPlayer.x < 1230 && userPlayer.y >= 0 && userPlayer.y <= 110) {
                        userPlayer.x += 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x < 700 && userPlayer.y >= 100 && userPlayer.y <= 410) {
                        userPlayer.x += 10;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    if (userPlayer.x >= 60 && userPlayer.x < 1230 && userPlayer.y >= 0 && userPlayer.y <= 110) {
                        userPlayer.x += 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x < 700 && userPlayer.y >= 100 && userPlayer.y <= 410) {
                        userPlayer.x += 10;
                    }
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
                    // First branch does the desk, second does
                    if (userPlayer.y > 130 && userPlayer.y < 190 && userPlayer.x > 810) {
                        userPlayer.y += 10;
                    } else if (userPlayer.x < 490 && userPlayer.y < 190) {
                        userPlayer.y += 10;
                    } else if (userPlayer.x > 480 && userPlayer.x < 820 && userPlayer.y < 400) {
                        userPlayer.y += 10;
                    }
                    break;

                // Gap
                case canvasIDList[2]:
                    if (userPlayer.x >= 60 && userPlayer.x <= 1240 && userPlayer.y >= 0 && userPlayer.y < 100) {
                        userPlayer.y += 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x <= 710 && userPlayer.y >= 100 && userPlayer.y < 400) {
                        userPlayer.y += 10;
                    }
                    break;

                // Surv
                case canvasIDList[3]:
                    if (userPlayer.x >= 60 && userPlayer.x <= 1240 && userPlayer.y >= 0 && userPlayer.y < 100) {
                        userPlayer.y += 10;
                    } else if (userPlayer.x >= 590 && userPlayer.x <= 710 && userPlayer.y >= 100 && userPlayer.y < 400) {
                        userPlayer.y += 10;
                    }
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

function beginGame () {

    switch (canvasID) {

        // Start
        case canvasIDList[0]:
            if (userPlayer.x > 590 && userPlayer.x < 710 && userPlayer.y > 50 && userPlayer.y < 200 && noText) {
                beginText(790, 330);
                noText = false;
            }

            if (userPlayer.x > 590 && userPlayer.x < 710 && userPlayer.y < 120 && goToNextGame) switchGame("aha");

            break;

        // Aha
        case canvasIDList[1]:
            if (userPlayer.x > 410 && userPlayer.x < 650 && userPlayer.y < 140 && noText) {
                beginText(155, 35);
                noText = false;
            }

            if (userPlayer.x > 570 && userPlayer.x < 730 && userPlayer.y < -10 && goToNextGame) switchGame("gap");

            break;

        // Gap
        case canvasIDList[2]:
            if (userPlayer.x >= 340 && userPlayer.x <= 360 && userPlayer.y >= 0 && userPlayer.y <= 20 && noText) {
                beginText(150,35);
                noText = false;
            }
            break;

        // Survey
        case canvasIDList[3]:
            if (userPlayer.x >= 940 && userPlayer.x <= 960 && userPlayer.y >= 0 && userPlayer.y <= 20 && noText) {
                beginText(1130,35);
                noText = false;
            }
            break;
/*
        // Interest
        case canvasIDList[4]:
            break;

        // Elevator
        case canvasIDList[5]:
            break;

        // End
        case canvasIDList[6]:
            break;
*/
        default:
            break;
    }
}
