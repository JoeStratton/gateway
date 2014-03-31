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

function move (player, direction) {

    switch (direction) {
        // Left
        case 37:
            player.x -= 5;
            break;

        // Up
        case 38:
            player.y -= 5;
            break;

        // Right
        case 39:
            player.x += 5;
            break;

        // Down
        case 40:
            player.y += 5;
            break;

        default:
            break;
    }
}

/**
 * resets the postion of an object
 * @param object being reset
 */
function reset(player) {

    player.x = 100;
    player.y = 100;
}
