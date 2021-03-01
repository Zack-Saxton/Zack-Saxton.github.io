// DISTORTION START

new hoverEffect({
  
  parent: document.querySelector('.distortion'),
  intensity: 0.1,
  image1: 'media/Untitled-12.png', 
  image2: 'media/snowedit.png',
  displacementImage: 'media/diss.png',
  angle: Math.PI / 8,
  
 
 
 });
 


// DISTORTION END




// ABOUT SECTION START
let imgFx = document.querySelectorAll('.img');
let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;


document.addEventListener("mousemove", function(fx){
    mousePos(fx);
})

function mousePos(fx){
    moveXAmount = fx.pageX - prevX;
    moveYAmount = fx.pageY - prevY;

    moveImg(moveXAmount, moveYAmount);

    prevX = fx.pageX;
    prevY = fx.pageY;

}

function moveImg(xAmount, yAmount){
    imgFx.forEach(function(img){
        let movementStrength = 5 + (Math.random() * 15);

        img.style.left = (img.offsetLeft) - (xAmount/movementStrength) + "px";
        img.style.top = (img.offsetTop) - (yAmount/movementStrength) + "px";
    })
}

// ABOUT SECTION END



// SERVICES CARDS EFFECT START

class parallaxTiltEffect {
  constructor({ element, tiltEffect }) {
    this.element = element;
    this.container = this.element.querySelector(".container");
    this.size = [300, 360];
    [this.w, this.h] = this.size;

    this.tiltEffect = tiltEffect;

    this.mouseOnComponent = false;

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.defaultStates = this.defaultStates.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.init = this.init.bind(this);

    this.init();
  }

  handleMouseMove(event) {
    const { offsetX, offsetY } = event;

    let X;
    let Y;

    if (this.tiltEffect === "reverse") {
      X = (offsetX - this.w / 2) / 3 / 3;
      Y = -(offsetY - this.h / 2) / 3 / 3;
    } else if (this.tiltEffect === "normal") {
      X = -(offsetX - this.w / 2) / 3 / 3;
      Y = (offsetY - this.h / 2) / 3 / 3;
    }

    this.setProperty("--rY", X.toFixed(2));
    this.setProperty("--rX", Y.toFixed(2));

    this.setProperty("--bY", 80 - (X / 4).toFixed(2) + "%");
    this.setProperty("--bX", 50 - (Y / 4).toFixed(2) + "%");
  }

  handleMouseEnter() {
    this.mouseOnComponent = true;
    this.container.classList.add("container--active");
  }

  handleMouseLeave() {
    this.mouseOnComponent = false;
    this.defaultStates();
  }

  defaultStates() {
    this.container.classList.remove("container--active");
    this.setProperty("--rY", 0);
    this.setProperty("--rX", 0);
    this.setProperty("--bY", "80%");
    this.setProperty("--bX", "50%");
  }

  setProperty(p, v) {
    return this.container.style.setProperty(p, v);
  }

  init() {
    this.element.addEventListener("mousemove", this.handleMouseMove);
    this.element.addEventListener("mouseenter", this.handleMouseEnter);
    this.element.addEventListener("mouseleave", this.handleMouseLeave);
  }
}

const $ = (e) => document.querySelector(e);

const wrap1 = new parallaxTiltEffect({
  element: $(".wrap--1"),
  tiltEffect: "reverse",
});

const wrap2 = new parallaxTiltEffect({
  element: $(".wrap--2"),
  tiltEffect: "normal",
});

const wrap3 = new parallaxTiltEffect({
  element: $(".wrap--3"),
  tiltEffect: "reverse",
});

// SERVICES CARD EFFECT END

