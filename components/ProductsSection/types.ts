export type ProductTone =
  | 'aqua'
  | 'blue'
  | 'orange'
  | 'lime'
  | 'violet'
  | 'sky'
  | 'coral'
  | 'teal';
export type Product = {
  name: string;
  description: string;
  tag?: string;
  tone: ProductTone;
  code: string;
};
