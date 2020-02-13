const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;


const createStars = (amount) => {
    let size = 0, temp;
    fill("white");
    noStroke();
    for(let i = 0; i <= amount; i++){
        push();
        size = random(1, 4);
         rect(random(0, WIDTH), random(0, HEIGHT), size, size);
        pop();
    }
}


function setup () {
    createCanvas(WIDTH-30, HEIGHT);
    noLoop();
}

function draw () {
    createStars(70);
}



