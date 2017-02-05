---
layout: post

title: Task Automation with Python
for: Saving time and having fun
description: Experimenting with Python scripting
date: 2017-02-03
tools: Python, BeautifulSoup
category: code
thumbnail: /images/code/python.png
---

As part of my journey in learning Python (through my enrollment in CS303E at UT and independently), I decided to create some simple scripts to automate boring things that would take much longer manually.

I started with an image scraper using [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) and the [Requests](http://docs.python-requests.org/en/master/) library to scrape all the images from a site that I was helping to redesign, in order to see the design fully in my local dev environment.

<script src="https://gist.github.com/sc1f/6993f7f882f8576038045a4d963c0a36.js"></script>

I also used the [MaxMind](http://maxmind.com) IP address database to build a IP geolocation lookup tool for my local shell, which (despite its lack of usage) was a really cool experiment and showed me what Python was capable of.

<script src="https://gist.github.com/sc1f/dc90f4c31c7a10643bca4c1353904773.js"></script>

Emboldened by this, I built a script to tackle something that I would be doing every two weeks: creating over 150 French vocabulary cards on Quizlet. Because Quizlet had an import feature, I wanted to save time by using Python to parse the vocabulary list and create an importable file that would save me from typing all the words manually. 

<script src="https://gist.github.com/sc1f/0d21300a7c88e5f2df0fa1980feb51e1.js"></script>

By copying and pasting the vocabulary words into a plain text file, I would end up with a file that has an even amount of lines, with half of the lines being the French words and then the other half being the equivalent English translations. This allows me to parse the text file, split it into two lists down the middle, and rejoin them with a separation character that Quizlet will then parse and create flashcards with. This has saved me many, many hours of work every two weeks; if I could automate the learning process, that would be even better!

