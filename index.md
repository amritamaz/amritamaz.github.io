---
layout: default
title: 'Home'
permalink: /
subtitle: hello
---

hi! my name is amrita mazumdar. 

right now i live in seattle where i do research with computers, run around, play with clothes, and drink coffee. 

before that, i lived in new york city and went to columbia university, where i did research with computers, cameras, and old books. i spent a summer at brown university and another at ibm vermont.

before that, i spent all my summers at the jersey shore where i grew up. 

i'm still figuring out what goes here. i tweet a bit: [@amritamaz](http://www.twitter.com/amritamaz)

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

