export type ProductCategory =
  | 'all'
  | 'gian-phun-vien'
  | 'gian-phun-hoa'
  | 'thac-nuoc-bac'
  | 'ong-phun-cam-tay'
  | 'hop-qua-tet'
  | 'khac';

export type ProductOccasion =
  | 'tet'
  | 'dam-cuoi'
  | 'khai-truong'
  | 'sinh-nhat'
  | 'le-hoi';

export interface ProductSpecs {
  shotCount?: number;
  heightRange: string;
  duration: string;
  safeDistance: string;
  shelfLife: string;
  packaging: string;
}

export interface ProductEffects {
  colors: string[];
  description: string;
  soundType: 'Tiếng rít êm / Không tiếng nổ' | 'Lách tách vui tai' | 'Ánh sáng tĩnh lung linh';
  lightRadius: string;
}

export interface ProductMedia {
  thumbnail: string;
  gallery: string[];
  videoUrl?: string; // Video URL or placeholder
  videoType: 'actual' | 'illustration' | 'placeholder';
  videoSourceTitle?: string;
  badge?: string;
  isRealStorePhoto?: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  price: number | null; // null means 'Liên hệ để biết giá'
  originalPrice?: number | null;
  packagingColor?: 'cam' | 'xanh' | 'đỏ' | 'tiêu chuẩn';
  specs: ProductSpecs;
  effects: ProductEffects;
  occasions: ProductOccasion[];
  media: ProductMedia;
  inStock?: boolean;
  featured?: boolean;
  verifiedRealPhoto?: boolean;
  legalNotice: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderRequestForm {
  fullName: string;
  phone: string;
  deliveryArea: string;
  specificAddress?: string;
  preferredContact: 'zalo' | 'phone_call';
  notes?: string;
  isOver18Confirmed: boolean;
  hasReadSafetyGuidelines: boolean;
}

export interface StoreProfile {
  storeName: string;
  brandTagline: string;
  ownerName: string;
  hotline: string;
  hotlineDisplay: string;
  zaloPhone: string;
  zaloUrl: string;
  address: string;
  serviceArea: string;
  workingHours: string;
  email: string;
  domain: string;
  isAuthorizedAgent: boolean;
  authorizationInfo?: string;
  legalDisclaimer: string;
}
