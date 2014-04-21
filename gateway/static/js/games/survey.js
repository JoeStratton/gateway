/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "survCanvas";
}

function initImages() {
    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene4_init.png"},
        {id: "game_guide", src: "/static/sprites/Dash_2.png"}
    ];
}

function loadGameConfig() {

    var imgs = [];

    // Load our images as individual Bitmaps
    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Setup and scale dash by the monitor
    imgs[1].x = 950;
    imgs[1].y = 0;
    imgs[1].scaleY = 0.8;
    imgs[1].scaleX = 0.8;

    // Add our images to the canvas. This is specific to the number of images loaded
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
}

function getStartingPlayerConfig() {
    return {
        'pos': 'down1',
        'xloc': 650,
        'yloc': 10,
        'scaleX': 1,
        'scaleY': 1
    };
}
