---
layout: default
title: Projects
---
<h2> Projects </h2>
<small>*(In no particular order at all)*</small>
<ul class="posts">
	{% for post in site.categories.projects %} 
	<li data-section="{{ post.title }}">
		<a href="{{ site.baseurl }}{{ post.url }}">
			{{ post.title }}
		</a> - 
		<span class="desc">
			{{ post.subtitle }}
		</span>
	</li>
	{% endfor %} 
</ul>
