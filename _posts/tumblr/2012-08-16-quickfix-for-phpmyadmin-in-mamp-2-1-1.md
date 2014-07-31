---
layout: post
title: Quickfix for phpMyAdmin in MAMP 2.1.1
date: '2012-08-16T12:19:24-04:00'
categories: blog
tumblr_url: http://blog.amritamaz.me/post/29556355244/quickfix-for-phpmyadmin-in-mamp-2-1-1
---
I had to re-install MAMP and found a weird problem when trying to set everything up. My Apache and MySQL servers would start up fine, but when I opened the start page, I couldn’t access phpMyAdmin.

# The Problem

![mamp error](http://media.tumblr.com/tumblr_m8uvih6Ldr1rq4356.png)

The error, #1045 - Access denied for user ‘root’@’localhost’ (using password: YES)”, made me think at first that it was a password issue. I’d had some problems with MAMP’s use of root/root hard-coded as default before, so I checked all the offending files:


	/Applications/MAMP/bin/phpMyAdmin/config.inc.php
	/Applications/MAMP/bin/mamp/index.php, 
	/Applications/MAMP/bin/stopMysql.sh


and I changed the password to `root` again with the command:


	/Applications/MAMP/Library/bin/mysqladmin -u root -p password [NEW PASSWORD]


where [NEW PASSWORD] was root. I was thus convinced that the passwords everywhere were root, but the problem persisted.

At this point, I uninstalled and re-installed MAMP in frustration, with the same problem. At this point I realized the problem must be elsewhere. Digging around in the phpMyAdmin/index.php page, I found that MAMP was passing a multi-language URL that the version of phpMyAdmin shipped with MAMP didn’t support. This also explained the “Unknown language” bit after the 1045 error as well.

It turned out this was due to the query string being passed to the phpMyAdmin/index.php page. MAMP was appending language=English to the url, wich was the cause of the issue. The version of phpMyAdmin shipped with MAMP doesn’t appear to be multi language, and for some reason this request for English would cause the 1045 error.

# The Solution

Turns out, you can just modify the line in the index.php page to fix it. The full path is `/Applications/MAMP/bin/mamp/phpMyAdmin/index.php`. Just change

	<?php header(''Location: /phpMyAdmin/''.(!empty($_SERVER[''QUERY_STRING'']) ? ''?''.$_SERVER[''QUERY_STRING''] : '''')); ?>


to:

	<?php header(''Location: /phpMyAdmin/''); ?>


This isn’t a hard and fast solution, because MAMP won’t pass any query vars to phpMyAdmin, so it may be a better solution to just update phpMyAdmin so everything works. In the meantime, I’ll just use this.
