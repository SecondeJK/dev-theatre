---
title: Virtual onboarding during the COVID-19 crisis - time costing
date: "2020-04-26"
featuredImage: './j24sofa.jpeg'
---

Have you structured your business ready for the challenge?

<!-- end -->

Almost every tech company is facing unprecedented challenges during the COVID-19 crisis, and at Jump24 it’s been no exception. The tech world has been switched to fully virtual overnight, which is bringing some very interesting debates forward (that I will discuss), most notably “how well is your business currently designed to deal with that?”

I would argue that one of the biggest indicators of how well you’re set up to deal with this is onboarding new staff. As a Developer Advocate that endlessly discusses Developer Experience, what better test could there be for Jump24 than me starting out there?

It became clear that discussing my experience of onboarding virtually at Jump24 are actually massive hot topics across tech right now with the ongoing COVID-19 crisis, so let’s dive into each one.

## Communications
Communications are undoubtedly the first hurdle we face, and inevitably bring in the biggest blocker for remote working across the entire industry: trust.

Trusting your developers to get on with what they’re doing and balancing hands off vs. micromanagement is absolutely vital. There’s two factors that should determine your strategy for this:

* The experience levels of your developers
* Scale of company

If you are mentoring new developers, you have to make time for them. I see this time and time again, where product owners and CTOs have the domain knowledge the new developers need, but cannot access. Your new developers won’t succeed without this mentoring, remote or not; only now you have new developers at home unable to do anything as opposed to in the office and unable to do anything. If you’re in a larger organization, you must make sure you have the structure set up to be able to deliver that knowledge and mentorship, and review where the support is coming from.

Jump24 has made communication rules simple to adhere to:

* Morning standup
* All movements away from machine communicated on Slack
* Clockify removes the need for micromanagement
* Make time for each other (Skype calls, screenshare debugging)
* Always time for sprint retros & kickoffs?

It seems so simple, doesn’t it? But that’s because it is! Companies such as Automattic have [absolutely nailed down the way they communicate on Slack](https://qz.com/694410/automattic-has-figured-out-the-right-tools-for-remote-working/) which is to be as explicit and verbal as possible. Providing we all stick to doing that, everything falls into place.

**_Time spent learning Jump24’s Communications strategy: 5 mins._**

## Project structure
We know we should all be doing Agile, right?

It seems absolutely absurd that I’m writing this, but many companies still don’t practise Agile as standard. “You know what to do on this project, crack on until the shipping date”.

If you do not trust your developers to deliver work remotely, you’re presumably desperate to get everyone back into the office again. You might feel like you don't have any visibility of what has been done or is left to do, and it could well be the root problem of why some businesses are struggling with the sudden switch to remote.

There’s a second part to working with Agile for development that is just as important: *well defined, broken down stories*.

At Jump24, tasks and stories are broken down into the exact specification to what they should contain with well thought out descriptions, source control is branched and organised accordingly, and thus the flow of work is already in place. Swap out the office to remote and nothing changes. Therefore, the onboarding experience onto a project from my experience went like this:

* Log into Jira
* Start working and submit your work for review.

That’s it.

**_Time spent trying to get up to speed with the new project: 10 mins._**

## Tooling
If you’ve not taken the time to get to grips with Docker or any sort of environment containerisation, my guess is that the shift to remote work has hit you hardest as you have to get each developer up to speed with a developer environment. I’ve heard arguments that it’s difficult to set up for larger projects, that it requires higher developer skill levels or that only DevOps folks can really do it.

Like mentoring your inexperienced developers, the real barrier here is *investing time*. It is difficult to learn best practises in containerization - nobody should realistically be expected to pick up Kubernetes in 2 days. But, if you do get DevOps to take the time to set up a project’s environment correctly, you get an onboarding experience like mine.

We’ll get onto standards shortly, but there is also quality control tooling such as [GrumPHP](https://github.com/phpro/grumphp) that doesn’t allow you to push your code if it sniffs code smells. Combined with Jump24’s TDD, this makes for a pretty supportive new development environment.

**_Time spent trying to deploy new project to work on: 10 mins._**

## Standards
At Jump24, the work we deliver is key. Priority is given to making sure the code and structure is right. We adhere to PSR standards in our work and, as a [Laravel partner](https://laravel.com/partners), Laravel best practises.

John Woods once wrote “Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.”, and I am a fan of this philosophy. Far too many are quick to dismiss this in favour of getting projects delivered on time, ASAP, but let’s be absolutely clear about what benefits having higher standards bring to your company:

* Long term client partnerships
* Ability to quickly scale delivered work
* Levelling up your developers

The last point is something I hold dear in my heart: if you deliver unchecked work “as long as it works” to a client for speed and money, its development team will not have learned anything. You’re putting those developers’ careers at a disadvantage.

The impact of remote working with adopted standards is that there’s no change. The developers know what to do. The project managers know what to do. The framework is already there, and the context with which it’s used doesn’t change. There’s no unexpected or confusing behaviour in the existing projects, because of best practices across all the developers, thus avoiding the “what was in this developer's head at the time” problem.

**_Time spent trying to understand standards used : 0 mins (I already knew them)._**

## Documentation
[Everything is documented, because it’s the correct thing to do.](https://medium.com/ft-product-technology/documentation-day-how-the-ft-com-team-improved-our-documentation-to-95-usefulness-in-7-hours-b73d1a7e6f30)

What’s that, you’ve not been documenting stuff because you don’t have time? Oof!

**_Time spent trying to work out undocumented features: 0 mins._**

## Self documenting code
Going hand in hand with documentation is the mythical self-documenting code. Many say that this doesn’t exist, but the truth is that it does. Again, it boils down to putting time in to make sure this is the case - alongside standards and documentation at Jump24, debating exact function and variable naming and how interfaces are implemented is important. I’ve not had an onboarding experience as smooth as this because of self-documenting code actually doing what it says on the tin, and as a developer I can tell you it’s a delight. With no meetings to go through the structure of the codebase, it didn’t matter whether I was remote or on site.

**_Time spent trying to work out arbitrary mystery code: 0 mins._**

## Code Review
There’s only one way you can keep the standards high, and that’s through Code reviews, though these are [notoriously difficult to balance.](https://medium.com/@johnsinco/dont-do-code-reviews-109f7d3952de) In my case, there is the understanding within the team that the purpose of code review is exactly that. It can go hopelessly wrong when you throw [egos into the mix](https://twitter.com/skirani/status/1149302828420067328), but the idea to make code review constructive is to understand the company culture
beforehand.

**_Time spent worrying the team are hammering me on code review: 0mins._**

## TDD First
Probably the most worrying part of onboarding onto a new team, especially when doing it remotely, is not having to experience that terrible fear that what you’re about to do is [delete production by accident.](https://about.gitlab.com/blog/2017/02/01/gitlab-dot-com-database-incident/)
Jump24 is TDD-first, specifically to avoid these kind of problems. There are two results of taking this direction:
* With other tooling such as Bitbucket Pipelines & GrumPHP: cannot push breaking changes to Production
* Upskilling developers with what should be standard practice industry-wide

There is a drawback to this: you have to invest the time to write and correctly implement TDD. But - when you do, it naturally falls into the onboarding process nicely.

**_Times I’ve broken Production: 0_**
// @TODO keep eye on this

## Reputation & Culture
One of the reasons that understanding the culture has taken so little time is, quite frankly, because the work has been put in long beforehand in my case. Jump24 firstly sponsored my community group [BrumPHP](https://www.meetup.com/brumphp/), then I handed it over to them - it’s a company that gets how the PHP community works. By the time it came to virtually onboard here, I’d already spent the best part of two years in the Birmingham ecosystem discussing PHP matters with them. For most Developer Relations roles, the onboarding time is usually around a week off site to go through the fine detail of what the role is - by the time I’d started Jump24, I already knew.

**_Time spent culturally onboarding: 0mins._**

It’s understandably a pretty low score when it comes to time that my company has spent onboarding me, but that’s because the work has been put in place beforehand. We regularly throw out the things we should be doing in software development, but “never have the time”. I think the COVID-19 crisis we all face together as an industry is the final push we need to consider how important all of these things are, and if you're ready and flexible with your staff, the payoff makes a massive difference.

When times change, and we can come back into the office again: nothing changes in terms of how we work. I’m just looking forward to meeting my colleagues in person!

**_Time spent enjoying work: All of it._**

_With thanks to [Dan Newns](https://jump24.co.uk/), [Jen Lambourne](https://twitter.com/jenny__anne) and [Stuart Langridge](https://www.kryogenix.org/)_
