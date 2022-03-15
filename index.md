---
layout: default
title: 'home'
permalink: /
subtitle: hello
---

I am a researcher at the intersection of computer systems and computer graphics. I am interested in topics related to systems for video streaming, XR, and rendered graphics. I work at NVIDIA Research in the Hyperscale Graphics Systems group. 

*Interns*: I am always happy to mentor PhD students as research interns at NVIDIA. If you would like to work together, please send me an email with "Hyperscale Graphics intern" in the subject, and include your CV and a description of specific topics you might like to work on.

My research focuses on **new systems for XR, video, and graphics**. 
In particular, I am currently interested in systems that leverage new hardware, graphics representations, and perceptual findings to deliver better quality-performance tradeoffs for visual computing.
I am always interested in systems that employ hardware-software codesign, ML for systems, and systems for ML techniques. 

Before joining NVIDIA, I ran a startup commercializing my PhD research on systems support for neural video compression. I received my PhD from the [Allen School of Computer Science] [cse] at the [University of Washington] [uw], where I was advised by Luis Ceze and Mark Oskin. My dissertation proposed perceptual optimizations for visual computing hardware accelerators, storage systems, and data management systems. During my PhD, I worked across the [computer architecture group][arch], the [UW Reality Lab][reality], and the [UW DB group][db], as well as with vision and graphics teams at the Facebook Reality Lab and Google Research. Before graduate school, I studied [computer engineering] [cs@cu] and [English literature] [eng@cu] at [Columbia University] [cu].

[comotion]: https://comotion.uw.edu/
[cse]: http://cs.washington.edu/
[uw]: http://washington.edu
[vignetteco]: https://vignette.company

[arch]: http://sampa.cs.washington.edu/
[reality]: https://realitylab.uw.edu/
[db]: https://db.cs.washington.edu/

[cs@cu]: http://www.cs.columbia.edu
[eng@cu]: http://english.columbia.edu
[cu]: http://www.columbia.edu

[email]: mailto:amrita@cs.washington.edu
[etc]: http://amritamaz.net
[gschol]: https://scholar.google.com/citations?hl=en&user=umX575MAAAAJ
[dblp]: https://dblp.uni-trier.de/pers/hd/m/Mazumdar:Amrita

<section id="news">
<h2>Recent News <a id="h2link" href="{{site.baseurl}}/news.html">(see all &rarr;)</a></h2>
{% for member in site.data.news limit: 5 %}
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