let pantallas = [];
let pantallaActual = 0;   
let botones = [];
let mifuente;
let musicaFondo;

function preload() {
  mifuente = loadFont('assets/mifuente.otf');

  
 for (let i = 0; i <= 12; i++) {
  pantallas[i] = loadImage(`assets/Pantalla${i}.png`);
}
 
  pantallas[13] = loadImage('assets/Pantalla13.png');

  
  musicaFondo = loadSound('assets/musicaFondo.mp3');
}

function setup() {
  createCanvas(640, 480);
  crearBotones();

  musicaFondo.setLoop(true);
  musicaFondo.setVolume(0.3);
  
}

function draw() {
  if (!pantallas[pantallaActual]) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Cargando...", width / 2, height / 2);
    return;
  }

  background(0);
  image(pantallas[pantallaActual], 0, 0, width, height);

  
  if (pantallaActual === 13) {
    fill(255);
    textFont(mifuente);
    textSize(20);
    textAlign(CENTER, CENTER);
    
  }

  dibujarBotones();
}

function crearBotones() {
  botones = [
    [ 
      { x: 30, y: 310, w: 180, h: 50, destino: 1, texto: "INICIAR" },
      { x: 430, y: 310, w: 180, h: 50, destino: 13, texto: "CREDITOS" }
    ],
    [{ x: 450, y: 315, w: 180, h: 50, destino: 2, texto: "Siguiente" }],
    [{ x: 450, y: 315, w: 180, h: 50, destino: 3, texto: "Siguiente" }],
    [{ x: 450, y: 315, w: 180, h: 50, destino: 4, texto: "Siguiente" }],
    [{ x: 450, y: 345, w: 180, h: 50, destino: 5, texto: "Jugar" }],
    [
      { x: 100, y: 400, w: 180, h: 60, destino: 6, texto: "Quedarse\njuntando flores" },
      { x: 360, y: 400, w: 180, h: 60, destino: 10, texto: "Ir hacia el bosque" }
    ],
    [{ x: 230, y: 400, w: 180, h: 50, destino: 7, texto: "Siguiente" }],
    [
      { x: 100, y: 400, w: 180, h: 50, destino: 8, texto: "Ir con Demeter" },
      { x: 360, y: 400, w: 180, h: 50, destino: 9, texto: "Ignorarla" }
    ],
    [{ x: 230, y: 400, w: 180, h: 50, destino: 0, texto: "Volver al inicio" }],
    [{ x: 230, y: 400, w: 180, h: 50, destino: 0, texto: "Volver al inicio" }],
    [{ x: 230, y: 400, w: 180, h: 50, destino: 11, texto: "Siguiente" }],
    [
      { x: 100, y: 400, w: 180, h: 50, destino: 12, texto: "Aceptar" },
      { x: 360, y: 400, w: 180, h: 50, destino: 8, texto: "Salir corriendo" }
    ],
    [{ x: 230, y: 400, w: 180, h: 50, destino: 0, texto: "Volver al inicio" }],
    [{ x: 230, y: 400, w: 180, h: 50, destino: 0, texto: "Volver al inicio" }] 
  ];
}

function dibujarBoton(x, y, w, h, texto) {
  let hover = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  fill(hover ? color(238, 210, 161) : color(220, 183, 127));
  noStroke();
  rect(x, y, w, h, 10);

  fill(255);
  textFont(mifuente || 'Arial');
  textSize(16);
  textAlign(CENTER, CENTER);

  let lineas = texto.split("\n");
  for (let i = 0; i < lineas.length; i++) {
    text(lineas[i], x + w / 2, y + h / 2 + (i - (lineas.length - 1) / 2) * 18);
  }
}

function dibujarBotones() {
  if (botones[pantallaActual]) {
    for (let b of botones[pantallaActual]) {
      dibujarBoton(b.x, b.y, b.w, b.h, b.texto);
    }
  }
}

function mousePressed() {
  
  userStartAudio();

  if (!musicaFondo.isPlaying()) {
    musicaFondo.loop();
    musicaFondo.setVolume(0.3);
  }

  
  if (botones[pantallaActual]) {
    for (let b of botones[pantallaActual]) {
      if (mouseX > b.x && mouseX < b.x + b.w && mouseY > b.y && mouseY < b.y + b.h) {
        pantallaActual = b.destino;
        break;
      }
    }
  }
}
 