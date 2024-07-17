# Astro Toolkit

A collection of Astro tools, components, and utilities to streamline your development process.

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

### Importing

You can import specific utilities, components, and actions as needed:

```ts
import { formatDate, slugify, unslugify } from 'astro-toolkit/utils'
import { For } from 'astro-toolkit/flow'
import { action } from 'astro-toolkit/actions'
```

### Contribution

If you would like to contribute to the Astro Toolkit, please follow the guidelines in the [CONTRIBUTING.md](https://github.com/spices-solutions/wathqny/blob/astro-toolkit%400.1.0/packages/astro-toolkit/CONTRIBUTING.md)