export interface Food {
  id: string;
  name: string;
  price: number;
  tags?: string[];
  favorite: boolean;
  stars: number;
  imageUrl: string;
  origins: string[];
  cookTime: string;

  description?: string;
  images?: string[];
  category?: string;
  featured?: boolean;
  label?: string;
  date?: string;
}
