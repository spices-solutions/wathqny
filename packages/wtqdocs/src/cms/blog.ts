/**
 * @type {import("tinacms").Collection}
 */
export default {
  name: "blog",
  label: "Blog",
  path: "src/content/blog",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      ui: {
        validate: (value) => value.length <= 60 || "It can't be more than 60 characters",
      },
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
      ui: {
        validate: (value) => value.length <= 160 || "It can't be more than 160 characters",
      },
    },
    {
      type: "string",
      name: "href",
      label: "Href",
      required: false,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      fields: [
        {
          type: "string",
          name: "src",
          label: "Source",
          required: true,
        },
        {
          type: "string",
          name: "alt",
          label: "Alt Text",
          required: true,
        },
      ],
    },
    {
      type: "string",
      name: "keywords",
      label: "Keywords",
      list: true,
    },
    {
      type: "string",
      name: "authors",
      label: "Authors",
    },
    {
      type: "datetime",
      name: "pubDate",
      label: "Publish Date",
      required: true,
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
      defaultValue: false,
    },
    {
      type: 'rich-text',
      label: 'docs content',
      name: 'body',
      isBody: true,
    },
  ],
}