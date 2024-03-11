// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {

  background(0); //  black


draw_dormant(); //BASE LAYOUT FOR NUMBERS


function draw_dormant(){ //BASE LAYOUT FOR NUMBERS

  let numGapX = 36; //X difference between two values in same two-digit number
let numUnitY = 48;
let resetCol = -432;
let resetRow = 66


push();  //FORMAT: dormant. semi-opaque.
  fill(80);
  noStroke();

  //COLUMN ONE 00-10
  translate(0, 0);
  draw_m0();  //00a
  translate(36, 0);
  draw_m0(); //00b

  translate(-numGapX,numUnitY);
  draw_m0(); //01a
  translate(numGapX, 0);
  draw_m1(); //01b

  translate(-numGapX,numUnitY);
  draw_m0(); //02a
  translate(numGapX, 0);
  draw_m2(); //02b

  translate(-numGapX,numUnitY);
  draw_m0(); //03a
  translate(numGapX, 0);
  draw_m3(); //03b

  translate(-numGapX,numUnitY);
  draw_m0(); //04a
  translate(numGapX, 0);
  draw_m4(); //04b

  translate(-numGapX,numUnitY);
  draw_m0(); //05a
  translate(numGapX, 0);
  draw_m5(); //05b

  translate(-numGapX,numUnitY);
  draw_m0(); //06a
  translate(numGapX, 0);
  draw_m6(); //06b

  translate(-numGapX,numUnitY);
  draw_m0(); //07a
  translate(numGapX, 0);
  draw_m7(); //07b

  translate(-numGapX,numUnitY);
  draw_m0(); //08a
  translate(numGapX, 0);
  draw_m8(); //08b

  translate(-numGapX,numUnitY);
  draw_m0(); //09a
  translate(numGapX, 0);
  draw_m9(); //09b


  //COLUMN TWO 10-20
  translate(resetRow, resetCol);
  draw_m1();  //10a
  translate(36, 0);
  draw_m0(); //10b

  translate(-numGapX,numUnitY);
  draw_m1(); //11a
  translate(numGapX, 0);
  draw_m1(); //11b

  translate(-numGapX,numUnitY);
  draw_m1(); //12a
  translate(numGapX, 0);
  draw_m2(); //12b

  translate(-numGapX,numUnitY);
  draw_m1(); //13a
  translate(numGapX, 0);
  draw_m3(); //13b

  translate(-numGapX,numUnitY);
  draw_m1(); //14a
  translate(numGapX, 0);
  draw_m4(); //14b

  translate(-numGapX,numUnitY);
  draw_m1(); //15a
  translate(numGapX, 0);
  draw_m5(); //15b

  translate(-numGapX,numUnitY);
  draw_m1(); //16a
  translate(numGapX, 0);
  draw_m6(); //16b

  translate(-numGapX,numUnitY);
  draw_m1(); //17a
  translate(numGapX, 0);
  draw_m7(); //7b

  translate(-numGapX,numUnitY);
  draw_m1(); //18a
  translate(numGapX, 0);
  draw_m8(); //18b

  translate(-numGapX,numUnitY);
  draw_m1(); //19a
  translate(numGapX, 0);
  draw_m9(); //19b

  //COLUMN THREE : 20-19
  translate(resetRow, resetCol);
  draw_m2();  //20a
  translate(36, 0);
  draw_m0(); //20b

  translate(-numGapX,numUnitY);
  draw_m2(); //21a
  translate(numGapX, 0);
  draw_m1(); //21b

  translate(-numGapX,numUnitY);
  draw_m2(); //22a
  translate(numGapX, 0);
  draw_m2(); //22b

  translate(-numGapX,numUnitY);
  draw_m2(); //23a
  translate(numGapX, 0);
  draw_m3(); //23b

  translate(-numGapX,numUnitY);
  draw_m2(); //24a
  translate(numGapX, 0);
  draw_m4(); //24b

  translate(-numGapX,numUnitY);
  draw_m2(); //25a
  translate(numGapX, 0);
  draw_m5(); //25b

  translate(-numGapX,numUnitY);
  draw_m2(); //26a
  translate(numGapX, 0);
  draw_m6(); //26b

  translate(-numGapX,numUnitY);
  draw_m2(); //27a
  translate(numGapX, 0);
  draw_m7(); //2b

  translate(-numGapX,numUnitY);
  draw_m2(); //28a
  translate(numGapX, 0);
  draw_m8(); //28b

  translate(-numGapX,numUnitY);
  draw_m2(); //29a
  translate(numGapX, 0);
  draw_m9(); //29b

    //COLUMN FOUR : 30-39
    translate(resetRow, resetCol);
    draw_m3(); //30a
    translate(36, 0);
    draw_m0(); //0b
  
    translate(-numGapX,numUnitY);
    draw_m3(); //31a
    translate(numGapX, 0);
    draw_m1(); //31b
  
    translate(-numGapX,numUnitY);
    draw_m3(); //32a
    translate(numGapX, 0);
    draw_m2(); //32b
  
    translate(-numGapX,numUnitY);
    draw_m3(); //33a
    translate(numGapX, 0);
    draw_m3(); //33b
  
    translate(-numGapX,numUnitY);
    draw_m3(); //34a
    translate(numGapX, 0);
    draw_m4(); //34b
  
    translate(-numGapX,numUnitY);
    draw_m3(); //35a
    translate(numGapX, 0);
    draw_m5(); //35b
  
    translate(-numGapX,numUnitY);
    draw_m3(); //36a
    translate(numGapX, 0);
    draw_m6(); //36b
  
    translate(-numGapX,numUnitY);
    draw_m3(); //37a
    translate(numGapX, 0);
    draw_m7(); //3b
  
    translate(-numGapX,numUnitY);
    draw_m3(); //38a
    translate(numGapX, 0);
    draw_m8(); //38b
  
    translate(-numGapX,numUnitY);
    draw_m3(); //39a
    translate(numGapX, 0);
    draw_m9(); //39b

    //COLUMN FIVE : 40-49
    translate(resetRow, resetCol);
    draw_m4(); //40a
    translate(36, 0);
    draw_m0(); //40b
  
    translate(-numGapX,numUnitY);
    draw_m4(); //41a
    translate(numGapX, 0);
    draw_m1(); //41b
  
    translate(-numGapX,numUnitY);
    draw_m4(); //42a
    translate(numGapX, 0);
    draw_m2(); //42b
  
    translate(-numGapX,numUnitY);
    draw_m4(); //43a
    translate(numGapX, 0);
    draw_m3(); //43b
  
    translate(-numGapX,numUnitY);
    draw_m4(); //44a
    translate(numGapX, 0);
    draw_m4(); //44b
  
    translate(-numGapX,numUnitY);
    draw_m4(); //45a
    translate(numGapX, 0);
    draw_m5(); //45b
  
    translate(-numGapX,numUnitY);
    draw_m4(); //46a
    translate(numGapX, 0);
    draw_m6(); //46b
  
    translate(-numGapX,numUnitY);
    draw_m4(); //47a
    translate(numGapX, 0);
    draw_m7(); //47b
  
    translate(-numGapX,numUnitY);
    draw_m4(); //48a
    translate(numGapX, 0);
    draw_m8(); //48b
  
    translate(-numGapX,numUnitY);
    draw_m4(); //49a
    translate(numGapX, 0);
    draw_m9(); //49b

    //COLUMN SIX : 50-59
    translate(resetRow, resetCol);
    draw_m5();  //50a
    translate(36, 0);
    draw_m0(); //50b
  
    translate(-numGapX,numUnitY);
    draw_m5(); //51a
    translate(numGapX, 0);
    draw_m1(); //51b
  
    translate(-numGapX,numUnitY);
    draw_m5(); //52a
    translate(numGapX, 0);
    draw_m2(); //52b
  
    translate(-numGapX,numUnitY);
    draw_m5(); //53a
    translate(numGapX, 0);
    draw_m3(); //53b
  
    translate(-numGapX,numUnitY);
    draw_m5(); //54a
    translate(numGapX, 0);
    draw_m4(); //54b
  
    translate(-numGapX,numUnitY);
    draw_m5(); //55a
    translate(numGapX, 0);
    draw_m5(); //55b
  
    translate(-numGapX,numUnitY);
    draw_m5(); //56a
    translate(numGapX, 0);
    draw_m6(); //56b
  
    translate(-numGapX,numUnitY);
    draw_m5(); //57a
    translate(numGapX, 0);
    draw_m7(); //5b
  
    translate(-numGapX,numUnitY);
    draw_m5(); //58a
    translate(numGapX, 0);
    draw_m8(); //58b
  
    translate(-numGapX,numUnitY);
    draw_m5(); //59a
    translate(numGapX, 0);
    draw_m9(); //59b
pop();
}

// function draw_activeS(){
  // push();
  translate(36,48);
  draw_m1();
  // scale(2);
  fill(255,0,0); //FILL/STROKE NOT ADHERING when pushpop active QUESTION : I DON'T REALLY UNDERSTAND PUSHPOP
  noStroke();
  // pop();

// function draw_activeM(){
  // push();
  translate(0,48);
  draw_m2();
  noFill();
  strokeWeight(3);
  stroke(255);
  // pop();

  // function draw_activeH(){
  // push();
  translate(0,48);
  draw_m3();
  fill(255);
  noStroke();
  // pop();
  


function draw_activeH(){
   push();
   fill(255);
   noStroke();
   pop();
}

function draw_activeM(){
  push();
  noFill();
  strokeWeight(3);
  stroke(255);
  pop();
}

function draw_m0(obj){ // QUESTION: does obj need to go in these brackets? The code works with or without as it is now.
  
  rect(6,0, 18, 6); //0, top
  rect(0, 6, 6, 30); //0, left
  rect(24, 6, 6, 30); //0, right
  rect(6, 36, 18, 6); //0, btm
}
function draw_m1(){
  rect(18,6,6,6); //handle
  rect(24,0,6,42); //stem
}
function draw_m2(){
  rect(0,6,6,6); //end
  rect(6,0,18,6); //
  rect(24,6,6,12); //
  rect(18,18,6,6); //
  rect(12,24,6,6); //
  rect(6,30,6,6); //
  rect(0,36,30,6); //end
}
function draw_m3(){
  rect(0,6,6,6);
  rect(6,0,18,6);
  rect(24,6,6,18);
  rect(12,18,12,6);
  rect(24,24,6,12);
  rect(0,30,6,6);
  rect(6,36,18,6);
}
function draw_m4(){
  rect(18,0,6,42);
  rect(12,6,6,6);
  rect(6,12,6,6);
  rect(0,18,6,6);
  rect(0,24,30,6);
}
function draw_m5(){
  rect(0,0,30,6);
  rect(0,6,6,6);
  rect(0,12,24,6);
  rect(24,18,6,18);
  rect(0,30,6,6);
  rect(6,36,18,6); 
}
function draw_m6(){
  rect(6,0,18,6);
  rect(0,6,6,30);
  rect(6,12,18,6);
  rect(24,18,6,18);
  rect(6,36,18,6);
}
function draw_m7(){
  rect(0,0,30,6);
  rect(24,6,6,12);
  rect(18,18,6,6);
  rect(12,24,6,18);
}
function draw_m8(){
  rect(6,0,18,6);
  rect(0,6,6,12);
  rect(24,6,6,12);
  rect(6,18,18,6);
  rect(0,24,6,12);
  rect(24,24,6,12);
  rect(6,36,18,6);
}
function draw_m9(){
  rect(6,0,18,6);
  rect(0,6,6,18);
  rect(24,6,6,30);
  rect(6,24,18,6);
  rect(6,36,18,6);
}
function hourAppearance(){
push();

fill(80);
noStroke();

pop();
}
}
