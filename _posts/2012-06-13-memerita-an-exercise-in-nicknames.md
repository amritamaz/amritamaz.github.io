---
layout: post
title: Memerita – An Exercise in Nicknames
date: '2012-06-13T16:03:00-04:00'
categories: [tech]
---
A few weeks ago, I thought it would be fun to take a fun game my friends played and turn it into a small site. I would call it an app but it’s really just one JQuery function with some Google Web Fonts and my favorite color on top, so I’m calling it a site. Memerita.

Step 1: Java

I first made a mockup in Java, because I’d recently written a program with similar functionality for Data Structures and just wanted to get something working before I moved on. It’s 8 lines, with two of them opening a BufferedReader to read in /usr/share/dict/words/ (which I had already saved for homework), and the rest parses out the words using String methods.

Step 2: Regex

The Java program didn’t take long, but as I was doing it I had a feeling I could do it even better in a simple shell script using grep. Unfortunately, I don’t know much regex, but a lot of the students I TA had been showing me an online regex tester I started learning from, and I put together


  grep ^[a-z]*[^A-Z]am$ /usr/share/dict/words


to get all the words I’d be using. 1

Step 3: JQuery

The JQuery is extremely simple. I hardcoded in a few of the more logical results with “|rita” appended afterwards, split them into an array, and then used the Cycle plugin to iterate through the words.

The rest is CSS.



Next

The original idea involved having a submit form, but I didn’t feel like taking the time/energy to database it up. I also would have no idea where to begin, demonstrating a surprising ineptitude in web programming on my part. I also wouldn’t mind making it more dynamic, with a text field generating nicknames based on a given name entered, but have a feeling only certain names lend themselves well to this type of game. Maybe one night if I get bored.



A friend later improved it to: ^[a-z]*[^A-Z]am$, which eliminates all the choices like “cream” or “roam.” ↩


