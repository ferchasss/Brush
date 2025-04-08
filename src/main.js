class Point { // plantilla que nos va a permitir crear objetos, llenos de propiedades y metodos. 
  constructor(args={}) { // args = buena practica para más propiedades, para que sirvan sin dar error. 
    console.log("args");  

    // valores por defecto para las propiedades.
    this.position = createVector(args.x || 0 , args.y ||0 );
    this.size= args.size || 15;
    this.fill = args.fill || 'white'
    this.stroke = args.stroke || 'black';
    this.opacity = args.opacity || 1;
    this.friction = args.friction || 0.2;

  }

  draw() {
    fill(255, this.opacity * 255);
    noStroke();
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  update(mouse) {
    this.position.x = (mouseX - this.position.x) * this.friction + this.position.x;
    this.position.y = (mouseY - this.position.y) * this.friction + this.position.y;
  }

}

let point_a;

window.setup = (event) => {
  point_a = new Point();
    fill: 'green',
    size: 30,
    friction: 0.1
});
point_b =new Point({
  fill: 'blue',
  size: 5,
  friction: 0.2
});
})
  createCanvas(windowWidth, windowHeight);
};

//p5.js draw funtion
window.draw = (event) => {
  background('black');
  point_a.update();
  point_a.draw();
  point_b.update();
  point_b.draw();

};

//p5.js windowResized funtion
window.windowResized = (event) => {
  resizeCanvas(windowWidth, windowHeight);
  background('black');
};

