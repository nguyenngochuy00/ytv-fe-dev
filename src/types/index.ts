export interface Product {
  id: number | string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image?: string;
  image_url?: string;
}

export interface OdooProduct {
  id: number;
  name: string;
  display_name: string;
  list_price: number;
  default_code: string;
  image_url?: string;
  categ_id?: {
    id: number;
    name: string;
  };
}

export interface OdooCategory {
  id: number;
  name: string;
  display_name: string;
  parent_id?: number | null;
  child_ids?: number[];
}

export interface User {
  id: string;
  email: string | null;
  name: string;
  company_id?: number;
  partner_id?: number;
  odoo_session_id?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export interface NavItem {
  label: string;
  hasDropdown: boolean;
  active?: boolean;
  href?: string;
}
