interface ProductDataType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
type ProductResponse = ProductDataType[];

export type { ProductDataType, ProductResponse };
