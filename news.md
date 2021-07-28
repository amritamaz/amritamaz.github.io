---
layout: default
title: Amrita Mazumdar - News
permalink: /news
---

<h2>News Updates</h2>

{% assign prev_year = 2020 %}

{% for member in site.data.news %}


{% if member.year != prev_year %}
{% if forloop.first==false %}
</ul>
</div>
</div>
{% endif %}

<div class="textspace">
<aside><span id="{{ next_year }}-ref">{{member.year}}</span></aside>
<div class="news">
<ul class="newslist">
{% assign prev_year= member.year  %}

{% endif %}

<li>
<span class="news_item">{{ member.headline }}</span><br />
<span class="news_date">{{ member.date }}</span>
</li>


{% if forloop.last %}
</ul>
</div>
</div>
{% endif %}
{% endfor %}
