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

  let dayCol = color(200,220,255);
  let nightCol = color(20,40,85);
  let duskCol = color(196, 77, 111);
  let dawnCol = color(240, 188, 115);
  
  let dayNightInt = lerpColor(dayCol, nightCol, 0.33);
  let nightDayInt = lerpColor(dayCol, nightCol, 0.66);
 let font; 
 
  angleMode(DEGREES);
let globeDiam = 450;
 let hourMap = map(obj.hours, 0,23, 0,359);

 console.log(obj.hours);


  background(35);
      translate(width/2, height/2);
  push();

      rotate(hourMap);
      draw_globe(); 
  pop();


 let secAngle = map(obj.seconds, 0, 59, 0, 360); // I want to figure out a way to make this move smoothly instead of jerking.



  draw_metroBacker(obj);

push(); // metronome hand, expresses milliseconds -> seconds
rotate(secAngle-10);
let metroAngle = map(obj.millis, 0, 999, 360,380); //Metronome forward
let metroAngleBack = map(obj.millis, 0, 999, 380,360); //Metronome backward


        if(obj.seconds/2 %1){
        rotate(metroAngle);
        } else {
          rotate(metroAngleBack);
        }

      draw_metroHand();
pop();

push();
stroke(120);
draw_secondHand(obj);
pop();

push();
stroke(120);
draw_minHand(obj);
pop();

draw_outerRing(obj);


//----------------------------------------------------------------------the function zone
  
function preload() {
  // Creates a p5.Font object.
  font = loadFont('assets/Highwind.ttf');
}


function draw_globe (obj){

ellipseMode(CENTER);
  noStroke();  
  fill(dayCol);
  ellipse(0,0,globeDiam,globeDiam)  //dayHalf

  for(let i = 50; i < 110; i++){
    push();
    noStroke();
          fill(240, 211, 149,6);  
    ellipse(0, globeDiam/4, i,i);
    pop();  
  }
  fill(255, 250, 219);
  ellipse(0,globeDiam/4,50,50); //sun

  fill(nightCol);
  arc(0,0,globeDiam+2,globeDiam+2, 180,0 , OPEN); //nightHalf

push();
  // rotate(-90);
    fill(duskCol);
  arc(0,0,globeDiam+2,globeDiam+2, -15, 15, PIE); //dusk wedge, static
  fill(dawnCol);
  arc(0,0,globeDiam+2,globeDiam+2, -15+180, 15+180, PIE); //dawn wedge, static
  nightDawnDayWedge(obj);
  nightDuskDayWedge(obj);
pop();

  fill(230, 240, 245);
  ellipse(0,-globeDiam/4,50,50); //moon
}

function draw_metroHand(obj){
  push();
  stroke(255);
  strokeWeight(3);
  line(0,0, 0,-40);
  pop();
}

function draw_metroBacker(obj){
push();
    noStroke();
    fill(35);
    ellipse(0,0,105,105);
  pop();
}

function draw_secondHand(obj){

  // Draw hour markers. ChatGPT helped.
  strokeWeight(4);
  stroke(120);

  for (let i = 0; i < 24; i++) {
    let angle = map(i, 0, 24, 0, 360) - 90;
    let x = 160 * cos(angle);
    let y = 160 * sin(angle);
    point(x, y);
  }

  // let secAngle = map(obj.seconds, 0, 59, 0, 360); // I want to figure out a way to make this move smoothly instead of jerking.
  // console.log(secAngle);
  rotate(secAngle);
  strokeWeight(4);
  line(0,-45,0,-55);
}

function draw_minHand(obj){
  push();
  let minAngle = map(obj.minutes, 0, 59, 0, 360);
  // // console.log(secAngle);
  // translate(width/2,height/2);
  rotate(minAngle);
  strokeWeight(4);
  stroke(255);
  line(0,-150,0,-180);
  pop();
}

function nightDawnDayWedge(obj){
  angleMode(DEGREES);
  rotate(-75);
  strokeWeight(5);
  let lerpLength = 45;
  for(let i = 0; i <=  lerpLength; i++){
    let newI = map(i,0,lerpLength,0,1);
    rotate(newI);
    let lerpTestA = lerpColor(dawnCol,nightCol,newI);
    stroke(lerpTestA);
    line(0,0,0,-globeDiam/2);
  }
  rotate(-65);
  for(let i = 0; i <=  lerpLength; i++){
    let newI = map(i,0,lerpLength,0,1);
    rotate(newI);
    let lerpTestA = lerpColor(dayCol,dawnCol,newI);
    stroke(lerpTestA);
    line(0,0,0,-globeDiam/2);
  }

}

function nightDuskDayWedge(obj){
  angleMode(DEGREES);
  rotate(195);
  strokeWeight(5);
  let lerpLength = 45;
  for(let i = 0; i <  lerpLength; i++){
    let newI = map(i,0,lerpLength,0,1)
    rotate(newI);
    let lerpTestC = lerpColor(duskCol,dayCol,newI);
    stroke(lerpTestC);
    line(0,0,0,-globeDiam/2);
      }
      rotate(-65);
      for(let i = 0; i <  lerpLength; i++){
        let newI = map(i,0,lerpLength,0,1)
        rotate(newI);
        let lerpTestC = lerpColor(nightCol,duskCol,newI);
        stroke(lerpTestC);
        line(0,0,0,-globeDiam/2);
          }
}

function draw_outerRing(obj){
  push();
  noFill();
  strokeWeight(6);
  stroke(200);
  ellipse(0,0,globeDiam,globeDiam);
  pop();
}



}

