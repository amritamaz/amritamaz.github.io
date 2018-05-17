---
layout: post
title: 'What One Grad Student Learned from being a Shadow Program Committee Member'
categories: [blog]
---

As a PhD student, your job is to do cutting edge research, write clear papers describing your research contributions, and submit them into the ether where a nebulous fog decides if your submission is worthy of being published or not.[^1] I've been a PhD student for a few years now, co-authoring a number of papers that have been often rejected and sometimes accepted, and I've also reviewed papers. But even with all this experience, the review process still felt like a black box in my mind -- I was able to supply test inputs (paper submissions) and see different output results (acceptances, rejections, reviews), but it was hard to build up a mental model of how the process actually worked based on the small sample size of inputs I pushed in. So, I was really excited to learn about [the ASPLOS shadow PC](https://www.sigarch.org/call-participation/asplos-2018-shadow-pc/) being organized with this year's ASPLOS, and eagerly applied to partcipate.

[^1]: I don't know how this actually works! But this is is what it feels like.

For those who may be unfamiliar, a shadow PC is essentially a simulation of a real program committee, but with all junior researchers, designed to be a learning experience for the participants. As far as I can tell, the tradition started at EuroSys, which has been holding shadow PCs since 2015. The organizers of the ASPLOS Shadow PC, [Yunqi Zhang](http://web.eecs.umich.edu/~yunqi/) and [Johann Hauswald](http://web.eecs.umich.edu/~jahausw/), participated in the EuroSys 2017 Shadow PC, and they enjoyed the experience so much that they wanted to bring the event to the architecture commmunity as well[^2].

[^2]: This is hearsay; I did actually ask them about their motivations for coordinating the program committee but waited four months to write this post and forgot the real answer.

Here was the pitch for participating on the shadow PC:

    Shadow PC members are expected to write their own detailed and rigorous
    reviews for their assigned papers. We expect a review load of 15-20
    papers per member. Members especially are also expected to attend a
    one-day shadow PC meeting in person which will coincide with the
    official PC meeting location and date. The reviews from the shadow PC
    will not impact the decisions of the main conference PC. Shadow PC
    co-chairs will lead the discussions at the shadow PC meeting, and other
    members of the main conference PC will also be invited to the meeting,
    making this an invaluable learning experience for the shadow PC members.

    Being a member of a shadow PC is a lot of work but also a great
    learning experience for a number of reasons:
    – Getting to know how a PC is run and how it operates.
    – Seeing how more experienced reviewers judge the same papers that
    you review.
    – Getting to see both strong and weak papers at the submission stage.
    – Submitting high quality reviews makes one a possible candidate
    for future PCs.
    – Discussing the papers with ASPLOS main PC members who will
    attend the shadow meeting.

## How the review process worked

As far as I can tell, the ASPLOS shadow PC followed a similar process to other program committees, adjusted for the size and structure of our shadow PC.

Like ASPLOS and other architecture conferences, we:

  * used HotCRP to review and discuss papers.
  * went through and marked off potential conflicts, topic preferences, and review preferences for each paper
  * reviewed a series of submitted papers in two rounds of reviewing
  * discussed the papers in the HotCRP comments, led by a PC-selected "discussion lead" for each papers

During the actual submission process, ASPLOS paper authors had the option of checking off if they wanted their paper reviewed by the shadow PC, which not everyone did; the shadow PC had a much smaller pool of papers to review than the actual program committee. The bidding began on 8/18, and my first set of papers were assigned on 8/21. I reviewed 7 papers in the first round of reviews, and had about a month to review them before the deadline. This set of reviews I was fairly proactive about because I was genuinely interested in the papers - the bidding process worked in my favor and I was really excited to read 4/7 of my first round papers.

My R1 set of reviews was the first opportunity for me to gain new insight from participating on the shadow PC, and it came threefold: reading submitted papers from other, anonymous researchers; writing thoughtful, critical, and encouraging reviews for the papers, regardless of my expertise in the area; reading other people's reviews on the same paper and comparing it with my own impressions.

Being snoopy is of my most cherished personal qualities, and I love to know how other people do other research-related tasks, so I _really_ enjoyed the experience of seeing what the quality, character, and priorities of other researchers' submitted papers are like. Conference submissions can come in a number of forms, I know from my research experiences, from the working-up-to-the-deadline desperately-making-sure-there-are-no-empty-citations-or-lingering-todos to the we-edited-and-resubmitted-this-paper-like-forty-times-and-the-reviewers-keep-flipflopping-on-what-they-want-from-us. So, seeing what different authors' pre-reviews-and-acceptance work looked like gave me new understanding of the range of things you may prioritize in a conference paper submission, and how they might affect a reviewer's understanding of the work.

Synthesizing my own reviews for these papers was also an edifying personal experiment. My review process typically worked as follows: read the abstract, introduction, and conclusion of the paper, and make some notes on the general topic of the paper and its goals. Then do a full read-through of the paper to get a deeper understanding of the scope and what the paper accomplishes. Fill in bullet point impressions of the "Paper summary", "Strengths", and "Weaknesses". Then, go through and annotate the paper with more specific questions or comments, to fill in those sections of the review. Finally, make all the number ratings and submit the review.

Sometimes, I would be first to submit a review, and not know how I stacked up against others. Other times, I would submit a review and then see that 3 others had submitted reviews, and they all disagreed with me! Or, they all agreed with me! More often, the reviewers were all over the place! So that was kind of fun, to develop my opinion and then see what everyone else thought.

I would say that, for 4/6 of my R1 reviews and 2/5 of my R2 reviews, I felt really confident in my review and response to the paper -- these were papers where I felt confident about my review even after reading everyone else's. But for a good five of them, I read the paper and either (a) was not an expert or even a casual observer of the area, and so had no idea how to judge the work, or (b) I clearly missed an obvious downside of a paper that made all the reviewers much more opposed to the paper. I think that I felt so uncomfortable reviewing a few of the papers because (a) ASPLOS is more interdisciplinary, and I am not an expert across all of the disciplines it spans and (b) while our shadow PC had reviewers from architecture, PL, and systems, the distribution didn't exactly map 1:1 to the distribution of papers that opted in to the shadow PC review process. I will also say that there were many papers I wanted to read but was conflicted out of reviewing -- I blame this on my collaboration-happy advisors and their many ASPLOS-loving students.

After all our R1 and R2 reviews were submitted, we went into the discussion phase, where a discussion lead (appointed by the PC chair) would encourage the reviewers to either achieve consensus on reviews or decide on discussing at the meeting. A few papers were offline rejects, meaning all the reviewers agreed to reject the paper without much more discussion, but most of my papers required in-person discussion at the PC meeting. So, we all flew to Atlanta to participate in a shadow program committee meeting!

## How the PC meeting went

The PC meeting was in a big room at Georgia Tech with all the tables arranged in a U-shape with a projector screen in the front. The program chairs started with some statistics and information about how the review session would go, we got some comments from some of our "mentors" (more about that in a bit), and then we launched right into the paper discussions! We allocated 5 minutes to discuss each of 90-ish papers (going from highest average score to lowest), with breaks for coffee and snacks and lunch. Then, we would take a PC-wide vote on each paper to accept or reject -- I don't think this is how real program committees operate, and found lots of problems with this technique in practice, but I think the PC chairs implemented it to encourage participation and attentiveness when discussing papers that were not your own. It certainly raised the stakes a bit for me.

Apparently this was mentioned in an email[^4], but it occurred to me very late the night before the meeting that I should somehow prepare for this PC meeting! I had re-read the papers and the reviews on the plane, but I somehow felt like, at least for the papers I was the discussion lead for, I should organize my thoughts and everyone's reviews a bit so I know what's happening. This was so important!! I gave one paper a 5, which I was the discussion lead for, and also the champion (all the other reviewers were ambivalent to negative), so I was a little shocked when discussion started at 9:10 and, after ten minutes and two papers, I had to lead and champion this paper. It all happened so fast!

Thankfully, I had prepared some bulleted notes summarizing the paper, pros and cons as raised by the reviewers, and my general opinion (that this paper was the best and we 100% have to accept it). Another reviewer was in the reject camp, but I convinced them on to my side with fervent optimism towards the paper's contributions and potential impact. Later, one of the mentors mentioned a general question they like to ask when evaluating papers,[^5] and I realized it would have been a pretty strong takedown of my argument. But! The other reviewers did not have that perspective at the time, so the paper was accepted.

[^4]: But I searched again and couldn't find it so I am convinced I deleted it by accident, I really don't think I ever saw it.

[^5]: I am being purposefully vague to obscure the question, which kind of reveals the topic of the paper.

Other paper discussions went thusly: .

One benefit of participating in the shadow PC experience was to get feedback from some supervising grown-ups, who stayed after participating in the _real_ ASPLOS PC meeting the day before to advise and comment on how our shadow PC meeting was going. The primary mentors were Tom Wenisch and Lingjia Tang from Michigan, and other researchers like Kathryn McKinley, Mohit Tiwari, and Tim Harris also participated as mentors and gave feedback. It must have been an odd deja vu-type experience for them to sit through the same papers being discussed again by a whole new group of very green researchers. Typically, the mentors would chime in after the discussion of a paper to comment on how the conversation went, or buzz in if the discussion of a single paper was going too long. The feedback from mentors, the only people who actually knew how meetings like this should actually operate, was useful but, I felt, at times a bit restrained. There may be a different kind of structure where, similar to Discussion Leads, future Shadow PC events can arrange for a mentor lead to pay attention and give feedback or suggestions. More structure for the mentor role overall would likely benefit everyone involved.

The PC-wide vote process started to break down after lunch, when the papers were lower ranked and people were less inclined to pay attention[^6]. The reviewers would discuss a paper, on a topic I didn't really know about and they were moving too fast for me to learn and someone didn't like the benchmark choice or someone else thought it was a lot of engineering effort and honestly by the time I'd skimmed the reviews and opened up the PDF of the paper we had moved to a vote and I just voted with my gut or whichever of the reviewers I felt was most authoritative. But after this happened a couple times, leaving me with a queasy feeling for not well-exercising my right to an informed vote or whatever, I started being pre-emptive and active, which helped me feel more confident in the voting process.

[^6]: Oh no, not me, though, I paid very detailed attention the whole time which is how I can say which such great authority that folks were drifting off.

The PC chairs cleared a lot of the data off HotCRP after the Shadow PC meeting, so I can't tell you how many papers we accepted or rejected, but I remember it was a reasonable ratio (in keeping with other top conferences, I assure you!). What I _can_ tell you, however, is how I did on the papers that made it out the other side. This is a weird metric, because, looking at the program, I don't recognize many of the paper titles at all. The 97 papers we reviewed is significantly less than how many were submitted to Actual ASPLOS, so it's not a perfect system.

Excitingly for me, five of my 11 assigned papers made it to the Actual ASPLOS accepted papers list.[^7] Out of those five papers, I weak-rejected 2 and weak-accept-or-higher'd three of them, which is a 60% success rate. Yes, NIPS experiment something something the review process is totally random, but given the small subset we had to review, seeing so many of my papers make it out the other side gave me an interesting signal into the review process. In the time since the ASPLOS 2018 decisions, I have since seen a few of the other papers I reviewed trickle out into other conferences as well.

[^7]: There is probably something to be said about the quality of papers for whom the authors felt confident enough to let the Shadow PC review their work.  

## What I think about the shadow PC experience

As a grad student, I highly recommend the shadow PC experience. I learned anew or internalized the importance of every step of the journey, in a much more accelerated manner than if I had cobbled it together over a research career of submitting papers and having them accepted or rejected. Reviewing papers gave me insight into how I perceive new submitted work, participating in PC discussion showed me how I can better interpret the subtext of reviews and comments after rebuttal, and seeing the difference between the submitted papers I reviewed and the accepted papers presented at ASPLOS gave me insight into what the authors may have learned from the actual reviewers' feedback.

I also think the opportunity to faux-PC debate, with a group of collaborative (more-or-less) strangers, is a great maturing activity. In my four years as a grad student, I feel comfortable discussing research with my lab mates and other students in the department, but rarely get to test my comfort in holding research discussions with a larger group of folks from my own research community, across maturity, research style, and interests. At conferences, I typically engage outside my lab with other colleagues in the community, but on a 1-1 or small group setting at most, rarely the kind of large-scale research-driving setting with the import of a PC meeting. Participating in the shadow PC let

## What I might want to see if I did a Shadow PC again

So, it turns out program committees are a lot of work? I don't envy the coordinators for the amount of work they do and are continuing to do in organizing, facilitating, and now managing reimbursement details of the Shadow PC event. As I learn and grow as a grad student I slowly start putting together why faculty and senior researchers are so busy all the time, and I definitely see the impact a reviewing load, as well as being a PC chair or general chair.

That being said, there were some things I wouldn't mind seeing as a young grad student, and maybe some things I wouldn't mind seeing as a person with an eye towards improving the review process For All in the Future:

### 1. Formalized Mentorship

This is challenging because often PC meetings are held in some odd central location that all the PC members have to travel for, and many are too busy to stay an extra day. I really appreciate the effort the "mentoring" PC members expended in supervising and critiquing our discussion, but ultimately feel that it was hard to direct their feedback actionably. One possible opportunity to reduce the cognitive load on the mentors while making their work more useful is to assign them shadow PC members to observe, rather than sections of papers with a variety of topics and PC debates that the mentors may not be interested in. Ideally, this would align with shared research interests, building a more useful connection for the younger student, and making it easier for the mentor to provide interesting feedback on the debate. On a separate but related note, I would have liked to hear if the papers we discussed got in or not after discussion. I heard that there was concern about this, but, I was able to do this comparison myself after the fact once the accepted papers list was posted, and would have enjoyed discussing with my fellow reviewers and mentors what may have led our opinion to differ from the actual PC meeting.

### 2. Discussion of reviews

The Shadow PC is supposed to be a learning opportunity, so it might be useful to have a session, or even an offline spotlight, on really high quality reviews. I see folks on Twitter discuss allowing people to rate the other reviewers of paper, so it could possibly be very easy to implement. I didn't read all the papers, and couldn't see reviews for papers I didn't review, but I would have enjoyed seeing really good reviews -- this is part of the pedagogical experience that may deviate from actual PC meetings but help shadow PC members the most!

## Keep organizing Shadow PC meetings!

All 3k words of this is to say that I truly enjoyed my experience at the ASPLOS 2018 Shadow PC meeting, feeling more invigorated about research, connected to my research community, and excited about research. I think every community should organize these every once in a while, because it will likely improve the overall quality of the young reviewers in the community and their papers! Thanks to the organizers for running this, and I am excited to see these events continue in the future.
