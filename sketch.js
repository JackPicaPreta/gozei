//variaveis da minha bola

let bolax = (400)
let bolay = (300)
let cor
let sonic = (10)
let sonic2 = (10)
let D = (30)
let R = D/2
//a lingua do java inscripte: se = (if), ou (||), se nao (else).

//variaveis da minha pica
let raquetex = 10
let raquetey = 250
let rc = 10
let ra =120

//variaveis da minha pica2
let raquetex2 = 780;
let raquetey2 = 250;
let velocidadedaraquete2 

//placar
let meuspontos = 0
let pontosdooponente=0

//sons
let raquetada;
let trilha;
let ponto;
let ponto2;
let fatality;
let fatality2;


let colidiu = false

function preload() {
  raquetada = loadSound("raquetada.mp3");
  trilha = loadSound("LET'GAY 4 (128).mp3");
  ponto = loadSound("Ui - Efeito Sonoro (320).mp3");
  ponto2 = loadSound("Tome - Efeito Sonoro (320).mp3");
  fatality = loadSound("Para, tira que eu vou cagar (áudio) (320).mp3");
  fatality2 = loadSound("ah droga ah droga, p baixar audio (320).mp3");
}


function setup() {
  createCanvas(800, 600);
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  trilha.loop();

}

function draw() {
  background("black")
  rasgaCú(raquetex, raquetey)
  rasgaCú(raquetex2, raquetey2)
  bolaLisa()
  mexebola()
  movimentaMinhaPica()
  movimentaMinhaPica2()
  //naoPegaNaMinhaRola()
  porqueChupasMeuPinto(raquetex, raquetey)
  porqueChupasMeuPinto(raquetex2, raquetey2)
  placar()
  pontosdoplacar()
 
 
  
}

function bolaLisa() {
  
  circle(bolax, bolay, D)
   fill(cor)
 }
 function mexebola() {
     bolax += sonic;
  bolay += sonic2;
  
  
  if(bolax +R > width  || bolax -R < 0 ) {
    sonic *= -1;
  }
  if (bolay + R> height  || bolay - R < 0  ) {
    sonic2 *= -1;
  }
 } 

function rasgaCú(x, y) {
    rect(x, y, rc, ra);
    
  }

function movimentaMinhaPica() {
  if(keyIsDown(UP_ARROW)) {
    raquetey -= 10
  } 
  if(keyIsDown(DOWN_ARROW)) {
    raquetey += 10
  } 
  
}
function movimentaMinhaPica2() {
  if(keyIsDown("87")) {
    raquetey2 -= 10
  } 
  if(keyIsDown("83")) {
    raquetey2 += 10
  } 
}
function naoPegaNaMinhaRola() {
  if(bolax - R < raquetex +  rc && bolay - R < raquetey + ra && bolay + R > raquetey - ra) {
    sonic *= -1
  }

}
function porqueChupasMeuPinto(x, y) {
  colidiu=
  collideRectCircle(x, y, rc, ra, bolax, bolay, R);
  if(colidiu) {
    sonic *= -1
    raquetada.play();
  }
}
function placar(){
  textSize(30)
  textFont("Courier New")
  fill("blue")
  stroke("red")
  rect(335, 70, 50, 50)
  fill("white")
  stroke("white")
  text(meuspontos, 350,100)
  fill("blue")
  stroke("red")
  rect(435, 70, 50, 50)
  fill("white")
  stroke("white")
  text(pontosdooponente, 450,100)
  
}
function pontosdoplacar() {
  if(bolax > 785) {
    meuspontos += 1
    ponto.play();
    textSize(100);
    textFont("Courier New")
    fill("red")
    text("GOZEI",300, 300)
  }
  if(bolax < 15) {
    pontosdooponente += 1
    ponto2.play();
    textSize(100);
    textFont("Courier New")
    fill("red")
    text("",300, 300)
  }
  if(pontosdooponente > 9){
    pontosdooponente = 0
    meuspontos = 0
    fatality2.play()
  }
  if(meuspontos > 9){
    pontosdooponente = 0
    meuspontos = 0
    fatality.play()
  }

}