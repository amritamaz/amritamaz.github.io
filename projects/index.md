---
layout: default
title: Projects
---

<small>*Not in any sane or particular order*</small>
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