/* Testing movement SPECIFIC to the Aha minigame */

/*describe("aha game logic movement", function() {
    var object = {};

    // On the vertical sidewalk, should be able to move left
    it("will let the user move left", function() {
        object.x = 380;
        object.y = 130;

        move(object, 37, 'ahaCanvas');
        expect(object.x).toBe(370);
        expect(object.y).toBe(130);
    });

    // Off the vertical sidewalk, should NOT be able to move left
    it("will NOT let the user move left", function() {
        object.x = 350;
        object.y = 130;

        move(object, 37, 'ahaCanvas');
        expect(object.x).toBe(350);
        expect(object.y).toBe(130);
    });

    // In front of vertical sidewalk, should be able to walk up it
    it("will let the user move up", function() {
        object.x = 360;
        object.y = 130;

        move(object, 38, 'ahaCanvas');
        expect(object.x).toBe(360);
        expect(object.y).toBe(120);
    });

    // First branch (not on sidewalk), should NOT be able to move upwards
    it("will NOT let the user move up", function() {
        object.x = 100;
        object.y = 130;

        move(object, 38, 'ahaCanvas');
        expect(object.x).toBe(100);
        expect(object.y).toBe(130);
    });

    // On vertical sidewalk, should be able to move right within 40 px limit
    it("will let the user move right", function() {
        object.x = 360;
        object.y = 130;

        move(object, 39, 'ahaCanvas');
        expect(object.x).toBe(370);
        expect(object.y).toBe(130);
    });

    // Test you can't walk off the screen
    it("will NOT let the user move right", function() {
        object.x = 720;
        object.y = 120;

        move(object, 39, 'ahaCanvas');
        expect(object.x).toBe(720);
        expect(object.y).toBe(120);
    });

    // Should be able to move down the vertical sidewalk
    it("will let the user move right", function() {
        object.x = 370;
        object.y = 50;

        move(object, 40, 'ahaCanvas');
        expect(object.x).toBe(370);
        expect(object.y).toBe(60);
    });

    // Under sidewalk, shouldn't be able to go down any further
    it("will NOT let the user move right", function() {
        object.x = 0;
        object.y = 180;

        move(object, 40, 'ahaCanvas');
        expect(object.x).toBe(0);
        expect(object.y).toBe(180);
    });
});*/
