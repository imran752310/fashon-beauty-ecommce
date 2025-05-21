
// export interface simplifiedProduct {
//     _id : string,
//     imageUrl: string,
//     price: number,
//     slug:string,
//     categoryName: string,
//     name : string,
// }

// export interface fullProduct {
//     price_id: string;
//     _id : string;
//     images: string;
//     price: number;
//     slug:string;
//     categoryName: string;
//     name : string;
//     description: string;
//     price_is: string;
// }


// export interface simplifiedProduct {
//     _id: string;
//     imageUrl: string;
//     price: number;
//     slug: string;
//     categoryName: string;
//     name: string;
//   }
  
//   export interface fullProduct {
//     _id: string;
//     images: any;
//     price: number;
//     slug: string;
//     categoryName: string;
//     name: string;
//     description: string;
//     price_id: string;
//   }

export interface SimplifiedProduct {
  salePrice: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  title: string;
  thumbnail: string ;
  id: Key | null | undefined;
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface FullProduct {
  _id: string;
  images: string[]; // Assuming images are stored as an array of URLs
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}
