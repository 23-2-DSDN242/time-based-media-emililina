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

  let dayCol = color(200, 220, 255);
  let nightCol = color(20, 40, 85);
  let duskCol = color(197, 113, 147);
  let dawnCol = color(230, 196, 150);
  
  let accCol = color(113, 138, 157);

  let globeDiam = 450;
  let globeRad = globeDiam / 2;
  let hourMap = map(hours, 0, 24, 0, 360);
  let secAngle = map(seconds, 0, 59, 0, 360); // I want to figure out a way to make this move smoothly instead of jerking.

  //  console.log(hours);

  angleMode(DEGREES);
  if (hours > 17 || hours < 7){
  background(35);
} else {
  background(255);
}
  translate(width / 2, height / 2);

  push();
  angleMode(DEGREES);
  rotate(hourMap);
  draw_globe();
  draw_hourMarkers(obj);
  pop();

  for (let i = 50; i < 110; i++) {
    push();
    rotate(hourMap);
    noStroke();
    fill(215, 215, 220, 1);
    ellipse(0, -globeDiam / 4, i, i); //moonLight
    pop();
  }


  push();
  rotate(hourMap);
  fill(230, 240, 245);
  noStroke();
  ellipse(0, -globeDiam / 4, 50, 50); //moon
  pop();

  for (let i = 50; i < 110; i++) {
    push();
    rotate(hourMap);
    noStroke();
    fill(240, 211, 149, 6);
    ellipse(0, globeDiam / 4, i, i); //sunRays
    pop();
  }
  push();
  rotate(hourMap);
  fill(255, 250, 219);
  stroke(255);
  ellipse(0, globeDiam / 4, 50, 50); //sun
  pop();

  push();
  draw_alarmBall(obj);
  pop();

  push();
  draw_outerRing(obj);
  pop();

  push();
  draw_minHand(obj);
  draw_minMarker(obj);
  pop();

  push(); //NEEDS PUSHPOP
  draw_secondHand(obj);
  pop();

  push();
  draw_metroBacker(obj);
  pop();



  push(); // metronome hand, expresses milliseconds -> seconds
  rotate(secAngle - 10);

  let metroAngle = map(millis, 0, 999, 360, 380); //Metronome forward
  let metroAngleBack = map(millis, 0, 999, 380, 360); //Metronome backward

  if (seconds / 2 % 1) {
    rotate(metroAngle);
  } else {
    rotate(metroAngleBack);
  }

  draw_metroHand();
  pop();


  //----------------------------------------------------------------------the function zone


  function generateNumbers() {
    // rotate(-90);
    for (let i = 1; i <= 25; i++) {
      numbers.push(i);
    }
    numbers.unshift(numbers.pop());
  }

  function draw_hourMarkers(obj) {
    for (let i = 0; i <= 12; i++) {
      push();

      let angle = map(i, 0, 12, 0, 180) - 90;
      let x = 180 * cos(angle);
      let y = 180 * sin(angle);

      stroke(255, 255, 255, 20)
      strokeWeight(3);
      angleMode(DEGREES);
      rotate(-90);
      line(0, 0, x, y);
      pop();
    }

    for (let i = 12; i <= 24; i++) {
      push();
      let angle = map(i, 12, 24, 180, 360) - 90;
      let x = 180 * cos(angle);
      let y = 180 * sin(angle);
      stroke(255, 255, 255, 180)
      strokeWeight(3);
      angleMode(DEGREES);
      rotate(-90);
      line(0, 0, x, y);
      pop();
    }
  }


  function draw_globe(obj) {

    ellipseMode(CENTER);
    noStroke();
    fill(dayCol);
    ellipse(0, 0, globeDiam, globeDiam)  //dayHalf


    fill(nightCol);
    angleMode(DEGREES);
    arc(0, 0, globeDiam + 2, globeDiam + 2, 180, 0, OPEN); //nightHalf

    // nightDawnDayWedge(obj);
    angleMode(DEGREES);
    let lerpLength = 90;
    strokeWeight(4);

    for (let i = lerpLength * 0; i <= lerpLength * 1; i++) { //dusk-dayLERP
      push();
      angleMode(DEGREES);
      let newI = map(i, 0, lerpLength, 0, 25);
      let x = globeRad * cos(newI);
      let y = globeRad * sin(newI);
      let newLerp = map(newI, 0, 25, 0, 1);
      let lerpTestA = lerpColor(duskCol, dayCol, newLerp);
      stroke(lerpTestA);
      line(0, 0, x, y);
      pop();
    }

    for (let i = lerpLength * 0; i <= lerpLength * 1; i++) { //night-duskLERP
      push();
      angleMode(DEGREES);
      let newI = map(i, 0, lerpLength, 0, 25);
      let x = globeRad * cos(newI);
      let y = globeRad * sin(newI);
      let newLerp = map(newI, 0, 25, 0, 1);
      let lerpTestA = lerpColor(nightCol, duskCol, newLerp);
      rotate(-25);
      stroke(lerpTestA);
      line(0, 0, x, y);
      pop();
    }

    for (let i = lerpLength * 0; i <= lerpLength * 1; i++) { //dusk-dayLERP
      push();
      angleMode(DEGREES);
      let newI = map(i, 0, lerpLength, 0, 25);
      let x = globeRad * cos(newI);
      let y = globeRad * sin(newI);
      let newLerp = map(newI, 0, 25, 0, 1);
      let lerpTestA = lerpColor(duskCol, dayCol, newLerp);
      stroke(lerpTestA);
      line(0, 0, x, y);
      pop();
    }

    for (let i = lerpLength * 0; i <= lerpLength * 1; i++) { //dawn-nightLERP
      push();
      angleMode(DEGREES);
      rotate(180);
      let newI = map(i, 0, lerpLength, 0, 25);
      let x = globeRad * cos(newI);
      let y = globeRad * sin(newI);
      let newLerp = map(newI, 0, 25, 0, 1);
      let lerpTestA = lerpColor(dawnCol, nightCol, newLerp);
      stroke(lerpTestA);
      line(0, 0, x, y);
      pop();
    }

    for (let i = lerpLength * 0; i <= lerpLength * 1; i++) { //day-dawnLERP
      push();
      angleMode(DEGREES);
      rotate(180);
      let newI = map(i, 0, lerpLength, 0, 25);
      let x = globeRad * cos(newI);
      let y = globeRad * sin(newI);
      let newLerp = map(newI, 0, 25, 0, 1);
      let lerpTestA = lerpColor(dayCol, dawnCol, newLerp);
      stroke(lerpTestA);
      rotate(-25);
      line(0, 0, x, y);
      pop();
    }
  }

  function draw_metroHand(obj) {
    push();
    stroke(255);
    strokeWeight(5);
    line(0, 0, 0, -40);
    strokeWeight(8);
    point(0,0);
    stroke(nightCol);
    strokeWeight(4);
    point(0,0);
    strokeWeight(3);
    point(0,-40);
    pop();
  }

  function draw_metroBacker(obj) {
    push();
    stroke(41, 50, 65)
    strokeWeight(4);
    fill(accCol);
    ellipse(0, 0, 105, 105);
    strokeWeight(2);
    fill(61, 90, 128);
    ellipse(0, 0, 80, 80);
    pop();
  }

  function draw_secondHand(obj) {
    push();
    strokeWeight(8);
    stroke(250);
    rotate(secAngle);
    line(0, -45, 0, -55);
    strokeWeight(4);
    stroke(nightCol);
    line(0, -45, 0, -55);
    pop();
  }


  function draw_minMarker(obj) {
    push();
    for (let i = 0; i <= 60; i++) {

      angleMode(DEGREES);
      let angle = map(i, 0, 60, 0, 360);
      let x = 180 * cos(angle);
      let y = 180 * sin(angle);

      stroke(255, 255, 255, 150)
      strokeWeight(5);// rotate(6);
      point(x, y);
    }
    pop();

    push();
    for (let i = 0; i <= 12; i++) {

      angleMode(DEGREES);
      let angle = map(i, 0, 12, 0, 360);
      let xStart = 175 * cos(angle);
      let yStart = 175 * sin(angle);
      let xEnd = 170 * cos(angle);
      let yEnd = 170 * sin(angle);

      stroke(255, 255, 255, 150)
      strokeWeight(5);// rotate(6);
      line(xStart, yStart, xEnd, yEnd);
    }
    pop();
  }


  function draw_minHand(obj) {
    push();
    let minAngle = map(minutes, 0, 60, 0, 360);
    rotate(minAngle);
    strokeWeight(4);
    strokeJoin(ROUND);
    stroke(accCol);
    fill(dayCol);
    triangle(0, -180, 10, -150, -10, -150); //minute pointer
    pop();
  }

  function draw_outerRing(obj) {
    push();
    if (hours > 17 || hours < 7) {  //NightMode Border
      push();
      noFill();
      stroke(35);
      strokeWeight(50);
      ellipse(0, 0, globeDiam - 25, globeDiam - 25);
      pop();

      push();
      fill(dayCol);
      stroke(nightCol);
      strokeWeight(3);
      draw_hourNumber(obj);
      pop();
    }
    else {  //DayMode Border
      push();
      noFill();
      stroke(255);
      strokeWeight(50);
      ellipse(0, 0, globeDiam - 25, globeDiam - 25);
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
    stroke(accCol);
    noFill();
    ellipse(0, 0, globeDiam - 90, globeDiam - 90);
    ellipse(0, 0, globeDiam - 70, globeDiam - 70);


    strokeWeight(10);
    stroke(accCol);
    ellipse(0, 0, globeDiam + 15, globeDiam + 15);
    pop();

    push();
    noFill();
    stroke(accCol);
    strokeWeight(25);
    arc(0, 0, globeDiam - 30, globeDiam - 30, -80, 260, OPEN);
    pop();


    push();

    let alarmCol = color(235, 235, 238);
    rotate(10 + 180);
    stroke(alarmCol);
    strokeWeight(18);
    noFill();
    point(0, (globeDiam / 2) - 15);
    rotate(-20);
    point(0, (globeDiam / 2) - 15);
    pop();
  }


  function draw_hourNumber(obj) {
    push();

    textSize(20);
    textAlign(CENTER, CENTER);
    textFont('Georgia');

    if (hours >= 18) {
      let pmHours = hours - 12;
      fill(230, 240, 245)
      text(pmHours, 0, -210);
    } else if (hours <= 6) {
      fill(230, 240, 245)
      text(hours, 0, -210);
    } else if (hours == 0) {
      let midnight = 12;
      fill(230, 240, 245)
      text(midnight, 0, -210);
    } else if (hours > 12) {
      let pmHours = hours - 12;
      fill(nightCol);
      text(pmHours, 0, -210);
    } else {
      fill(nightCol);
      text(hours, 0, -210);
    }

    pop();
  }

  function draw_alarmBall(obj) {
    console.log(obj.seconds_until_alarm);

    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

    if(obj.seconds_until_alarm == 0){

    push();
    for (let i = 0; i < 36; i++) {
      angleMode(DEGREES);
      let angle = map(i, 0, 36, 0, 360);
      let xRad = (globeRad + 60) * cos(angle);
      let yRad = (globeRad + 60) * sin(angle);
      

      let alarmColA = color(110,130,170,150);
      let alarmColB = color(240,188,115,150);
      let alarmColMap = map(yRad, 0, 360, 0, 1);
      let alarmCol = lerpColor(alarmColA,alarmColB, alarmColMap); 


      class AlarmComp {
        constructor(width, height) {
          this.width = 30;
          this.height = 30;
          this.x = globeRad * cos(angle);
          this.y = globeRad * sin(angle);
          this.velocity = obj.millis/10;
          this.color = alarmCol;
        }

        display() {
          fill(this.color);
          noStroke();
          ellipse(this.x, this.y, this.width, this.height);
        }
        move(dx, dy) {
          this.x += (dx * this.velocity)*cos(angle);
          this.y += (dy * this.velocity)*sin(angle);
        }
      }

      let alarmBall = new AlarmComp(xRad, yRad);

      alarmBall.move(1,1);
      alarmBall.display();

      alarmBall.move(2,2);
      alarmBall.display();
      
      alarmBall.move(3,3);
      alarmBall.display();
      
    }
pop();
  }


} //PURPLE CURLY. FUNCTIONS SHOULD ALWAYS START AND END IN PURPLE!! (According to VS Code theme)

}//LAST CURLY. IT SHOULD BE YELLOW!!(According to VS Code theme)


