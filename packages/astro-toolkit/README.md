# Astro Toolkit

A collection of Astro tools, components, and utilities to streamline your development process.

## SEO

### Head Component

The `BaseHead` component in Astro Toolkit simplifies the process of adding essential SEO tags to your HTML's `<head>` section. This includes OpenGraph, Twitter cards, canonical URLs, and more, saving you from manually configuring these tags for each page.

#### Usage

To use the `BaseHead` component, import it from `astro-toolkit/seo` and customize the SEO tags:

```jsx
---
import { BaseHead } from 'astro-toolkit/seo'
---

<BaseHead
  title="Your Page Title"
  description="Your page description"
  keywords={["keyword1", "keyword2", "astro-toolkit"]}
  OGImage={{ src: "/path/to/og-image.png", alt: "Image description" }}
  GSVToken="your-google-site-verification-token"
  extend={{
    link: [
      "./path/to/stylesheet.css",
      {
        href: "./path/to/another-stylesheet.css",
        rel: "stylesheet"
      },
      {
        href: "/path/to/font.woff2",
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    ],
  }}
/>
```

<details>
  <summary>HTML Output Example</summary>

  ```html
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <link rel="stylesheet" href="./path/to/stylesheet.css">
    <link href="./path/to/another-stylesheet.css" rel="stylesheet">
    <link href="/path/to/font.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous">
    <meta name="keywords" content="keyword1,keyword2,astro-toolkit">
    <meta name="description" content="Your page description">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://yourwebsite.com/page-url/">
    <meta property="og:description" content="Your page description">
    <meta property="og:image" content="/path/to/og-image.png">
    <meta property="og:image:alt" content="Image description">
    <meta property="og:title" content="Your Page Title">
    <meta property="og:site_name" content="Your Site Name">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourwebsite.com/page-url/">
    <meta name="twitter:title" content="Your Page Title">
    <meta name="twitter:image" content="/path/to/og-image.png">
    <meta name="twitter:image:alt" content="Image description">
    <meta name="twitter:description" content="Your page description">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="google-site-verification" content="your-google-site-verification-token">
  </head>
  ```
  
</details>

### Benefits

Using the `BaseHead` component saves you from manually configuring:
- OpenGraph tags for better social media sharing
- Twitter card tags to optimize content sharing on Twitter
- Canonical URLs to avoid duplicate content issues
- Google Site Verification tags
- Customizable link and meta tags through the `extend` property

### Extending Head Component with Slots

You can add additional actions inside the `<head>` section using slots within the `BaseHead` component.

```jsx
<BaseHead ... >
  <script is:inline>
    console.log("This script runs inline")
  </script>
</BaseHead>
```

<details>
  <summary>Type Interface</summary>
  
  ```ts
  type Props = {
    title?: string
    description?: string
    OGImage?: {
      src: string
      alt: string
    }
    keywords?: string | string[]
    sitemap?: boolean
    GSVToken: string
    robots: string
    extend?: {
      link?: Partial<Link>[]
      meta?: Partial<Meta>[]
    }
  }
  ```

</details>


## Utils

### formatDate

Formats a given date string into a more readable format.

#### Usage

```ts
import { formatDate } from 'astro-toolkit/utils'

// Example usage
formatDate("2024-07-08") // Outputs: July 8, 2024
```

### slugify, unslugify

Converts strings to URL-friendly slugs and back to their original form.

#### Usage

```ts
import { slugify, unslugify } from 'astro-toolkit/utils'

// Convert a string to a slug
slugify("Hello World") // Outputs: hello-world

// Convert a slug back to a string
unslugify("hello-world") // Outputs: Hello World
```

## Flow

### For Component

A component that loops through arrays and objects, rendering content for each item.

> **Note:** Don't forget to return your content to be rendered.

#### Usage

```astro
---
import { For } from 'astro-toolkit/flow'
---

<ul>
  <For each={[1, 2, 3]}>
    {(item, index) => (
      <li>{index}: {item}</li>
    )}
  </For>
</ul>
```

In this example, the `For` component iterates over the array `[1, 2, 3]`, rendering a list item for each element.

### With Object

The `For` component can also be used to iterate over object properties.

#### Usage

```astro
---
import { For } from 'astro-toolkit/flow'
---

<ul>
  <For each={{ a: 1, b: 2, c: 3 }}>
    {(value, key) => (
      <li>{key}: {value}</li>
    )}
  </For>
</ul>
```

## Actions

Easy-to-use view transition callback function to re-run your scripts when the page changes.

#### Usage

```astro
---
---

<script>
import { action } from 'astro-toolkit/actions'

action(() => {
  console.log("Re-run on page transition change")
})
</script>
```

In this example, the `action` function logs a message to the console whenever a page transition occurs.

## Additional Information

### Installation

To install Astro Toolkit, run the following command in your project directory:

```bash
npm install astro-toolkit
```

### Contribution

If you would like to contribute to the Astro Toolkit, please follow the guidelines in the [CONTRIBUTING.md](https://github.com/spices-solutions/wathqny/blob/astro-toolkit%400.1.0/packages/astro-toolkit/CONTRIBUTING.md)