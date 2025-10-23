export interface MenuItem {
  name: string;
  price?: string;
  prices?: {
    '100g'?: string;
    '200g'?: string;
    '300g'?: string;
  };
  priceS?: string;
  priceM?: string;
  desc?: string;
}

export interface Subcategory {
  id?: string;
  title: string;
  items: MenuItem[];
}

export interface Category {
  id?: string;
  title: string;
  info?: string;
  subs: Subcategory[];
}
