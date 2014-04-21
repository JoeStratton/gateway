/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "interCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene5_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"}
    ];
}

function loadGameConfig() {

    console.log("go for yourself");

    var imgs = [];

    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Add our images to the canvas and remove the progress bar
    for (i = 0; i < 1; i++) stage.addChild(imgs[i]);
}

function getStartingPlayerConfig() {
    return {
        'pos': 'left1',
        'xloc': 650,
        'yloc': 10,
        'scaleX': 1,
        'scaleY': 1
    };
}
