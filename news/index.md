---
layout: default
title: amrita mazumdar
subtitle: news
---
<header>
	<div id="titlediv">
<span class="title"><a href="{{ site.baseurl }}">~</a></span><span class="subtitle">/{{page.subtitle}}</span>
</div>
</header>

<ul class="posts nobullet">
{% for post in site.categories.news %} 
<li class="postitem">
		{{post.date | date: "%b %y"}} - <span class="desc">{{ post.content | remove: '<p>' | remove: '</p>'  }}</span>
</li>
{% endfor %} 
</ul>
