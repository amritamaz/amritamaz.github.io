---
layout: default
title: Projects
---
<div id="pagetitle"><h2> /research </h2>
<small>
<i>(In a somewhat chronological order)</i>
</small>
</div>
<ul class="posts">
	{% for post in site.categories.projects %} 
	<li class="postitem" data-section="{{ post.title }}">
		<a class="alist" href="{{ site.url }}{{ post.url }}">
			{{ post.title }}
		</a> <br />
		<span class="desc">
			{{ post.subtitle }}
		</span>
	</li>
	{% endfor %} 
</ul>
<script src="../assets/js/main.js"></script>
