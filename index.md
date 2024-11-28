---
layout: default
title: 'home'
permalink: /
subtitle: hello
---

I am a researcher at the intersection of computer graphics, vision, and networked systems. I currently work at NVIDIA Research in the [AMRI research group] [amri].  My focus is practical and resilient neural video and graphics. My research efforts span 3D and 4D representations, visual perception, and systems and networking. 

Before joining NVIDIA, I ran a startup commercializing neural video compression. I received my PhD from the [Allen School of Computer Science] [cse] at the [University of Washington] [uw]. My dissertation proposed perceptual optimizations for visual computing hardware accelerators, storage systems, and data management systems.  I received my bachelors degree at [Columbia University] [cu].

[amri]: https://research.nvidia.com/labs/amri/
[cse]: http://cs.washington.edu/
[uw]: http://washington.edu
[cu]: http://www.columbia.edu

[email]: mailto:amritamaz@gmail.com
[etc]: http://amritamaz.net
[gschol]: https://scholar.google.com/citations?hl=en&user=umX575MAAAAJ
[dblp]: https://dblp.uni-trier.de/pers/hd/m/Mazumdar:Amrita

<section id="news">
<h2>Recent News <a id="h2link" href="{{site.baseurl}}/news.html">(see all &rarr;)</a></h2>
{% for member in site.data.news limit: 4 %}
<div id="news-item">
<span class="news_text">{{ member.headline }}</span><br />
<span class="news_date">{{ member.date }}</span>
</div>


{% endfor %}

</section>
<section>
<h2>Publications</h2>
{% include pubs.html %}
</section>