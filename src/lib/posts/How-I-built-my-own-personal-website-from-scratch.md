---
title: How I built my own personal website from scratch
description: See how I learned about modern web development and applied those skills in creating my own personal website. Transitioning from a background in Python and SQL, I delved into the realms of HTML, CSS, JavaScript, and Svelte, among others. Through the ups and downs of creating a personal website, I've compiled a narrative rich with valuable resources, tech-stack choices, and insights that would be invaluable to anyone embarking on a similar journey into the web development sphere.
date: '2023-10-01'
readingLength: '10 min read'
categories:
  - Web Development
imageSrc: '/favicon.png'
imageAlt: 'Svelte Logo'
published: true
---

![Stable Diffusion - Ikea Computer Instructions](/How-I-created-my-own-personal-website-from-scratch/Ikea-coding.png)

## Table of Contents

## Introduction

As someone who recently ventured in the realm of self-employment, establishing an online presence became a necessity. I needed a place to showcase my professional journey, thoughts, and projects. Before I left my previous role, I discovered some of the amazing data visualizations that were created from a digital publication called '[The Pudding](https://pudding.cool/)'. I was fascinated by their design and clarity of presenting information and wanted to see how I could adapt this work to Internal Audit. Looking at the frequently asked questions page, I saw that they mentioned they heavily rely on the [D3.js](https://d3js.org/) JavaScript library and [Svelte](https://svelte.dev/), a front-end component-based framework. Since I needed a platform to present all of my work, learning how to use Svelte seemed like a great starting point.

Since Svelte is a tool for building web applications, it requires knowledge of HTML, CSS, and JavaScript. I did not have a lot prior experience in these languages (although I did spend some time working with HTML at my previous job!), so I decided it would be best to find an online resource to learn. After doing some digging, I found a website called [freeCodeCamp](https://www.freecodecamp.org/) where you can learn to code for free. I noticed they offer responsive web design and javascript certifications, which were a perfect starting point to learning how to develop modern web applications using Svelte.

After I got the handle on HTML, CSS, and JavaScript, it was time to switch over to Svelte and learn how to build high-performance web applications with a small footprint. Svelte conveniently has a [tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) that they offer which covers Svelte and SvelteKit (an application framework). I found the tutorial to be very helpful, but a little challenging at first. I went through everything presented in the tutorial, and would revisit it throughout the year as I learned to incorporate more features.

After covering the basics of HTML, CSS, and JavaScript as well as the front-end component-based framework, I was ready to start developing my own personal website.

## Choosing a Tech Stack

The world of web development is large, and there are plenty of tools that build upon the building blocks of HTML, CSS, and JavaScript. Notably, I found [TailwindCSS](https://tailwindcss.com/) a utility-first CSS framework that allows you to style your websites directly in your markup. I noticed that a lot of professional web developers prefer to use TailwindCSS in their projects, as it's easier to review and pick up after a break. Also, it makes responsive design (e.g. mobile and desktop) a breeze.

I also discovered something called [TypeScript](https://www.typescriptlang.org/). TypeScript is a programming language developed by Microsoft that is essentially JavaScript but with additional features. One of the key features of TypeScript is the support for static typing. This means you can specify the types of your variables, function parameters, and return values. This helps catch type-related errors at compile-time, rather than at runtime which is the case with plain JavaScript. For example, in plain JavaScript, you might write a simple function that adds two values together like this:

```js:Example.js
function add(a, b) {
    return a + b;
}

const sum = add(5, 3);  // returns 8
```

While this function will work, if you try to pass a non-number argument to the add function, you won't get any error until the code is executed, and even then, it might just result in unexpected behavior rather than an outright error.

However, using TypeScript, we can specify the types of the parameters 'a' and 'b' as 'number' as well as the return type of the function as a 'number', like so:

```ts:Example.ts
function add(a: number, b: number): number {
    return a + b;
}

const sum: number = add(5, 3);  // returns 8
```

This version of code allows for early error detection as well as the added benefit of making the code easier to read and understand. It was a perfect choice for my personal website, and became the scripting language of choice.

Now that I had the tools decided upon, time to start developing!

...almost.

## Design Process

This website is actually my fourth iteration, with each change building on skills learned in the previous versions. At first, I was so excited that I rushed into development, a started building out headers, footers, about pages etc. While this was a good learning experience, the final product did not look particularly great.

I decided to scrap what I had built, and use a UI toolkit. A UI toolkit is a collection of pre-built components and utilities that developers can use to build and style the interface of web applications more efficiently. I decided on using [Skeleton](https://www.skeleton.dev/), a UI toolkit for Svelte and TailwindCSS to help build out my website.

This was a great experience, and I learned a lot. I was able to use their buttons, form elements, modals, navigation bars etc. and implement them into my website fast. For example, if you wanted to implement a button, instead of writing all of the HTML, CSS, and JavaScript, you can just write:

```html:HTML
<button type="button" class="btn variant-filled">Button</button>
```

Super simple!

But, using this specific UI toolkit did have some drawbacks, specifically regarding limited customization. I was unable to customize to the extent which I liked, and it did not suit my needs for the unique brand of my website. Doing some more research, I found another UI toolkit, [TailwindUI](https://tailwindui.com/), by the creators of TailwindCSS which gives you complete control over the component code. This suited my use case better, and was the design choice going forward.

Before starting on my next iteration, I decided to draw out a rough draft of how my website was going to look. I've seen that a lot of developers prefer to use [Figma](https://figma.com) which is a collaborative web application design tool. They offer a free account, and I played around with the tools, but decided that it would be easiest and fastest to draw on my iPad. Here is the rough draft I came up with:

![Personal-website-wireframe](/How-I-created-my-own-personal-website-from-scratch/Personal-website-wireframe.png)

With a rough roadmap of how I wanted my website to look, and the skills to build it, I was now able to start development.

## Development Process

To start, I created a new Svelte project using the terminal commands provided on their website:

```sh:terminal
npm create svelte@latest personal-website
cd personal-website
npm install
npm run dev -- --open
```

The best part about using Svelte, is the ability to create components which are the building blocks of your application. They help in organizing the UI in reusable and manageable pieces. On my homepage, I use multiple components to separate out my hero, blog, projects, and newsletter sections. For example, in my home page, it looks something like this:

```svelte:src/routes/+page.svelte
<script>
import Hero from '$lib/components/Hero.svelte';
import Blog from '$lib/components/Blog.svelte';
import Projects from '$lib/components/Projects.svelte';
import Newsletter from '$lib/components/Newsletter.svelte';
</script>

<Hero />

<Blog />

<Projects />

<Newsletter />
```

As you can see, this is a much cleaner and easier format to view. Plus, if you ever need to modify a section, you can just pop into the respective component and make your updates there.

The continuing development was a long process of trial and error, writing code in a separate branch within the development environment, checking to see if the changes were to my liking, and then merging with my main branch and publishing to Github.

## Deployment

I've used [Vercel](https://vercel.com) to host and deploy my website. I like Vercel as they offer a generous hobbyist tier which allows you to host your own website for free. Also, they have the creator of Svelte, Rich Harris, working full-time for them on new features and updates for Svelte. The compatibility is great for my tech-stack and the choice has worked great so far.

## Conclusions & Key Takeaways

It was fairly tough and a long process of learning new technologies and techniques to get this idea realized. I'm happy with the way it turned out, and I'm excited to switch my focus over to new projects. I believe in the future, after I learn more about web development and build out my skills even more, I will redo my personal website.

If you're planning on learning web development, I'd recommend a similar path to what I chose. Start with learning the basics of HTML, CSS, and JavaScript. Then, learn a framework such as Svelte, React, Vue, Angular etc. Once you have these skills, you're able to start building functional and aesthetically pleasing web-applications.

## Technology Stack

The tools and technologies I used to build out this project:

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [Supabase](https://supabase.com/)
- [Superforms](https://superforms.rocks/)
- [Threlte](https://threlte.xyz/)
- [TailwindUI](https://tailwindui.com/)
- [Vercel](https://vercel.com/)

## Learning Resources

The learning resources that were particularly helpful in learning how to build out this project:

- [freeCodeCamp](https://www.freecodecamp.org/)
- [Learn Svelte - Full Course for Beginners](https://www.youtube.com/watch?v=UGBJHYpHPvA&)
- [Official Svelte Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte)
- [OpenAI Chat GPT-4](https://chat.openai.com/)
