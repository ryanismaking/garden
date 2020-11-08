---
title: Making Theatre and Getting Sleep
date: "2018-02-26"
description: I saw an opportunity to help stage managers take notes about their theatre productions digitally, with the aim of saving valuable time during rehearsals.
---

I’ve always been attracted to live theatre. Following the pull of curiosity, I joined an amateur production of *Avenue Q* in 2010 as a member of the stage crew. I was put in charge of set and props changes, and reported to a member of the crew known as the stage manager.

After several weeks of rehearsal, I noticed the stage manager looking increasingly tired. Initially, I assumed it was just the busyness of the schedule. I ended up learning, however, that she had been staying up late nearly every evening, “tidying up her cues.”

## Understanding the problem

Stage managers are responsible for maintaining the artistic integrity of the show’s performances to the standard of the director and all other creative people on a production. As you might expect, they need to take a staggering amount of notes.

The stage manager learns where particular lighting, sound, and other technical effects should happen and notes these effects, which they call _cues_, in their copy of the script. It’s critical they refer back to these notes to cue the other members of the crew, like me, when to do their jobs—keeping everyone synchronised.

![Spamalot cues](./spamalot.jpg)

The demands placed on stage managers by a tight schedule mean that they rush to get their notes done as they learn new information, which can sometimes lead to poor legibility. This isn’t acceptable, as this is the only copy of notes about how things should work on stage during the show. So, they have to stay up late to rewrite or retype any notes that are confusing or illegible.

I asked myself whether current stage management techniques are up to scratch. To learn what stage managers think, I interviewed four stage managers with varying career experience.

I was able to verify that my original observation was an actual problem: “Grey lead. Pen all over it. [My calling script] is illegible by the [end] of rehearsal. Sit down, type it all up, repeat.” Long into the night.

I asked each participant to tell me about what they need to get accomplished during each stage of the production, how they work currently, what they worry about, and what they think they do well.
Getting my participants’ permission to record the session was a really good idea, as it allowed me to take my mind off writing notes and just have a conversation. I was able to use my interview guide as a starting point and let the questions evolve and adapt, which meant the participant was more engaged and that I ultimately discovered more than if I’d stuck to my pre-written list of topics.

![stage-manager-research](./stage-manager-research.jpg)

I pulled together repeating patterns of quotes from the qualitative research into a persona. She represented the insights I gained in listening to the problems my stage managers talked about whilst trying to do the many jobs for which they are accountable.

## Defining a good outcome

The stage managers I interviewed reported they can spend many hours on their notes, and have several conversations straightening out the “three versions of [notes] people were familiar with.” It was clear from the research that for any change to the current note-taking process to be successful, it could prioritise any number of successful outcomes:

- Be quicker than the original process of taking shorthand notes first and re-doing them later, giving the stage manager more time to focus on other important things (like sleep).

- Eliminate the need to retype—possibly incorrectly—notes into the daily rehearsal report sent to the crew and creative team, which would avoid confusion and additional conversations in rehearsal.

- Reduce the number of communication channels used to send out information, leading to fewer missed notes.

I made a point to ask each participant whether they prefer to keep their notes digitally. A couple said yes, but went on to say that they end up with a printed copy to read from on performance nights: “I’m terrified my laptop will die halfway through the show and going, ‘F😳ck. There’s a lighting cue at some point, let’s just make this sh😅t up.’” There’s a reason paper was still the go-to. I needed to take this into consideration, as it seemed like a unique side effect of how the paper traditions of theatre had continued on.

Both stage managers I spoke to who said they use digital notes (at least in the rehearsal stages) reported they use Microsoft Word. I also found a few other products that were trying to solve similar problems. I made a list of things they were doing well and a list of things they could have improved, to take into consideration when I was thinking of potential solutions.

Show Pro:

- Synchronises to the latest version of cues and works offline.
- iOS alerts of changes to cues as they happen.
- Doesn’t help with script prep; shown in a different format.
- Cues don’t sit next to the script; text notes only.
- Can’t print or share the notes.
- The interface is somewhat confusing.

iAnnotate:

- Easily sharable and printable.
- Make highlights fairly easily.
- Embed notes and photos; see index.
- Handwriting is difficult; drawing lines and text is frustrating.
- Hard to use the interface in a hurry.
- Difficult to edit elements.

Word:

- Neat, formatted notes; fast to type.
- Easily shared and printed.
- Stage managers are familiar and mostly comfortable with it.
- Can be difficult to draw lines to correct elements; changes can be time consuming.
- May have to spend time setting up on which side pages need to print.
- No sketches.

## Generating ideas

In an attempt to come up with varied ideas to solve the problems discovered in the research phase, I dove head-first into a timed quick-sketching exercise.

![generating-ideas-for-staged](./generating-ideas-for-staged.jpg)

Out of the twelve concepts I sketched, I chose four to focus on—the ones which I felt were easy wins, and of the highest value. In this case study, for the sake of brevity, I will limit the discussion to the solution depicted in sketch 8.

![prioritisation-of-staged-features](./prioritisation-of-staged-features.jpg)

In hindsight, my idea generation process wasn’t focused enough on which specific problem I was setting out to solve and the outcome I wanted for my stage managers. Instead of sticking to just the outcome of neater notes, I also ended up thinking about how to solve other related issues. Doing this exercise over again, I would sketch solutions in this twelve-up format for only one outcome at a time.

Another thing I’d do differently is record the reasons why I’d decided or discovered that a particular solution was going to be too hard to implement, so that I could justify where on the prioritisation axis I had placed each candidate solution. Doing this would be important in a conversation with a product manager or any other stakeholder.

This idea generation sketching was also a solo activity, but had I access to my stage managers at the time I would have involved them in this process. It would have been interesting to see what they sketched given their perspectives.

## Solution: Neater notes, faster

I decided simply to mimic the way notes are made in the paper copy of the script. This would be the most recognisable digital solution to a stage manager.

Cues are placed in context, next to the indicated section of script when it occurs. Unlike Word, this solution would automatically place connecting lines to the correct elements in the copy of the text, and position cue notes to be easily readable.

On reflection, there is a feature which allows easier note-taking within Word which I could have explored in depth for more inspiration, and as an attempt to differentiate—the track changes feature. In future, I’ll do a deeper dive of competing products’ features to glean inspiration.

### Iteration one

![workflow](./workflow.png)

Firstly, I created a flow diagram to map out the logical sequence of actions required of a stage manager to locate the correct position in the script, create their cue, and save it to the script. Next, I used the flow to begin sketching rough versions of how the workflow interactions onscreen might afford the behaviours.

For the purposes of the exercise, it was assumed the user was already able to upload their script somehow. Also, the flow diagram shows extra behaviour which I added in iteration two as I was neglectful in keeping all versions of the visual assets I was creating—something I’m keen to learn how other designers manage.

![find-section-of-script](./find-section-of-script.jpg)
![editing-annotations](./editing-annotations.jpg)

When I started the low-fidelity sketching, I had not taken into consideration the availability of my test subjects in advance. Since they were unavailable, I ended up making assumptions about which interactions might work. Looking back, I don’t think this was the right thing to do—any feedback is better than no feedback, and even testing my paper prototypes with people who aren’t stage managers (albeit with a little bit of context-setting) would have steered me based on evidence rather than intuition.

![find-screen](./find-screen.jpg)
![annotate-screen](./annotate-screen.jpg)
![cue-edit-screen](./cue-edit-screen.jpg)
![script-screen](./script-screen.jpg)

Having decided on how each of the interactions would work, I created high-fidelity mocks in [Sketch](https://www.sketchapp.com/), which I would use as the basis for testing on a real iPad by streaming the images to the [Mirror](https://www.sketchapp.com/docs/mirror/mirror/) app.
My usability test was straight forward: I asked the participant to say how they might add a cue to the script, and then read the cues aloud as if they were calling cues in a show.

It was clear to her that she could highlight dialogue with her finger, but she got stuck quickly. “What are these plus bubbles?” She explained that the icon doesn’t imply adding a cue. For the next iteration, I replaced the “plus bubble” with an iOS-style context tooltip which gave the option to “add cue.”

Next, she was able to explain how she might edit the cue successfully, but pointed out that many cues might occur on a single “trigger” in the script. At the time, the designed interactions did not take this into account. In the second revision, I included multiple sections, one for each cue, which would allow many cues per trigger.

In addition, she said the design did not allow control over the finer details, such as the cue number, whether it was a “go” or “standby” cue (i.e. whether the cue was about to happen or should happen immediately), and details about other types of notes besides cues. The mistake I made here was just to accommodate her request—I added it for iteration two, but I should have probed into why she needed more control. Perhaps there was a better solution I overlooked.

### Iteration two

![add-multiple-cues](./add-multiple-cues.png)

![add-multiple-cues-screen](./add-multiple-cues-screen.png)

I jumped into high-fidelity revisions quickly after sketching a concept for iteration two, but it may have been helpful to go back to one of my participants with the sketch first, to see what they thought, before I invested time in pushing pixels around. I ended up graduating these revisions into an interactive [InVision prototype](https://invis.io/CV76HZLSZ), which I used for the second round of testing.

To make clear that the “annotation” screen is for editing, it slides up into view. The aim here is to reinforce to the user that it is covering the script and may be dismissed (“Cancel” or “Save”) to return to the previous screen. This motion design is a technique to help create the user’s mental model about their location within the hierarchy of the app.

Iteration two ran much more smoothly, with the participant completing the task without any issues. However, the prototype has its limitations. For instance, it doesn’t allow the user to imitate the act of typing their notes. My participant commented that it might be hard for him to type on the iPad in a hurry. This was a helpful insight which indicates a web solution may be more suitable for the app’s users.

## Reflection

This [General Assembly](https://generalassemb.ly/) project was my first end-to-end design experience, and I thoroughly enjoyed every step. Looking back, there are a number of points to reflect on:

- If this was the first feature in an MVP, I could have used analytics to determine how long users were taking to complete their notes, and compared it with the original reports from my stage manager interviews. Any time savings would be a good sign that the design is headed in the right direction. Or, to get feedback even more quickly, the measurements could take place during testing with the interactive prototype—provided the prototype can imitate all the real app’s functions, like typing.

- Research is one of my stronger skills at the moment. Having conversations with potential users came naturally and was exciting, given I understood the problem domain well and had prepared a discussion guide.

- Not having access to potential users can be difficult, but it’s not an excuse to forego testing a design. Making assumptions is an easy trap to fall into, and perhaps more costly for new designers like myself who don’t have as much experience from which to draw.

- Making the mistake of sketching ideas before setting focus on a specific desired design outcome meant the solution space might not have been fully explored. I missed an opportunity to fully consider how existing products work when coming up with solutions.

- Confusing focus between different layers of the design made it harder to determine how to interpret critical feedback. Testing with users at each iteration is important to understanding how each decision in the design process affects users.

- It would have been helpful to keep a design journal, as recalling why I’d made particular decisions become harder as the project went on.

- Although I understand the components of visual design, and was able to produce an interface which was usable, I did not put much thought into the detail as I ran out of time. I believe if I had user tested more sketches with a wider variety of visual and interaction ideas, it would have naturally become a focus.
