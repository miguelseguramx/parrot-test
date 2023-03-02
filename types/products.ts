export enum Availability {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
}

export interface ProductCategory {
  uuid: string,
  name: string,
  sortPosition: number,
  products: Array<Product>
}

export interface Product {
  uuid: string,
  name: string,
  description: string,
  imageUrl: string,
  legacyId: string,
  price: string,
  alcoholCount: number,
  soldAlone: Boolean,
  availability: Availability,
  providerAvailability: null,
  category: ProductCategory
}


