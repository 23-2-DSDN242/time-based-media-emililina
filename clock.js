/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  let numbers = [];

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
 

 let globeDiam = 450;
 let hourMap = map(hours, 0,24, 0,360);
 let secAngle = map(seconds, 0, 59, 0, 360); // I want to figure out a way to make this move smoothly instead of jerking.

 console.log(hours);

      angleMode(DEGREES);
      background(35);
      translate(width/2, height/2);



      push();
      angleMode(DEGREES);
      rotate(hourMap);
      draw_globe(); 
            draw_hourMarkers(obj);
      pop();

      for(let i = 50; i < 110; i++){
        push();
        rotate(hourMap);
        noStroke();
              fill(215,215,220,1);
        ellipse(0, -globeDiam/4, i,i); //moonLight
        pop();  
      }


push();
rotate(hourMap);
fill(230, 240, 245);
noStroke();
ellipse(0,-globeDiam/4,50,50); //moon
pop();

      for(let i = 50; i < 110; i++){
        push();
        rotate(hourMap);
        noStroke();
              fill(240, 211, 149,6);
        ellipse(0, globeDiam/4, i,i); //sunRays
        pop();  
      }
push();
rotate(hourMap);
fill(255, 250, 219);
stroke(255);
ellipse(0,globeDiam/4,50,50); //sun
pop();

push();
draw_outerRing(obj);
pop();

push();
draw_minMarker(obj);
draw_minHand(obj);
pop();

push(); //NEEDS PUSHPOP
draw_secondHand(obj);
pop();

push();
  draw_metroBacker(obj);
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


//----------------------------------------------------------------------the function zone


function generateNumbers(){
  // rotate(-90);
  for(let i = 1; i <= 25; i++){
    numbers.push(i);
  }
  numbers.unshift(numbers.pop());
}

function draw_hourMarkers(obj){
  for (let i = 0; i <= 12; i++) {
push();

    let angle = map(i, 0, 12, 0, 180) - 90;
    let x = 180 * cos(angle);
    let y = 180 * sin(angle);

    stroke(255,255,255,20)
    strokeWeight(3);
    angleMode(DEGREES);
      rotate(-90);
    line(0,0,x, y);
  pop();
  }

  for (let i = 12; i <= 24; i++) {
    push();
    let angle = map(i, 12, 24, 180, 360) - 90;
    let x = 180 * cos(angle);
    let y = 180 * sin(angle);
    stroke(255,255,255,180)
    strokeWeight(3);
    angleMode(DEGREES);
      rotate(-90);
    line(0,0,x, y);
pop();
  }
}


function draw_globe (obj){
push();
ellipseMode(CENTER);
  noStroke();  
  fill(dayCol);
  ellipse(0,0,globeDiam,globeDiam)  //dayHalf
pop();

  fill(nightCol);
  angleMode(DEGREES);
  arc(0,0,globeDiam+2,globeDiam+2, 180,0 , OPEN); //nightHalf

push();
  // nightDawnDayWedge(obj);
  angleMode(DEGREES);
  let lerpLength = 90;
  // rotate(lerpLength);
  strokeWeight(4);

  for(let i = lerpLength*0; i <=  lerpLength*1; i++){ //dusk-dayLERP
    push();
   angleMode(DEGREES);
    let newI = map(i,0,lerpLength,0,25);
    let x = 180 * cos(newI);
    let y = 180 * sin(newI);
    let newLerp = map(newI, 0,25,0,1);
    let lerpTestA = lerpColor(duskCol,dayCol,newLerp);
    stroke(lerpTestA);
    line(0,0,x,y);
    pop();
  }

  for(let i = lerpLength*0; i <=  lerpLength*1; i++){ //night-duskLERP
    push();
   angleMode(DEGREES);
    let newI = map(i,0,lerpLength,0,25);
    let x = 180 * cos(newI);
    let y = 180 * sin(newI);
    let newLerp = map(newI, 0,25,0,1);
    let lerpTestA = lerpColor(nightCol,duskCol,newLerp);
    rotate(-25);
    stroke(lerpTestA);
    line(0,0,x,y);
  pop();
  }

  for(let i = lerpLength*0; i <=  lerpLength*1; i++){ //dusk-dayLERP
    push();
   angleMode(DEGREES);
    let newI = map(i,0,lerpLength,0,25);
    let x = 180 * cos(newI);
    let y = 180 * sin(newI);
    let newLerp = map(newI, 0,25,0,1);
    let lerpTestA = lerpColor(duskCol,dayCol,newLerp);
    stroke(lerpTestA);
    line(0,0,x,y);
    pop();
  }

  for(let i = lerpLength*0; i <=  lerpLength*1; i++){ //dawn-nightLERP
    push();
   angleMode(DEGREES);
   rotate(180);
    let newI = map(i,0,lerpLength,0,25);
    let x = 180 * cos(newI);
    let y = 180 * sin(newI);
    let newLerp = map(newI, 0,25,0,1);
    let lerpTestA = lerpColor(dawnCol,nightCol,newLerp);
    stroke(lerpTestA);
    line(0,0,x,y);
  pop();
  }

  for(let i = lerpLength*0; i <=  lerpLength*1; i++){ //day-dawnLERP
    push();
   angleMode(DEGREES);
   rotate(180);
    let newI = map(i,0,lerpLength,0,25);
    let x = 180 * cos(newI);
    let y = 180 * sin(newI);
    let newLerp = map(newI, 0,25,0,1);
    let lerpTestA = lerpColor(dayCol,dawnCol,newLerp);
    stroke(lerpTestA);
    rotate(-25);
    line(0,0,x,y);
    pop();
  }

  // for(let i = lerpLength*3; i <=  lerpLength*4; i++){ //day-dawnLERP    
  //   let newI = map(i,lerpLength*3,lerpLength*4,0,1);
  //   angleMode(DEGREES);
  //     let lerpTestB = lerpColor(dayCol,dawnCol,newI);
  //   rotate(newI);
  //   stroke(lerpTestB);
  //   line(0,0,0,-globeDiam/2);
  // }

  // for(let i = lerpLength*4; i <=  lerpLength*5; i++){ //day-dawnLERP    
  //   let newI = map(i,lerpLength*4,lerpLength*5,0,1);
  //   angleMode(DEGREES);
  //     let lerpTestC = lerpColor(dawnCol,nightCol,newI);
  //   rotate(newI);
  //   stroke(lerpTestC);
  //   line(0,0,0,-globeDiam/2);
  // }
  
  // rotate(lerpLength);

  // for(let i = lerpLength*5; i <=  lerpLength*6; i++){ //day-dawnLERP    
  //   let newI = map(i,lerpLength*5,lerpLength*6,0,1);
  //   angleMode(DEGREES);
  //     let lerpTestD = lerpColor(nightCol,duskCol,newI);
  //   rotate(newI);
  //   stroke(lerpTestD);
  //   line(0,0,0,-globeDiam/2);
  // }
pop();
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
push();
  strokeWeight(8);
  stroke(250);
  rotate(secAngle);
  line(0,-45,0,-55);
  strokeWeight(4);
  stroke(nightCol);
  line(0,-45,0,-55);
pop();
}


function draw_minMarker(obj){
push();
  for (let i = 0; i <= 60; i++) {

angleMode(DEGREES);
    let angle = map(i, 0, 60, 0, 360);
    let x = 180 * cos(angle);
    let y = 180 * sin(angle);

    stroke(93,95,113,150)
    strokeWeight(5);// rotate(6);
      point(x, y);
    }
  pop();
}


function draw_minHand(obj){
  push();
  let minAngle = map(minutes, 0, 60, 0, 360);
  rotate(minAngle);
  strokeWeight(2);
  stroke(215,215,220);
  fill(93,95,113);
  triangle(0,-180,10,-150,-10,-150); //minute pointer
  pop();
}

function draw_outerRing(obj){
  push();
    if(hours > 17 || hours < 7){  //NightMode Border
      push();
      noFill();
      stroke(35);
      strokeWeight(50);
      ellipse(0,0,globeDiam-25,globeDiam-25);
      pop();

      push();
      fill(dayCol);
      stroke(nightCol);
      strokeWeight(3);
        draw_hourNumber(obj);
      pop();
      }
else{  //DayMode Border
  push();
  noFill();
  stroke(255);
  strokeWeight(50);
  ellipse(0,0,globeDiam-25,globeDiam-25);
  pop();

  push();
  fill(nightCol);
  stroke(dayCol);
  strokeWeight(3);
  draw_hourNumber(obj);
  pop();
}
push();
  strokeWeight(5);
  stroke(216,226,220);
  noFill();
  ellipse(0,0,globeDiam-90,globeDiam-90);
  ellipse(0,0,globeDiam-70,globeDiam-70);

  
  strokeWeight(10);
  stroke(216,226,220);
  ellipse(0,0,globeDiam+15,globeDiam+15);
  pop();

push();
noFill();
stroke(216,226,220);
strokeWeight(25);
arc(0,0,globeDiam-30,globeDiam-30,-80,260,OPEN);
pop();

push();
rotate(11+180);
stroke(191,139,133);
stroke(223,197,194);
strokeWeight(20);
noFill();
point(0,(globeDiam/2)-15);
rotate(-22);
point(0,(globeDiam/2)-15);
pop();


}


function draw_hourNumber(obj){
push();

textSize(20);
textAlign(CENTER, CENTER);
textFont('Georgia');

if(hours>12){
  let pmHours = hours - 12; 
  text(pmHours,0,-210);
      } else if(hours == 0){
      let midnight = 12;
      text(midnight,0,-210);
          }else{
          text(hours,0,-210);
          }

pop();
}

}


