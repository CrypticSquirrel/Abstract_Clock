function setup() { 
      
    // Create Canvas of given size 
    createCanvas(580, 450); 
} 
  
function draw() { 
      
    // Set the background color 
    background(220); 
      
    for(var i=0, j=255; i<255, j>0; i++, j--) { 
        fill(i, j, i); 
    } 
      
    // Set the stroke weight 
    strokeWeight(5); 
      
    // Use translate function 
    translate(width / 2, height / 2); 
      
    translate(p5.Vector.fromAngle(millis() / 1000, 200)); 
      
    // Create rectangle 
    rect(10, 10, 40, 30); 
} 