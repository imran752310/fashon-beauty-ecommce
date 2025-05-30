import {defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  type: "document",
  title: "Categories",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name of Category",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Products Image",
    }),
     defineField({
      name: "text",
      type: "string",
      title: "Name of Description",
    }),
  ],
});
