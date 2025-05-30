export interface SimplifiedProduct {
  title: string;
  urlFor: string ;
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
}

export interface FullProduct {
  title: string;
  imageUrl: string ;
  _id: string;
  images: string[]; // Assuming images are stored as an array of URLs
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}
