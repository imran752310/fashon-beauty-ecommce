import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  type: 'document',
  title: 'Categories',
 fields: [
{
      name: 'name',
      type: 'string',
      title: 'Name of Category'
    },
{
        name: 'image',
        type: 'image',
        title: 'Products Image'
    },
  ],
})
