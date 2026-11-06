---
layout: default
title: 'home'
permalink: /
subtitle: hello
---

I'm interested in how we encode and model real-time interactions between people and agents in the physical world. 
My research spans efficient 3D and 4D representations, streaming systems, and multimodal models, with a focus on vision, speech, motion, and physical context as foundations for natural interfaces between humans, machines, and the world around them.
My work has appeared across top AI, vision, and graphics venues (NeurIPS, SIGGRAPH, CVPR) as well as at networking and systems conferences (NSDI, SoCC, SIGMOD, VLDB).

Recent work includes [VideoFDB](https://research.nvidia.com/labs/amri/projects/video-fdb/), a benchmark for full-duplex audiovisual conversational agents; [DyaPlex](https://research.nvidia.com/labs/amri/projects/DyaPlex/) (NeurIPS 2026), a streaming model for simultaneous speech and motion interaction; and [QUEEN](https://research.nvidia.com/labs/amri/projects/queen/) (NeurIPS 2024), which compresses dynamic 3D scenes for streaming and renders at approximately 350 FPS. QUEEN has powered immersive video demonstrations at NVIDIA GTC and SIGGRAPH.

I work at NVIDIA Research in the [AMRI research group] [amri]. Previously, I founded Vignette AI to commercialize my research in neural video compression. I received my PhD from the [Allen School of Computer Science] [cse] at the [University of Washington] [uw] and my bachelors degree from [Columbia University] [cu].

**Interns**: I am always looking for motivated interns. If you are a PhD student interested in streaming and compression for full-duplex multimodal (vision, audio, 3D, 4D) interaction systems, please [send me an email] [email].

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
