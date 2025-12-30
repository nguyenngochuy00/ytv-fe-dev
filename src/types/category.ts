export interface CategoryProduct {
  id: number | string;
  name: string;
  price: number;
  image: string;
}

export interface SubCategory {
  id: string;
  name: string;
  icon: string;
  items: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  children: SubCategory[];
  bestSellers: CategoryProduct[];
}
