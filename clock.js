/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

 let font; 
  angleMode(DEGREES);
let globeDiam = 450;
 let hourMap = map(obj.hours, 0,23, 0,359);

 console.log(obj.hours);


  background(35);

  push();
      translate(width/2, height/2);
      rotate(hourMap);
      draw_globe(); 
  pop();


  draw_metroBacker(obj);

push(); // metronome hand, expresses milliseconds -> seconds
      translate(width/2, height/2);

let metroAngle = map(obj.millis, 0, 999, 330,390); //Metronome forward
let metroAngleBack = map(obj.millis, 0, 999, 390,330); //Metronome backward

        if(obj.seconds/2 %1){
        rotate(metroAngle);
        } else {
          rotate(metroAngleBack);
        }

      draw_metroHand();
pop();

push();
translate(width/2,height/2);
draw_secondHand(obj);
pop();

push();
draw_minHand(obj);
pop();
let dayBlue = color(200,220,255);
let nightBlue = color(20,40,85);

let dayNightInt = lerpColor(dayBlue, nightBlue, 0.33);
let nightDayInt = lerpColor(dayBlue, nightBlue, 0.66);


//lerpColor test
fill(nightBlue);
rect(20,0,20,20);
fill(nightDayInt);
rect(20,20,20,20);
fill(dayNightInt);
rect(20,40,20,20);
fill(dayBlue);
rect(20,60,20,20);

// preload();

push();

  fill(255);
  textFont(loadFont('assets/Highwind.ttf'));
  textSize(36);
  text('TESTING', 10, 500);
pop();


//----------------------------------------------------------------------the function zone
  
function preload() {
  // Creates a p5.Font object.
  font = loadFont('assets/Highwind.ttf');
}


function draw_globe (obj){

  let dayBlue = color(200,220,255);
  let nightBlue = color(20,40,85);
  let nightBluelalph = color(20,40,85,50);

ellipseMode(CENTER);
  noStroke();
  
  fill(dayBlue);
  ellipse(0,0,globeDiam,globeDiam)  //dayHalf
  fill(240, 211, 149);
  ellipse(0,globeDiam/4,50,50); //sun

  for(let i = 50; i < 100; i++){
    push();
    noStroke();
          fill(240, 211, 149,6);  

    ellipse(0, globeDiam/4, i,i);
    pop();  
  }


  fill(nightBlue);
  // arc(0,0,globeDiam+2,globeDiam+2, 180,0 , OPEN); //nightHalf
push();
  fill(nightBluelalph);
  rotate(-112.5);
  // arc(0,0,globeDiam+2,globeDiam+2, nightWedgeS, nightWedgeE , PIE); //nightHalf lowAlpha

  for(let i = 0; i < 205; i++){
    

  
    let nightWedgeS = 0-(2*i)/5;
    let nightWedgeE = 45+(2*i)/5;
    
    fill(20,40,85,10);
    noStroke();
    
    arc(0,0,globeDiam+2,globeDiam+2, nightWedgeS, nightWedgeE , PIE); //nightHalf lowAlpha
      
    }



pop();
  fill(230, 240, 245);
  ellipse(0,-globeDiam/4,50,50); //moon


}

function draw_metroHand(obj){
  push();
  stroke(255);
  strokeWeight(3);
  line(0,0, 0,-50);
  pop();
}

function draw_metroBacker(obj){
push();
    noStroke();
    fill(62, 139, 140);
    ellipse(width/2,height/2,105,105);
  pop();
}

function draw_secondHand(obj){

  // Draw hour markers. ChatGPT helped.
  strokeWeight(4);

  for (let i = 0; i < 12; i++) {
    let angle = map(i, 0, 12, 0, 360) - 90;
    let x = 160 * cos(angle);
    let y = 160 * sin(angle);
    point(x, y);
  }

  let secAngle = map(obj.seconds, 0, 59, 0, 360); // I want to figure out a way to make this move smoothly instead of jerking.
  // console.log(secAngle);
  rotate(secAngle);
  strokeWeight(4);
  line(0,-45,0,-55);
}

function draw_minHand(obj){
  push();
  let minAngle = map(obj.minutes, 0, 59, 0, 360);
  // console.log(secAngle);
  translate(width/2,height/2);
  rotate(minAngle);
  strokeWeight(4);
  stroke(255);
  line(0,-150,0,-180);
  pop();
}

}


/* OLD BUCKET FOUNTAIN CODE


background(181,226,250); //  SKY BLUE
  fill(255); // WHITE (TEXT)
  textSize(40);

  push(); 
    stroke(46,51,64,255/2);
    strokeWeight(15);

      line(300,110,300,500); //middle pole, far
      line(300,110,300,190); //middle pole, mid
      line(300,110,300,160); //middle pole, close

  pop();


  push();
    stroke(46,51,64); 
    strokeWeight(15);
    angleMode(DEGREES);
    noFill();

      line(320,110,320,150);  //RIGHT POLE START
        arc(350,150,60,60,90,180,HALF_PI);
      line(350,180,405,180);
        arc(405,193,25,25,270,0,HALF_PI);
      line(418,194,418,500); //RIGHT POLE END

      line(280,110,280,150);  //LEFT POLE START
        arc(250,150,60,60,0,90,HALF_PI);
      line(250,180,190,180);
        arc(190,193,25,25,180,270,HALF_PI);
      line(177,194,177,500);  //LEFT POLE END
  pop();

  push();
    fill(251,29,54);
    noStroke();
      ellipse(300,20,180,180); //ball thing on top
  pop();

  //-------------it's seagull time
  push();
    noFill();
      stroke(247,160,114);
      strokeWeight(6);
      strokeCap(ROUND);
      strokeJoin(ROUND);
      beginShape(); //LEFT LED START
        vertex(377,146);
        vertex(377,177);
        vertex(372,177);
      endShape(); //LEFT LEG END

      beginShape(); //RIGHT LEG START
        vertex(398,146);
        vertex(398,177);
        vertex(405,177);
      endShape(); //RIGHT LEG END
  pop();

  push(); //
    fill(449,247,243) // OFF-WHITE
    noStroke();
      beginShape();  //SEAGULL NECK START
          vertex(388,92);
          vertex(410,100);
          vertex(407,115);
          vertex(391,135);
          vertex(373,117);
      endShape(CLOSE); //SEAGULL NECK END 
      ellipse(391,135,50,50); //SEAGULL BODY
      ellipse(398,99,25,25);  //SEAGULL HEAD
  pop();

  push();
    fill(46,51,64);
    noStroke();
      ellipse(401,97,8,8) // SEAGULL EYE
  pop();

  push();
    fill(247,160,114); //PEACHY ORANGE
    stroke(247,160,114);
    strokeWeight(2);
    strokeCap(ROUND);
    strokeJoin(ROUND);
      triangle(410,95,428,95,410,99); //SEAGULL BEAK
  pop();

  push();
  fill(119,135,139); // MIDGRAY
  noStroke();
  strokeJoin(ROUND);
  angleMode(DEGREES);
  arc(391,135,50,50,308,50,OPEN); //RIGHT WING
  arc(391,135,50,50,140,227,OPEN); //RIGHT WING
  pop();
  */