---
title: "Projects"
layout: "default"
---

<h1 class="text-2xl font-serif font-bold text-center my-8">Projects</h1>

<ul>
  {% for item in site.data.projects %}
    <li>
      <a class="flex items-center p-3 sm:p-4 rounded-md my-2 hover:bg-zinc-200" href="{{ item.link }}">
        <img src="{{ item.image }}" class="w-14 sm:w-16 h-auto">
        <div class="ml-6">
          <h3 class="font-serif text-lg sm:text-xl font-bold">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p style="font-size: .9rem;color: slategray;/">{{ item.tags | join: ", " }}</p>
        </div>
      </a>
    </li>
  {% endfor %}
</ul>