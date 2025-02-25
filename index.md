---
layout: default
---

<p class="my-6 home-intro">👋 Hey, I'm Jon. I'm a Software Engineer. Right now I work at <a href="https://datadoghq.com" class="text-indigo-600 hover:underline">Datadog</a>, where I'm helping improve the reliability of the Metrics product.</p>

<hr class="my-6">

<h3 class="mb-3 font-serif text-xl">Writing</h3>

<ul>
  {% for post in site.posts %}
    <li class="flex justify-between items-center my-3" data-class="sm:mb-6">
      <a class="text-indigo-600" href="{{ post.url }}">{{ post.title }}</a>
      <div class="tabular-nums text-slate-600 text-sm">{{ post.date | date: "%b %Y" }}</div>
    </li>
  {% endfor %}
</ul>
 
<hr class="my-6">

<h3 class="mb-3 font-serif text-xl">Projects</h3>

<ul>
  {% for item in site.data.projects limit: 10 %}
    <li class="flex justify-between items-center my-3 flex-wrap sm:flex-nowrap">
      <a class="text-indigo-600 basis-full sm:basis-auto hover:underline" href="{{ item.link }}">{{ item.title }}</a>
      <div class="text-sm text-slate-600">{{ item.description }}</div>
    </li>
  {% endfor %}
</ul>