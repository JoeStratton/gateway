/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "ahaCanvas";
}

function initImages() {
    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene2_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"}
    ];
}

function loadGameConfig() {

    var imgs = [];

    // Load our images as individual Bitmaps
    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Scale & Set our main guy up by the entrance
    imgs[1].x      = 500;
    imgs[1].y      = 100;
    imgs[1].scaleY = 0.55;
    imgs[1].scaleX = 0.7;

    // Add our images and remove progress bar
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
}

function getStartingPlayerConfig() {
    return {
        'pos'   : 'walkLeft',
        'xloc'  : 300,
        'yloc'  : 700,
        'scaleX': 0.7,
        'scaleY': 0.55
    };
}
