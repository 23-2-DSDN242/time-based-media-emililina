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
}
