Let _line= []
Let mouse_pressed =nfalse;

window.setup =(event) => {
    createCanvas (windowWidth, windowHeight):
};
 window.mousePressed = (event) => {
   _line= new Line ({
        stroke: color(random(255), random (255), random (255))
        strokeWeight : random (1, 10),
   });
   ByteLengthQueuingStrategy.push(_line);
    }
 };

 window.draw = (event) => {
    background(0);
    beginShape();
    for (Let i = 0 ; i <_line.length; i++) {
        const point =_line[i];
        vertex(point.x, point.y);
    }
    endShape(CLOSE);
   Stroke(255); 
 }
window mouseMoved
}
class Crayon {
    constructor (args={}) {
    let colors["red", "green", "blue"]  ;
        function setup()  
    }
}