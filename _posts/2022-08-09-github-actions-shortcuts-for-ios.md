---
layout: post
title: GitHub Actions + Shortcuts for iOS
description: Use Shortcuts for iOS to schedule GitHub Actions
permalink: /:year/:title
---

I’ve been using the [schedule](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) event in GitHub Actions recently for a handful of projects. Unfortunately, the schedule event doesn't provide strong service guarantees. According to GitHub:

> Note: The `schedule` event can be delayed during periods of high loads of GitHub Actions workflow runs. High load times include the start of every hour. To decrease the chance of delay, schedule your workflow to run at a different time of the hour.

While many workflow executions run almost exactly when scheduled, I’ve observed a wide range of performance. Delays of up to an hour are common, even when applying the suggestion mentioned above.

Others online have observed similar behavior ([1](https://github.com/orgs/community/discussions/27130), [2](https://upptime.js.org/blog/2021/01/22/github-actions-schedule-not-working/)). The general suggestion for workloads with strict scheduling requirements has been to execute the Action manually via GitHub's API using the [workflow dispatch endpoint](https://docs.github.com/en/rest/actions/workflows#create-a-workflow-dispatch-event).

Although creating a cron job on a server to hit the endpoint is easy, needing to configure a server undermined the entire reason I picked GitHub Actions. Then I stumbled across a dead simple solution after remembering Shortcuts for iOS supports making HTTP requests.

<img
  alt="a screenshot of the Shortcuts app in iOS with a 9:00PM daily automation which makes an HTTP request"
  src="/assets/images/posts/ios-cron-automation.jpg"
  style="margin: 0 auto; width: 100%; max-width: 400px;border:10px solid #fff;border-radius: 4px;box-shadow: 0 1px 1px 0 rgba(0,0,0,.1)"
/>

### Creating a GitHub Action cron in Shortcuts

1. Ensure your GitHub Action supports the [`workflow_dispatch` event](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)
2. Go to the **Automation** tab in Shortcuts
3. Press **+** for a new automation and pick **Personal Automation**
4. Choose **Time of Day** and select your schedule, then **Next**
5. Select **+ Add Action** then search for **Get Contents of URL**
6. Configure the HTTP request per the GitHub API docs
7. Done!

### Security Note

Although this was a fun workaround I wouldn't suggest storing secrets in Shortcuts permanently.

I’d love to see support added to Shortcuts for retrieving Keychain values, or even Bitwarden et al. adding similar functionality. Until then, one alternative I've seen is storing sensitive values [in a remote file, retrieved at Shortcut runtime](https://www.reddit.com/r/shortcuts/comments/ai4hu1/how_to_store_passwords_and_other_sensitive_data/). Another option might be creating a Lambda for Shortcuts to invoke, which in turn makes the request to GitHub.
