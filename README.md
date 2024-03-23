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

![Early progress gif screenshot.](/assets/wipGif.gif/)

Above is the earliest screenshot I have saved of the final clock. All of the core components are present that would be later on. The screencap was taken in class, about 10 o'clock, so I can tell the angles for rotation and the gradients were not fully down at this point.  The main point of notice is the metronome hand, mapping milliseconds to seconds, direction based on whether the second is odd or even. I thought about scrapping this clock idea entirely, and making a metronome-based clock, but decided three times changing my mind should be the limit.

The gradient was formed not by a lerpColor, but of lines of decreasing opacity - that would be changed later. Colours used in this early variation are so far from what they would become; it is somewhat painful to look back on this early stage. Alas, houses are built on piles, not paintings.

![Early progress gif screenshot.](/assets/wipshotearly.jpg/)

Unfortunately, I did not save all of my progress screenshots as gifs, but maybe that is for your reading convenience. 

The colours are far more correct here, but there is a lot of building to do atop this. The lerpColors had the entirely wrong approach on the other hand. I believe they were lines with a specific stroke weight, rotated around the centre axis. Multiplying that problem was the fact that it really messed with the overall angles of the clock.