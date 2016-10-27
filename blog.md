---
layout: page
title: blog
permalink: /blog/
---

<!-- <ul class="post-list">
  {% for post in site.posts %}
  {% if post.categories contains 'blog' %}
  <li>
         <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

<h2>
  <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
</h2>
</li>
{% endif %}
{% endfor %}
</ul> -->

<!--         <div class="textspace">
            <aside><h2>2009</h2></aside>
            <div>
                <ul class="tablelist">
                    <li>
                        <a href="/writing/why-vs-how">
                             <b class="label">Why vs. How</b>
                            <em class="detail">Sep&nbsp;2009</em>
                        </a>
                    </li>
                    <li>
                        <a href="/writing/on-avedon-on-vonnegut">
                             <b class="label">On Avedon, On Vonnegut</b>
                            <em class="detail">Sep&nbsp;2009</em>
                        </a>
                    </li>
                    <li>
                        <a href="/writing/ten-principles">
                             <b class="label">Ten Principles</b>
                            <em class="detail">Feb&nbsp;2009</em>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

 -->
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


<ul class="tablelist">
    {% for post in site.posts %}
    {% if post.categories contains 'blog' %}
    <li>
        <a href="{{ post.url | prepend: site.baseurl }}">
            <b class="label">{{ post.title }}</b>
            <em class="detail">{{ post.date | date: "%b %Y" }}</em>
        </a>
    </li>
    {% endif %}
    {% endfor %}

</ul>


