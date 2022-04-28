let f = 0;
let frequencia = 0;
let w;
let theta = 0; 
let amplitude = 0;
let compOnda = 0; 
let dx;
let valoresY; 
let amplitudeSlider, compOndaSlider, frequenciaSlider;

function setup() {
  createCanvas(window.innerWidth, 0);
  w = width;
  dx = (TWO_PI / compOnda);
  valoresY = new Array(floor(w));
  

  amplitudeSlider = createSlider(0, 128, 64);
  amplitudeSlider.position(20, 20);
  compOndaSlider = createSlider(96, 1024, 576);
  compOndaSlider.position(20, 50);
  frequenciaSlider = createSlider(0, 5000, 1000);
  frequenciaSlider.position(20, 80);
  
  
}

function draw() {
  resizeCanvas(window.innerWidth-16, window.innerHeight-30);
  background(255);
  calcOnda();
  renderOnda();
  compOnda = compOndaSlider.value();
  amplitude = amplitudeSlider.value();
  frequencia = frequenciaSlider.value();

  f = (frequencia/10000);
  
  dx =-(TWO_PI / compOnda);
  valoresY = new Array(floor(w));
  text('Amplitude', amplitudeSlider.x * 2 + amplitudeSlider.width, 35);
  text('Comprimento de onda', compOndaSlider.x * 2 + compOndaSlider.width, 65);
  text('Frequência = '+frequencia/1000+'hz', frequenciaSlider.x * 2 + frequenciaSlider.width, 95);
  
}


function calcOnda() {
  theta += f;

  let x = theta;
  for (let i = 0; i < valoresY.length; i++) {
    valoresY[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderOnda() {
  noStroke();
  fill(0);
  for (let x = 0; x < valoresY.length; x++) {
    circle(x, height /2 + valoresY[x], 8);
  }
}
