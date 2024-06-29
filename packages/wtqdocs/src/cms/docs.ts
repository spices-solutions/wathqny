/**
 * @type {import("tinacms").Collection}
 */
export default {
      name: "docs",
      label: "Docs",
      path: "src/content/docs",
      format: "json",
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
          name: "category",
          label: "Category",
          required: true,
        },
        {
          type: "number",
          name: "position",
          label: "Position",
          required: false,
        },
        {
          type: "reference",
          name: "authors",
          label: "Authors",
          collections: ["authors"],
          list: true,
        },
        {
          type: "boolean",
          name: "draft",
          label: "Draft",
          defaultValue: false,
        },
      ],
    }
    // {
    //   name: "title",
    //   label: "Title",
    //   type: "string",
    //   isTitle: true,
    //   required: true
    // },
    // {
    //   label: 'Categories',
    //   name: 'categories',
    //   type: 'string',
    //   required: true
    // },
    // {
    //   label: 'Position',
    //   name: 'position',
    //   type: 'number',
    // },
    // {
    //   label: 'Keywords',
    //   name: 'keywords',
    //   type: 'string',
    //   list: true,
    // },
    // {
    //   label: 'Description',
    //   name: 'description',
    //   type: 'string',
    // },
    // {
    //   type: "rich-text",
    //   label: "Post Body",
    //   name: "body",
    //   isBody: true,
    // },
  