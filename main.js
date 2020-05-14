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
    strokeWeight(4); // witdh of the stroke used for line.
    stroke(255);
    noFill();
    ellipse(200,200,300,300);

    

    stroke(255, 100, 150);
    /**
     * x, y, distance(r x), distance(r,x) but the last one is angle.
     * we can make a half of circle by modifying the angle.
     */
    arc(200, 200, 300, 300, 0, 360); 


}
    