let gato = []; 
let img,fondo,saco,negro,reglas,ganaste,perdiste;
let aventura;


function setup() {
  
  createCanvas(600, 600);
  
  aventura = new Aventura();
  
}

function draw() {
  
  aventura.mostrar();
}

function preload() {

for (let i = 0; i < 12; i++) {
    gato[i] = loadImage("data/gato" + i + ".jpeg");
  }
  
  
saco = loadImage("./data/saco.png");
fondo = loadImage("./data/pradera.png");  
img = loadImage ("./data/conejo.png");
negro = loadImage ("./data/conejonegro.png");
reglas = loadImage ("./data/reglass.jpg");
ganaste = loadImage ("./data/ganaste.jpeg");
perdiste = loadImage ("./data/perdiste.jpeg")
  
  
}
function mousePressed() {
  
 

  if (aventura.estado == 0 && aventura.botones.click()) {
    
    aventura.estado = 1;
    
  } else if (aventura.estado == 1 && aventura.botones.click()) {
    
    aventura.estado = 2;
    
  } else if (aventura.estado == 2 && aventura.botones.click()) {
    
    aventura.estado = 13;
    
  } else if (aventura.estado == 3 && aventura.botones.click()) {
    
    aventura.estado = 4;
    
  }
  
  else if (aventura.estado == 4 && aventura.botones.click()) {
    
    aventura.estado = 5;
    
  }
  
  else if (aventura.estado == 4 && aventura.botonA.click()) {
    
    aventura.estado = 9;
    
  }
  
  else if (aventura.estado == 5 && aventura.botones.click()) {
    
    aventura.estado = 6;
  }
  else if (aventura.estado == 6 && aventura.botones.click()) {
    
    aventura.estado = 7;
  }
  
  else if (aventura.estado == 7 && aventura.botones.click()) {
    
    aventura.estado = 8;
    
  }
  
  else if (aventura.estado == 7 && aventura.botonA.click()) {
    
    aventura.estado = 11;
    
  }
  
  
   else if (aventura.estado == 9 && aventura.botones.click()) {
    
    aventura.estado = 10;
  }
  
   else if (aventura.estado == 10 && aventura.botones.click()) {
    
    aventura.estado = 12;
  }
  
   else if (aventura.estado == 11 && aventura.botones.click()) {
    
    aventura.estado = 12;
  }
  
   else if (aventura.estado == 8 && aventura.botones.click()) {
    
    aventura.estado = 12;
    
  }
   
   else if (aventura.estado == 12 && aventura.botones.click()) {
    
    aventura.estado = 0;
    aventura.jug.timer = 10;
    aventura.jug.contador = 0;
  }




 else if ( aventura.estado == 13  && aventura.botonPlay.click()) {
    
    aventura.estado = 14;
}
  
  
  else if ( aventura.estado == 15  && aventura.botones.click() ) {
    
    aventura.estado = 3;
    
}
  
  
  else if ( aventura.estado == 16  && aventura.botonPlay.click() ) {
    
    aventura.estado = 0;
    aventura.jug.timer = 10;
    aventura.jug.contador = 0;
}
  
  
  
  aventura.jug.bolsa();

}  
