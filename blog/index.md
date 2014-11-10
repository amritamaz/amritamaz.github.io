---
layout: default
title: amrita mazumdar
subtitle: blog
---
<header>
	<div id="titlediv">
<span class="title"><a href="{{ site.baseurl }}">~</a></span><span class="subtitle">/{{page.subtitle}}</span>
</div>
</header>
<ul class="posts nobullet">
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
<span class="footer"><a href="{{ site.baseurl }}">> go home</a></span>