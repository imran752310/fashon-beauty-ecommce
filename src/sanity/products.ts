import {DocumentTextIcon} from '@sanity/icons'
// import { title } from 'process'
import {defineField, defineType} from 'sanity'
// import { types } from 'util'

export const product = defineType({
  name: 'product',
  type: 'document',
  title: 'product',

  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of Product'
    }),
    defineField({
      name: 'image',
      type: 'array',
      title: 'Products Image',
      of: [{type:'image'}]
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Description of Products'
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),

    defineField({
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string'
    }),

    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: {
        type: 'category'
        }
    }),
    
  ]

})











// import {DocumentTextIcon} from '@sanity/icons'
// import {defineArrayMember, defineField, defineType} from 'sanity'

// export const postType = defineType({
//   name: 'Product',
//   title: 'Product',
//   type: 'document',
//   icon: DocumentTextIcon,
//   fields: [
//     defineField({
//       name: 'name',
//       type: 'string',
//       title: 'Name of Product'
//     }),
//     defineField({
//       name: 'slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//       },
//     }),
//     defineField({
//       name: 'author',
//       type: 'reference',
//       to: {type: 'author'},
//     }),
//     defineField({
//       name: 'mainImage',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//       fields: [
//         {
//           name: 'alt',
//           type: 'string',
//           title: 'Alternative text',
//         }
//       ]
//     }),
//     defineField({
//       name: 'categories',
//       type: 'array',
//       of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
//     }),
//     defineField({
//       name: 'publishedAt',
//       type: 'datetime',
//     }),
//     defineField({
//       name: 'body',
//       type: 'blockContent',
//     }),
//   ],
//   preview: {
//     select: {
//       title: 'title',
//       author: 'author.name',
//       media: 'mainImage',
//     },
//     prepare(selection) {
//       const {author} = selection
//       return {...selection, subtitle: author && `by ${author}`}
//     },
//   },
// })
