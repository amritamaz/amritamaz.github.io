---
layout: page
title: reading
permalink: /reading/
---

When I was 10, I got detention for reading too much.

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'books' %}
      <li>
<!--         <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
 -->
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
      {% endif %}
    {% endfor %}
  </ul>

