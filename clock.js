/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  let numbers = [];
  // let newFont;
  // preload();
  generateNumbers();
  // generateNumbers(numbers)
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  let dayCol = color(200,220,255);
  let nightCol = color(20,40,85);
  let duskCol = color(197,113,147);
     let duskColOLD = color(196, 77, 111);
  let dawnCol = color(230,196,150);
     let dawnColOLD = color(240, 188, 115);
 
  angleMode(DEGREES);
let globeDiam = 450;
 let hourMap = map(hours, 1,23, 0,360);

 console.log(hours);


  background(35);
      translate(width/2, height/2);
  push();

      rotate(hourMap);
      draw_globe(); 

  pop();


 let secAngle = map(seconds, 0, 59, 0, 360); // I want to figure out a way to make this move smoothly instead of jerking.





draw_outerRing(obj);


push();
draw_minHand(obj);
pop();

draw_clockNumbers(obj);

  draw_metroBacker(obj);

  push();
draw_secondHand(obj);
pop();

push(); // metronome hand, expresses milliseconds -> seconds

rotate(secAngle-10);

let metroAngle = map(millis, 0, 999, 360,380); //Metronome forward
let metroAngleBack = map(millis, 0, 999, 380,360); //Metronome backward

        if(seconds/2 %1){
        rotate(metroAngle);
        } else {
          rotate(metroAngleBack);
        }

      draw_metroHand();
pop();

push();

noFill();
stroke(216,226,220);
strokeWeight(25);
arc(0,0,globeDiam-30,globeDiam-30,-80,260,OPEN);

pop();
//----------------------------------------------------------------------the function zone


function generateNumbers(){
  // rotate(-90);
  for(let i = 1; i <= 25; i++){
    numbers.push(i);
  }
  numbers.unshift(numbers.pop());
}


function draw_clockNumbers(obj){ //some chatGPT help here. Trig is hard
  // let globeRadius = (globeDiam/3);
  let angleIncrement = 360 / ( numbers.length-1);
// translate(-5,8);
textAlign(CENTER, CENTER);
textStyle(BOLD);
  for(let i = 0; i < numbers.length-1; i++){
    push();
    angleMode(DEGREES);
    let angle = i * angleIncrement;
    let x = 210 * cos(angle);
    let y = 210 * sin(angle);


    // rotate((hourMap * y)-90);
    // preload();
    fill(20,40,85);
    textSize(20);
    textFont('Georgia');
    text(hours, x, y);
  pop();
  }



          
  for (let i = 1; i <= 24; i++) {
    let angle = map(i, 0, 24, 0, 360) - 90;
    let x = 225 * cos(angle);
    let y = 225 * sin(angle);
    stroke(255,255,255,20)
    strokeWeight(3);
      rotate(-90);
    line(0,0,x, y);
  }
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
  arc(0,0,globeDiam+2,globeDiam+2, -13, 8, PIE); //dusk wedge, static
  fill(dawnCol);
  arc(0,0,globeDiam+2,globeDiam+2, -8+180, 13+180, PIE); //dawn wedge, static
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
  strokeWeight(8);
  point(0,0,);
  pop();
}

function draw_metroBacker(obj){
push();
  stroke(41,50,65)
  strokeWeight(4);
    fill(61,90,128);
    ellipse(0,0,105,105);

  noStroke();
    fill(41,50,65);
    ellipse(0,0,80,80);
pop();
}

function draw_secondHand(obj){

  // Draw hour markers. ChatGPT helped.
  strokeWeight(4);
  stroke(250);


  // let secAngle = map(obj.seconds, 0, 59, 0, 360); // I want to figure out a way to make this move smoothly instead of jerking.
  // console.log(secAngle);
  rotate(secAngle);
  strokeWeight(4);
  line(0,-45,0,-55);
}





function draw_minHand(obj){
  push();
  let minAngle = map(minutes, 0, 59, 0, 360);
  rotate(minAngle);
  strokeWeight(2);
  stroke(255);
  triangle(0,-180,10,-150,-10,-150); //minute pointer
  pop();
  for (let i = 1; i <= 59; i++) {
    let angle = map(i, 0, 59, 0, 360) - 90;
    let x = 225 * cos(angle);
    let y = 225 * sin(angle);
    stroke(255,255,255,20)
    strokeWeight(3);
      rotate(-90);
    point(x, y);
  }
}


function nightDawnDayWedge(obj){
  angleMode(DEGREES);
  rotate(-78);
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

  stroke(250);
  strokeWeight(50);
  ellipse(0,0,globeDiam-25,globeDiam-25);

  strokeWeight(5);
  stroke(216,226,220);
  ellipse(0,0,globeDiam-90,globeDiam-90);
  ellipse(0,0,globeDiam-70,globeDiam-70);

  
  strokeWeight(10);
  stroke(216,226,220);
  ellipse(0,0,globeDiam+15,globeDiam+15);
  pop();
}



}

