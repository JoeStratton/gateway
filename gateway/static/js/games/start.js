/*
    These are specific functions that DIFFER between games
*/

var txtbox, txtbox_words;

var goToNextGame = false;

function getCanvasId() {
    return "startCanvas";
}

function initImages() {
    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene1_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"},
        {id: "welcome_txtbox", src: "/static/sprites/Textbox.png"},
        {id: "welcome_txt", src: "/static/sprites/s1_text/s1_1.png"}
    ];
}

function loadGameConfig() {

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

    txtbox = imgs[2];
    txtbox_words = imgs[3];

    // Add our images to the canvas. This is specific to the number of images loaded
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
}

function getStartingPlayerConfig() {
    return {
        'pos': 'left1',
        'xloc': 1200,
        'yloc': 340,
        'scaleX': 1,
        'scaleY': 1
    };
}

function initInteraction() {

    //alert(window.location.pathname);
    //window.location = window.location.protocol + "//" + window.location.host + "/" + "minigame/aha";

    txtbox.x = 200;
    txtbox.y = 475;
    txtbox.scaleY = 0.5;
    txtbox.scaleX = 1;

    txtbox_words.x = 215;
    txtbox_words.y = 475;
    txtbox_words.scaleY = 0.7;
    txtbox_words.scaleX = 1;

    goToNextGame = true;

    stage.addChild(txtbox, txtbox_words);
    stage.update();
}

function switchGame() {
    window.location = window.location.protocol + "//" + window.location.host + "/" + "minigame/aha";
}
