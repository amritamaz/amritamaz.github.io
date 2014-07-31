---
layout: default
title: Projects
---
<div id="pagetitle"><h2> /blog </h2>
<ul class="posts">
{% for post in site.categories.blog %} 
<li class="postitem" data-section="{{ post.title }}">
	<a class="alist" href="{{ site.url }}{{ post.url }}">
		{{ post.title }}
	</a> 
		{{post.date | date: "%m-%d-%y"}}
	<br />
<span class="desc">
<p>{{ post.content | strip_html | truncatewords: 20  }}...</p>
</span>
</li>
{% endfor %} 
</ul>
<script src="../assets/js/main.js"></script>
