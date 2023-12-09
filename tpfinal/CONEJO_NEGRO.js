class ConejoNegro {
  
constructor() {
    
    this.px = random(500);
    this.py = random(100, 500);
    this.vi = true;
   
    
}

capturar(mx, my) {
    
    if (this.vi && dist(mx - 80, my - 80, this.px, this.py) < 50) {
      
      this.px = random(500);
      this.py = random(100, 500);
     
      if (aventura.jug.contador > 0) {
        
        aventura.jug.contador--;
        
}
}
}

dibujar() {
    
   if (this.vi) {
      
     image(negro, this.px, this.py, 100, 120);
      
}
}
}
