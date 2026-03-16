export interface GeneratedDesign {
  id: string;
  prompt: string;
  imageUrl: string;
  palette: string[];
  tag: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  mockupType: 'tshirt' | 'hoodie' | 'tote' | 'poster';
  price: number;
}

export type GenerationStatus = 'idle' | 'generating' | 'done' | 'error';
