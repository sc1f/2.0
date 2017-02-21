---
layout: post

title: Building juntan.me
for: Myself
description: A process rundown on this site
date: 2017-02-03
tools: Jekyll
category: code
thumbnail: /images/code/site1.png
---

The first iteration of my site was built over one night in December 2015. I had just started to learn how to code, and wanted a place to host my work online that could show off some of my (albeit limited) skills. I discovered Jekyll, forked a theme, figured out how to use GitHub pages, and off I went.

About six months later, I decided that I needed to rebuild. My developer skills had improved in leaps and bounds from when I created my initial site, and I wanted a way to better showcase that while also creating something that had a unique visual look.

The first commits on the [GitHub repository](https://github.com/sc1f/2.0/commit/3e2087af1108dd03ff44b47f38594ea9d320575d) were made back in June, as well as the initial Sketch mockups of what I wanted the site to look like. I really liked arid, dusty tones at the time (and still do to an extent), and wanted to play with varying shades and hues of tan/ochre on the site.
![The original homepage concept](/images/code/site1.png)
*The original concept for the site's homepage*

![The original category concept](/images/code/site2.png)
*The original concept for the category pages*

![The original individual page concept](/images/code/site3.png)
*The original concept for individual work pages*

Travel and other commitments prevented me from working very much on the site until a few months later in September, when I returned from a visit to the Facebook Austin offices particularly inspired to strengthen my personal brand. 

The first iteration of the new site was finished in a two-week coding sprint, and the server configuration (my first time setting up my own server, complete with HTTPS/SSL) took another few days. However, I still didn't think the site was ready to unveil to my friends--I was scared of publicizing my work, especially when the site was still having trouble loading at an acceptable rate.

Portfolio sites are, in their nature, image-heavy. To show off the diversity of my work and expertise in different fields, I wanted to have a frontpage that would highlight all the work in my three different areas, complete with thumbnails. This, as one can imagine, led to a lot of data for the user to load on their end. To fix this, I spent weeks optimizing every single part of the site--creating deferred-load handlers for images in the hidden sections so that they didn't bog down pageload, compressing/minimizing assets, and most recently building a [python script](https://github.com/sc1f/personal_utilities/blob/master/imgcompress.py) that uses the TinyPNG API to compress images down to 1/4-1/3 of their original sizes. This has helped immensely with site load.

Ultimately, this has been an exceedingly rewarding journey, and I look forward to iterating and building on this site further.