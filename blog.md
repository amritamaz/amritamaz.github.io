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


