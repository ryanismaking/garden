---
title: Building a Video Player Which Doesn’t Make You Mad
date: "2018-02-26"
description: The new Lifestyle section on realestate.com.au needed a video experience which has the users’ patience in mind. I stepped in to provide some interaction design guidelines.
---

We all know how it feels to be browsing the news online and suddenly hear [Kingswood’s cover of _Go Your Own Way_](https://www.youtube.com/watch?v=gah77mUvlq0) playing, even though you’ve not clicked or touched anything. It turns out to be a Isuzu car video advertisement and, although the song is pretty catchy, you’re annoyed you have to scroll up and down to find and stop the offending video.

So when the product manager of [realestate.com.au](https://realestate.com.au)’s Lifestyle content wanted to show off the new videos we’d been making, I was determined not to let us fall into the trap of making another bad video player.

## Understanding the problem

People coming to realestate.com.au’s [Lifestyle section](https://realestate.com.au/lifestyle) do so primarily to read and learn about the many facets which make up a property lifestyle. Users will typically spend their nights on the couch watching videos about dream homes, or getting practical advice about renovating and decorating.

To ensure we’re showing our guests the breadth of video material we make (and maximising our video advertising revenue), we wanted to recommend other similar videos from our library to users by displaying them in a playlist.

A lot can go wrong with playlists. I spent a few days bouncing around the web being traumatised by bad video experiences. To fully understand what kind of experience we needed to build, I sat down with eight of Lifestyle’s regular users to show them the sites I had been investigating.

## Defining a good outcome

The interview participants weren’t surprised to see videos continuing to play one after the other on competitor web products, showing their familiarity with playlists thanks to big video platforms like YouTube, Netflix, and Vimeo.

I noted down reactions to the experiences which I thought would provide us with an informative list of dos and don’ts. Namely:

- Don’t let an unseen video begin playing.
- Don’t force users to pause a video they didn’t want to watch/listen to.
- Do give users an opportunity to decide whether they want to watch/listen to a video.

Ultimately, it seemed we needed to create a predictable, controlled experience for users to feel comfortable and happy.

## Ideas for a predictable video player

I ended up presenting [Sketch](https://www.sketchapp.com/) interaction designs for several video features to the team I felt were both good practice and were aligned to our goal of _predictability and control_.

### Title and duration

![title-and-duration](//images.contentful.com/v0tocsvawh82/1YvXOysecoKEKWuyScAWoc/47f731412745d6cdfa42e8ce02bb9fe2/title-and-duration.png)

Displaying a descriptive title and the video’s running length helps users decide whether this video is relevant and suitable.

### Autoplay

![autoplay](//images.contentful.com/v0tocsvawh82/44zamYj9Higw0sWsmkgmCq/95e83b6973ef10a0f081337a199df2a8/autoplay.png)

A timer is displayed on a video before it begins automatically playing, to give the user enough time to decide whether they’d like to watch. If the video does begin to play, its sound is initially muted, just in case the user didn’t notice the timer.

To stop an unseen video from making sound and causing confusion, the autoplay timer will begin only when the video is visible. If the video is scrolled out of view, the timer pauses.

Pressing cancel disables autoplay for this video and a manual play button is shown.

### A personal playlist

![personal-playlist](//images.contentful.com/v0tocsvawh82/5q7fFZYBiMyEyC4SQukaC6/ea438812e071df2bc4d632d8ba947621/personal-playlist.png)

Because of a technical limitation, we aren’t able to show the related video playlist until the conclusion of the pre-roll advertisement. It ended up being the perfect opportunity to strengthen our brand with some copy to create a friendly, personalised experience.
