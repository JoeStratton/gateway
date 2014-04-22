/**
 * These are the textbox and welcome dialogue images
 * @property canvasIDs
 * @type {image}
 */
var txtbox, dialogue;


/**
 * The specific ID of the games canvas
 */
function getCanvasId() {
    return "startCanvas";
}

/**
 * Any images that Aha is currently using in the game. Preload everything before hand
 */
function initImages() {
    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene1_init.png"},    // Background Image
        {id: "game_guide", src: "/static/sprites/Main_guy.png"},        // Robot
        {id: "welcome_txtbox", src: "/static/sprites/Textbox.png"},     // Textbox 4 Welcome Dialogue
        {id: "welcome_txt", src: "/static/sprites/s1_text/s1_1.png"}    // Welcome Dialogue
    ];
}

/**
 * Configuration for how the game is presented on the canvas
 * and setting up our loaded images into useable variables
 */
function loadGameConfig() {

    // Container for manifest images
    var imgs = [];

    // Load our images as individual Bitmaps
    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Setup and scale dash by the monitor
    imgs[1].x = 750;
    imgs[1].y = 180;
    imgs[1].scaleY = 0.8;
    imgs[1].scaleX = 0.8;

    // Assign our textbox and message to their global variables
    txtbox = imgs[2];
    dialogue = imgs[3];

    // Add our images to the canvas. This is specific to the number of images loaded
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
}

/**
 * Location and sizing of our main player on the canvas
 */
function getStartingPlayerConfig() {
    return {
        'pos': 'walkLeft',
        'xloc': 1200,
        'yloc': 340,
        'scaleX': 1,
        'scaleY': 1
    };
}

/**
 * Handles what happens once the game is started
 * (The user clicking start game)
 */
function initInteraction() {

    // Sizing and location of the welcome textbox
    txtbox.x = 200;
    txtbox.y = 475;
    txtbox.scaleY = 0.5;
    txtbox.scaleX = 1;

    // Sizing and location of the welcome dialogue
    dialogue.x = 215;
    dialogue.y = 475;
    dialogue.scaleY = 0.7;
    dialogue.scaleX = 1;

    // Unlock access to walking into the building
    goToNextGame = true;

    // Begin our interaction with the user with our welcome dialogue message
    stage.addChild(txtbox, dialogue);
}
