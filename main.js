/**
 * How to modifying the pannel,
 */

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    let hr = hour();
    let mn = minute();
    let sd = second();

    fill(255);
    noStroke();
    text(hr + ':' + mn + ':' + sd, 10 , 200);
}
    