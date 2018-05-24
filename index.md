---
layout: default
title: 'home'
permalink: /
subtitle: hello
---


<section id="intro">
<h1>Amrita Mazumdar</h1>
<h2>computer architect*, writer*</h2>
</section>

<section id="bio">
<p>My academic research focuses on how we build systems to produce and store photos, videos, and VR/AR content.
My writing explores the intersections of diaspora, technology, queerness, and culture. I am a Gemini, obviously.
</p>
</section>

<section class="intro_aside">
<a id="res_link" href="https://homes.cs.washington.edu/~amrita">
	(my research website is over here &rarr;)
</a>
</section>

<section class="index-list">
<h2> Recent Blog Posts </h2>
A fun mix of technical and non-technical subject matter
<ul>
{% for post in site.posts limit: 3 %}
<li>
<a class="postlink" href="{{ post.url | prepend: site.baseurl }}">
{{post.title}}
</a>
</li>
{% endfor %}
</ul>
<a href="{{ site.baseurl }}/blog">(see all &rarr;)</a>
</section>

<section class="index-list">
<h2> Recent Writing </h2>
<ul>
{% for post in site.categories.writing limit: 3 %}
<li>
<a class="postlink" href="{{ post.url | prepend: site.baseurl }}">
{{post.title}}
</a>
</li>
{% endfor %}
</ul>
</section>


<section class="index-list">
<h2> My Year in Reading </h2>
I write a yearly retrospective on books read and loved. People tend to enjoy the graphs.
<ul>
  {% for post in site.posts %}
    {% if post.tags contains 'reading' %}
		<li>
        <a class="postlink" href="{{ post.url | prepend: site.baseurl }}">{{ post.year }} in Reading</a>
		</li>
    {% endif %}
  {% endfor %}
</ul>
</section>

<div id="asterisk">*: in-training</div>
