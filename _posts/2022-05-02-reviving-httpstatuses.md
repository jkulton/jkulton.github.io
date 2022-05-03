---
layout: post
title: Reviving httpstatuses
tldr: httpstatuses.com died in early 2022, but it was OSS. I forked the project and redeployed to <a href="https://httpstatuses.io">httpstatuses.io</a>.
description: After learning what happened to the site, I revived httpstatuses on a new domain.
permalink: /:year/:title
---

## Background

In early 2022 the [httpstatuses.com](https://httpstatuses.com/) domain started redirecting to a web agency's site instead of serving the simple and useful site it [once had](https://web.archive.org/web/20220208004002/https://httpstatuses.com/).

The site had been fairly popular, and I found [other](https://twitter.com/_elpete/status/1502013465526890498?s=20&t=3L-2nqwcv3Ri4LGDuhvlpw) [people](https://twitter.com/davidbiesack/status/1512462684587012098?s=20&t=3L-2nqwcv3Ri4LGDuhvlpw) [online](https://news.ycombinator.com/item?id=30605110) [also](https://github.com/rmaake1/httpstatuses/issues/75) [wondering](https://news.ycombinator.com/item?id=30640630) what had happened. Had the domain expired? Was the site purchased?

## What happened?

After digging around a bit I found [Sam Ryan](https://samryan.co.uk/), the creator of the original httpstatuses site. His personal website mentions the httpstatuses.com domain was acquired by [WebpageFX](https://www.webfx.com/) in 2016. WebpageFX seemingly did nothing with the domain for years, then came 2022.

After some more searching I found the original httpstatuses site was an open source project. Although, it hasn't received a commit [since](https://github.com/rmaake1/httpstatuses/commit/5c0cdbcbf2be4f7f4036d363f63e4dd6230755c9) the year of the acquisition.

Given the last commit date and the domain being acquired I have to think the project was essentially frozen as a term of the deal. A handful of stale [issues](https://github.com/rmaake1/httpstatuses/issues) without much traffic and outstanding [pull requests](https://github.com/rmaake1/httpstatuses/pulls) lend more evidence to that view. However, **it was MIT licensed**, so with that...

## Bringing it back online

I forked the original repo, then registered and redeployed the project to [https://httpstatuses.io](https://httpstatuses.io). 🎉

I've placed the repo under a [GitHub org](https://github.com/httpstatuses) specific to the site's purpose.

## Tech Details

- The project is a static site built with [Metalsmith](https://www.metalsmith.io/)
- I removed a sponsorship banner and Google Analytics snippet in [this PR](https://github.com/httpstatuses/httpstatuses/pull/1)
- I deployed the site using CloudFlare Pages

I hope someone else might find the revived [httpstatuses.io](https://httpstatuses.io) useful!

## Edit

**Edit 1**: [Someone on Reddit asked](https://www.reddit.com/r/programming/comments/uhee08/reviving_httpstatusescom_now_httpstatusesio/i75tqx4/) when httpstatus.es stopped serving the old site (because it too serviced this site!) I looked into that a bit and it seems httpstatus.es was  the _original_ domain for the site, but then the project was moved to httpstatuses.com primarily for SEO reasons in ~2015. [See this GitHub issue](https://github.com/rmaake1/httpstatuses/issues/29). httpstatus.es was then set to redirect to httpstatuses.com going forward. That redirect contiues to today, [httpstatus.es](https://httpstatus.es) now redirects to the WebpageFX domain.