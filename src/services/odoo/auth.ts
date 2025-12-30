import { ODOO_CONFIG } from "@/constants/config";
import { odooCall } from "./client";

const { DB: ODOO_DB } = ODOO_CONFIG;

export async function odooLogin(login: string, password: string, db?: string) {
  const result = await odooCall("/web/session/authenticate", {
    login,
    password,
    db: db || ODOO_DB,
  });

  return result;
}

export async function odooGetSession(sessionId?: string) {
  const result = await odooCall("/api/auth/session", {}, sessionId);
  if (!result?.success) {
    throw new Error(result?.error?.message || "Session check failed");
  }
  return result.data;
}

export async function odooLogout(sessionId?: string) {
  const result = await odooCall("/api/auth/logout", {}, sessionId);
  if (!result?.success) {
    throw new Error(result?.error?.message || "Logout failed");
  }
  return result.data;
}
