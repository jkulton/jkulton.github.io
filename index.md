---
layout: default
---

<h2 class="mt-8 mb-1 font-serif text-xl">👋 Hey, I'm Jon</h2>

<p class="my-3 home-intro">I'm a Software Engineer from Ohio. I work at <a href="https://datadoghq.com" class="text-indigo-600">Datadog</a>, where I'm helping improve the reliability of the Metrics product. I have interests across the entire engineering stack, and I'm always up for working on something new.</p>

<hr class="my-7">

<h3 class="mt-2 mb-5 font-serif text-xl">Projects</h3>

<ul>
  {% for item in site.data.projects limit: 4 %}
    <li class="flex justify-between items-center my-3 flex-wrap sm:flex-nowrap">
      <a class="text-indigo-600 basis-full sm:basis-auto" href="{{ item.link }}">{{ item.title }}</a>
      <div class="text-sm text-slate-600">{{ item.description }}</div>
    </li>
  {% endfor %}

  <li class="flex justify-between items-center my-3">
    <a class="text-indigo-600" href="/projects">All projects →</a>
  </li>
</ul>