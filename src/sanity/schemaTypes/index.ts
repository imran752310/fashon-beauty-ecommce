import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../products'
import { category } from '../category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product],
}
