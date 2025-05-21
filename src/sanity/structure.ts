import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Ectomere')
    .items([
        S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('product').title('product'),
   
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category','product',].includes(item.getId()!),
      ),
    ])
