## MDDN 242 Project 1: Time-based Media  
Emily Newenham-Falk, 2024
___
### First Idea:

A clock based on the Cuba Street Water Bucket Fountain. 

![The initial idea.](/assets/old_BucketFountain.jpg/)

This design was appealing because it was formed of basic shapes and rotations which would de-rust my knowledge of pj.js. Typically, I would not use this relaxed and happy colour scheme or simplified cartoonish style, but for the sake of re-familiarising myself, I thought I would go ahead with it. 

Droplets would fall from bucket to bucket as time passes, based on the new second, minute, and hour. However, that is not exactly how a: water works; or b: the Cuba Street Bucket Fountain works.

I decided to abandon this concept as it would not succeed very well as a data visualiser - I did not want to slap numbers on the buckets and call it a clock. 

### Second Idea:

A NES - style rendition of a Final Fantasy I battle.

![The second idea.](/assets/old_NESbattle.jpg/)

I should have known this was biting off way more than I could chew. Luckily, this idea didn't last long.

This clock would imitate how the battle system of Final Fantasy I works; where each second (or maybe five second interval) a party member or enemy would attack, and affect the HP of another combatant. Likely, this would involve loading images if not generating the sprites in p5.js - so, so, so much could go wrong there.

Needless to say, this concept didn't last long either, but it led to...

### Third Idea:

The hero's journey.

![The second idea.](/assets/old_NESjourney.jpg/)

A quaint little representation of a knight's journey, with an animated walk cycle aligned to the second, red gem aligned to the minute, and blue gem along with the 'globe' aligned to rotate based on the hour.

At thie point, what I came up with felt entirely derivative of Final Fantasy I, and felt very uninspiring, so I generalised the idea, with...
___

### Fourth (and final) Idea:

Palia-inspired clock. The inspiration:

[![Palia clock screenshot.](/assets/Clock_In-game_View.jpg)
Retrieved from [link]](https://palia.wiki.gg/wiki/Guide:Time_Passage_in_Palia)

My initial concept sketch: 

![The second idea.](/assets/final_sketch.jpg/)

I have never played Palia (in Beta or otherwise), but a friend sent me a screenshot specifically of the clock in-game a few months ago, since she thought I would like it. I had no idea it would play on my mind for a project later down the line, but here it is again.

I like the unintrusive compass-esque aesthetic of the Palia clock, but feel the colours are a little over-designed and thus muddy. However, there are a couple issues I have with it. It seems counter-intuitive to have a time data visualiser, and then the time, 4:28, directly below it. The two concepts do not work together, and could rather be condensed and integrated to achieve a cleaner user interface. 

Looking back on this precedent, I would have liked to go for a more graphic illustration of the sun and moon, closer to Palia's, but ultimately decided on a symmetrical, visually unintrusive design.

![Early progress gif screenshot.](/assets/wipGif.gif/)

Above is the earliest screenshot I have saved of the final clock. All of the core components are present that would be later on. The screencap was taken in class, about 10 o'clock, so I can tell the angles for rotation and the gradients were not fully down at this point.  The main point of notice is the metronome hand, mapping milliseconds to seconds, direction based on whether the second is odd or even. I thought about scrapping this clock idea entirely, and making a metronome-based clock, but decided three times changing my mind should be the limit.

The gradient was formed not by a lerpColor, but of lines of decreasing opacity - that would be changed later. Colours used in this early variation are so far from what they would become; it is somewhat painful to look back on this early stage. Alas, houses are built on piles, not paintings.

![Early progress jpg screenshot.](/assets/wipshotearly.jpg/)

Unfortunately, I did not save all of my progress screenshots as gifs, but maybe that is for your reading convenience. 

The metronome now follows the second hand around the clock. 
There are now markers for the 24 hours represented, however they do not align with the sun, moon, or sky.

The colours are far more correct here, but there is a lot of building to do atop this. The lerpColors had the entirely wrong approach on the other hand. I believe they were lines with a specific stroke weight, rotated around the centre axis. Multiplying that problem was the fact that it really messed with the overall angles of the clock.

![Progress jpg screenshot.](/assets/wipshot.jpg/)

There was a fair amount of work between this and the previous iteration:

+ general cleaning up of colours, 
+ a refined central metronome,
+ adding a numeric hour indicator at the top,
+ dark mode and light mode based on the hour behind said number,
+ correcting the lerpColors to be based on trigonometry and not degree-based rotation,
+ minute markers, hour stripes, minute indicator,
+ an outer border,
+ I want to  call it overall compass-ification,

However, no alarm had been implemented as of yet.

![Final progress jpg screenshot.](/assets/wipshotalarm.jpg/)

The final progress screenshot I have saved. The alarm is implemented, where orbish bubbles (lerpColor based on y value) spread across the screen. If this clock were implemented as part of a user interface like the Palia precedent, I imagine the bubbles would spread across the whole screen. An unintrusive clock, but a semi-intrusive alarm.

Were I to take this project further, I would add stars and clouds to the night and day sky respectively. Though, I would not want to take away from the understated design. If this clock were to be a part of a user interface,  

___

### Personal Reflection

I had not touched JavaScript in over a year since starting this project, and I think it has shown through perhaps a small amount. There is a long way to go, and so much to learn with programming.

As always, time escapes my grasp as I fiddle over the endless possibilities when starting a new project. I had completely forgotten about this ReadMe until the code was virtually completed. Going forward, I plan to screenshot/screen-record my progress after a session when I push changes to GitHub, and insert them into the ReadMe then and there. I would also strive to draft notes to be refined for the next session. 

I only hope I am not lying through my teeth here, and can actually pull through in bettering my work ethic.

This project has been a pleasure! :D