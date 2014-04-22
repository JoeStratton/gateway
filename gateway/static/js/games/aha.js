/**
 * These are the two textbox images that never leave the screen
 * until the questions are answered
 * @property canvasIDs
 * @type {image}
 */
var box_dialogue, box_answers;

/**
 * This hold the images that contain the user questions
 * @property canvasIDs
 * @type {array}
 */
var dialogue = [];

/**
 * This hold the images that contain the user answers
 * @property canvasIDs
 * @type {array}
 */
var answers = [];


/**
 * The specific ID of the games canvas
 */
function getCanvasId() {
    return "ahaCanvas";
}

/**
 * Any images that Aha is currently using in the game. Preload everything before hand
 */
function initImages() {
    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene2_init.png"},    // Background Image
        {id: "game_guide", src: "/static/sprites/Main_guy.png"},        // Robot
        {id: "box_dialogue", src: "/static/sprites/Textbox2.png"},      // Textbox 4 Dialogue
        {id: "box_answers", src: "/static/sprites/Textbox.png"},        // Textbox 4 Answers
        {id: "dialogue1", src: "/static/sprites/s2_text/s2_1.png"},     // Dialogue 1
        {id: "dialogue2", src: "/static/sprites/s2_text/s2_2.png"},
        {id: "dialogue3", src: "/static/sprites/s2_text/s2_3.png"},
        {id: "dialogue4", src: "/static/sprites/s2_text/s2_4.png"},     // Questions start once we see this dialogue
        {id: "dialogue5", src: "/static/sprites/s2_text/s2_5.png"},
        {id: "dialogue6", src: "/static/sprites/s2_text/s2_6.png"},
        {id: "dialogue7", src: "/static/sprites/s2_text/s2_7.png"},     // Dialogue 7
        {id: "answer1", src: "/static/sprites/s2_text/s2_a1.png"},      // Answer 1 - Left      (We see 3 answers at a time)
        {id: "answer2", src: "/static/sprites/s2_text/s2_a2.png"},      // Answer 2 - Middle
        {id: "answer3", src: "/static/sprites/s2_text/s2_a3.png"},      // Answer 3 - Right
        {id: "answer4", src: "/static/sprites/s2_text/s2_a4.png"},
        {id: "answer5", src: "/static/sprites/s2_text/s2_a5.png"},
        {id: "answer6", src: "/static/sprites/s2_text/s2_a6.png"},
        {id: "answer7", src: "/static/sprites/s2_text/s2_a7.png"},
        {id: "answer8", src: "/static/sprites/s2_text/s2_a8.png"},
        {id: "answer9", src: "/static/sprites/s2_text/s2_a9.png"}       // Answer 9
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

    // Scale & Set our main guy up by the entrance
    imgs[1].x = 470;
    imgs[1].y = 40;
    imgs[1].scaleY = 0.8;
    imgs[1].scaleX = 0.8;

    // Assign our textboxes to their global variables
    box_dialogue = imgs[2];
    box_answers = imgs[3];

    // Push all the dialogue images into an array
    for (i = 4; i < 11; i++) dialogue.push(imgs[i]);

    // Push all the answer images into an array
    for (i = 11; i < manifest.length; i++) answers.push(imgs[i]);

    // Add only our background and robot images to the canvas on startup
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
}

/**
 * Location and sizing of our main player on the canvas
 */
function getStartingPlayerConfig() {
    return {
        'pos': 'down1',
        'xloc': 710,
        'yloc': 390,
        'scaleX': 1,
        'scaleY': 1
    };
}

/**
 * Settings up the sizing and locations for both textbox images
 */
function initTextBoxConfig() {

    // Location and sizing for the dialogue box (top-right)
    box_dialogue.x = 950;
    box_dialogue.y = 50;
    box_dialogue.scaleY = 0.5;
    box_dialogue.scaleX = 0.8;

    // Location and sizing for the answer box (bottom)
    box_answers.x = 170;
    box_answers.y = 440;
    box_answers.scaleX = 1.06;
    box_answers.scaleY = 0.55;
}

/**
 * Settings up the sizing, locations and event handlers for all dialogue images
 */
function initDialogueConfig() {

    /**
     * TODO: Find out why my event listeners can't be set within
     *       a for loop and using i as the index in the array
     *
     * TODO: Find a better method for moving across dialogues on click.
     *       Currently have to click on image text EXACTLY and it's annoying.
    */

    // Set location and sizing for all dialogue text
    for (i = 0; i < dialogue.length; i++) {
        dialogue[i].x = 950;
        dialogue[i].y = 50;
        dialogue[i].scaleY = 0.6;
        dialogue[i].scaleX = 0.8;
    }

    // Setting up the actions of what occurs when you click on the dialogue text
    dialogue[0].addEventListener("click", function(event) {
        stage.removeChild(dialogue[0]);
        stage.addChild(dialogue[1]);
    });

    dialogue[1].addEventListener("click", function(event) {
        stage.removeChild(dialogue[1]);
        stage.addChild(dialogue[2]);
    });

    dialogue[2].addEventListener("click", function(event) {
        stage.removeChild(dialogue[2]);
        stage.addChild(dialogue[3], box_answers);

        // Load in the 3 answers for the user to choose from
        for (i = 0; i < 3; i++) stage.addChild(answers[i]);
    });

    dialogue[4].addEventListener("click", function(event) {
        stage.removeChild(dialogue[4]);
        stage.addChild(dialogue[5]);
        box_dialogue.scaleY = 0.6;  // Text is too big for box at this state
    });

    dialogue[5].addEventListener("click", function(event) {
        stage.removeChild(dialogue[5]);
        stage.addChild(dialogue[6]);
        box_dialogue.scaleY = 0.4;  // Reset it back down
        goToNextGame = true;        // Unlock access to walking to the elevator
    });
}

/**
 * Settings up the sizing, locations and event handlers for all answer images
 */
function initAnswersConfig() {

    /**
     * TODO: Save the answer the user chose to our DB
    */

    // Answers are broken into 3 at a time. Which means that 0,3,6 (etc) will have the same x locations
    answers[0].x = answers[3].x = answers[6].x = 180;
    answers[1].x = answers[4].x = answers[7].x = 300;
    answers[2].x = answers[5].x = answers[8].x = 425;

    // These are locations/sizings that apply to all answers
    for (i = 0; i < answers.length; i++) {
        answers[i].y = 440;
        answers[i].scaleY = 0.6;
        answers[i].scaleX = 0.8;
    }

    /**
     * So Travis said I can't make these in a loop. F*** off
     */

    // Questions 1-3 (Currently not saving which is chosen, so can give them each the same functionality)
    /*for (i = 0; i < 3; i++) {
        answers[i].addEventListener("click", function(event) {
            stage.removeChild(answers[0], answers[1], answers[2]);
            stage.addChild(answers[3], answers[4], answers[5]);
        }, false);
    }

    // Questions 4-6
    for (i = 3; i < 6; i++) {
        answers[i].addEventListener("click", function(event) {
            stage.removeChild(answers[3], answers[4], answers[5]);
            stage.addChild(answers[6], answers[7], answers[8]);
        }, false);
    }

    // Questions 7-9
    for (i = 6; i < 9; i++) {
        answers[i].addEventListener("click", function(event) {
            stage.removeChild(answers[6], answers[7], answers[8], box_answers, dialogue[3]);
            stage.addChild(dialogue[4]);
        }, false);
    }*/

    // Questions 1-3 (Currently not saving which is chosen, so can give them each the same functionality)
    answers[0].addEventListener("click", function(event) {
        stage.removeChild(answers[0], answers[1], answers[2]);
        stage.addChild(answers[3], answers[4], answers[5]);
    }, false);

    answers[1].addEventListener("click", function(event) {
        stage.removeChild(answers[0], answers[1], answers[2]);
        stage.addChild(answers[3], answers[4], answers[5]);
    }, false);

    answers[2].addEventListener("click", function(event) {
        stage.removeChild(answers[0], answers[1], answers[2]);
        stage.addChild(answers[3], answers[4], answers[5]);
    }, false);

    // Questions 4-6
    answers[3].addEventListener("click", function(event) {
        stage.removeChild(answers[3], answers[4], answers[5]);
        stage.addChild(answers[6], answers[7], answers[8]);
    }, false);

    answers[4].addEventListener("click", function(event) {
        stage.removeChild(answers[3], answers[4], answers[5]);
        stage.addChild(answers[6], answers[7], answers[8]);
    }, false);

    answers[5].addEventListener("click", function(event) {
        stage.removeChild(answers[3], answers[4], answers[5]);
        stage.addChild(answers[6], answers[7], answers[8]);
    }, false);

    // Questions 7-9
    answers[6].addEventListener("click", function(event) {
        stage.removeChild(answers[6], answers[7], answers[8], box_answers, dialogue[3]);
        stage.addChild(dialogue[4]);
    }, false);

    answers[7].addEventListener("click", function(event) {
        stage.removeChild(answers[6], answers[7], answers[8], box_answers, dialogue[3]);
        stage.addChild(dialogue[4]);
    }, false);

    answers[8].addEventListener("click", function(event) {
        stage.removeChild(answers[6], answers[7], answers[8], box_answers, dialogue[3]);
        stage.addChild(dialogue[4]);
    }, false);
}

/**
 * Handles what happens once the game is started
 * (The user clicking start game)
 */
function initInteraction() {

    // Set our locations for the textboxes
    initTextBoxConfig();

    // Set our locations and event handlers for the dialogue
    initDialogueConfig();

    // Set our locations and event handlers for the answers
    initAnswersConfig();

    // Begin our interaction with the user with our first dialogue message
    stage.addChild(box_dialogue, dialogue[0]);
}
