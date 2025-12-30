export const ODOO_CONFIG = {
  URL: process.env.NEXT_PUBLIC_ODOO_URL || "http://localhost:8069",
  DB: process.env.NEXT_PUBLIC_ODOO_DB || "admin_251217",
} as const;

export const SESSION_EXPIRES_IN = 2 * 60 * 60 * 1000; // 2 hours
