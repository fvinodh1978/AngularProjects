export interface ProductTemplate {
    id: number,
    name: string,
    price: string,
    category: string,
    colors: string[],
    imageUrl: string,
    discount: number,
    isAvailable: boolean
  }