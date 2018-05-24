---
layout: page
title: blog
permalink: /blog/
---
<section id="intro">
<h2>amritamaz/blog</h2>
</section>

{% for post in site.posts  %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

{% if forloop.first %}
<div class="textspace">
<aside><h2 id="{{ this_year }}-ref">{{this_year}}</h2></aside>
<div>
<ul class="tablelist">
{% endif %}

<li><a href="{{ post.url | prepend: site.baseurl }}"><b class="label">{{ post.title }}</b>
<em class="detail">{{ post.date | date: "%b %Y" }}</em>
</a>
</li>

{% if forloop.last %}
</ul>
</div>
</div>
{% else %}
{% if this_year != next_year %}
</ul>
</div>
<div class="textspace">
<aside><h2 id="{{ next_year }}-ref">{{next_year}}</h2></aside>
<div>
<ul class="tablelist">
{% endif %}
{% endif %}
{% endfor %}
