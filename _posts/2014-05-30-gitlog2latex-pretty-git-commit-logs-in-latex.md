---
layout: post
title: 'gitlog2latex: Pretty Git Commit Logs in LaTeX'
date: '2014-05-30T19:12:00-04:00'
categories: [blog]
tags:
  - programming

---
For a recent project, we wanted to auto-generate our Git commit logs for inclusion in our final paper. Getting the pretty git log on the command line is easy:

	git log --reverse --pretty --date=short

Converting this into the LaTeX friendly output we wanted, however, is not.

![what i got](http://media.tumblr.com/f78de61b01a18f32ecb224220cf2434e/tumblr_inline_n6eu9t58XT1rq4356.png)

Yes, there are packages that remediate this problem, somewhat. [latex-git-log](http://www.ctan.org/pkg/latex-git-log) is nice, but we didn’t want landscape pages, or all the excess info they include in their output. [gitinfo2](http://www.ctan.org/tex-archive/macros/latex/contrib/gitinfo2) is even more robust, but seemed a bit overcomplicated for our use case. If our commit log can be generated by a simple script, why can’t a TeX file with our commit log be generated by a simple script also?

Well, thanks to gitlog2latex, now it can!

<script src="https://gist.github.com/amritamaz/68d72c602a29635168ed.js"></script>

Essentially, we escape LaTeX’s special characters using [pandoc](http://johnmacfarlane.net/pandoc/), then a few iterations of sed and awk to clean up the output and convert it into tables.

To use gitlog2latex, you want to grab it from github, move it into the directory you want to generate a log for, and run:

	curl -O https://gist.githubusercontent.com/amritamaz/68d72c602a29635168ed/raw/4a2f064142b08f3c021e9a7562ec9116c0490cbf/gitlog2latex.sh
	chmod a+x gitlog2latex.sh
	mv [mydirectory]
	cd [mydirectory]
	./gitlog2latex.sh

The file will be produced as `gitlog.tex`. If you want to name it something else, change the `OUTPUT` variable at the top of the script.

For gitlog2latex to work, you need to have [pandoc](http://johnmacfarlane.net/pandoc/) and the [tabu package for LaTeX](http://www.ctan.org/pkg/tabu) installed. Happy TeXing!
