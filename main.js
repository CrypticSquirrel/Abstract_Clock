/**
 * How to modifying the pannel,
 */

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);

    let hr = hour();
    let mn = minute();
    let sd = second();
/**
 * Setting up the clock.
 */
    // fill(255);
    // noStroke();
    // text(hr + ':' + mn + ':' + sd, 10 , 200);

    /**
     * Creating the circle.
     */
    // strokeWeight(8); // witdh of the stroke used for line.
    // stroke(255);
    // noFill();
    // ellipse(200,200,300,300);

    
    strokeWeight(4);
    stroke(255, 100, 150);
    /**
     * x, y, distance(r x), distance(r,x) bu t the last one is angle.
     * we can make a semicircle by modifying the angle.
     */
    // arc(200, 200, 300, 300, 0, 360); // Circle.

    // MouseX. The system variable mouseX always contains the current horizontal position of the mouse, 
    //relative to (0, 0) of the canvas.
    //noFill();
    let end = map(mouseX, 0, width, 0, 360);
   // arc(200, 200, 300, 300, 0, end, PIE); // a semicircle . 
    arc(200, 200, 300, 300, 0, end, OPEN);

}
    