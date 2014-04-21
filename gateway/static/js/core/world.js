/**
 * manages the stage/world using easel js
 */

/**
 * This hold the dom of the canvas element
 * @property canvas
 * @type {DOM}
 */
var canvas;

/**
 * This hold the name of the id of the canvas
 * @property canvasID
 * @type {string}
 */
var canvasID;

/**
 * This hold the names of all possible canvas ID's
 * @property canvasIDs
 * @type {array}
 */
var canvasIDList;

/**
 * This manages the easel js stage
 * @property
 * @type {createjs.Stage}
 */
var stage;

/**
 * This is the character of the world
 * @property object
 * @type {}
 */
var userPlayer;

/**
 * This is the holder for the images in the game
 * @property canvas
 * @type {array}
 */
var manifest;

/**
 * This is what is loading our manifest images
 * @property canvas
 * @type {createjs.LoadQueue}
 */
var preload;

/**
 * This is the progress bar for loading the game
 * @property canvas
 * @type {createjs.Text}
 */
var progressText;

/**
 * This is the height of the game canvas
 * @property canvas
 * @type {window}
 */
var gameHeight;

/**
 * This is the width of the game canvas
 * @property canvas
 * @type {window}
 */
var gameWidth;


var startText;


function initGame() {

    // Global config
    canvasIDList = ['startCanvas', 'ahaCanvas', 'gapCanvas', 'survCanvas', 'interCanvas', 'elevCanvas', 'endCanvas'];

    // Canvas config
    canvasID = getCanvasId();
    canvas = document.getElementById(canvasID);
    canvas.width = 1400;
    canvas.height = 650;
    stage = new createjs.Stage(canvas);

    // Set game attributes
    createjs.Ticker.setFPS(60);
    // Create our progress bar
    initLoadProgress();
    // Setup our game image manifest (game specific function)
    initImages();
    // Queue & Preload our manifest
    startPreload();
}

function initLoadProgress() {

    progressText = new createjs.Text("", "20px Arial", "#000000");
    progressText.x = 300 - progressText.getMeasuredWidth() / 2;
    progressText.y = 20;
    stage.addChild(progressText);
}

function startPreload() {

    preload = new createjs.LoadQueue(true);
    preload.on("progress", handleGameProgress);
    preload.on("complete", loadGame); // Game specific function
    preload.loadManifest(manifest);
}

function handleGameProgress() {
    progressText.text = (preload.progress*100|0) + " % Loaded";
}

function loadGame() {
    // Load our game specific config
    loadGameConfig();
    // Remove the progress bar
    stage.removeChild(progressText);
    // Create our spritesheet player (For some reason, only works if function call is placed here)
    createPlayer();
}

function createPlayer() {

    var config = getStartingPlayerConfig();

    // Define the specific sprite sheet data
    var spriteData = new createjs.SpriteSheet({
        images: ["/static/sprites/Sprite_Sheet.png"],
        frames: {width: 100, height: 200, regX: 0, regY: 0},
        animations: {
            right1: {frames: [1], next: "right2", speed: 2},
            right2: {frames: [2], next: "right1", speed: 2},
            left1: {frames: [3], next: "left2", speed: 2},
            left2: {frames: [4], next: "left1", speed: 2},
            down1: {frames: [6], next: "down2", speed: 2},
            down2: {frames: [7], next: "down1", speed: 2}
        }
    });

    // Set our user image and location to the global variable
    userPlayer = new createjs.Sprite(spriteData, config.pos);
    userPlayer.x = config.xloc;
    userPlayer.y = config.yloc;
    userPlayer.scaleX = config.scaleX;
    userPlayer.scaleY = config.scaleY;

    // Add our user to the canvas
    stage.addChild(userPlayer);
}


function beginText(xpos,ypos,state) {

    startText = new createjs.Text("Click to Start", "20px Arial", "#ffffff");

    startText.addEventListener("click", function(event) {
        initInteraction();
        stage.removeChild(startText);
    });

    startText.x = xpos;
    startText.y = ypos;
    stage.addChild(startText);
}
