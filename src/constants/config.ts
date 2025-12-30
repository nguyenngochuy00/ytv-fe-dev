export const ODOO_CONFIG = {
  URL:
    process.env.NEXT_PUBLIC_ODOO_URL || "https://c29b92f1c760.ngrok-free.app/",
  DB: process.env.NEXT_PUBLIC_ODOO_DB || "admin_251217",
} as const;

export const SESSION_EXPIRES_IN = 2 * 60 * 60 * 1000; // 2 hours
