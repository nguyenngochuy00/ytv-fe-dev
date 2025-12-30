import { ODOO_CONFIG } from "@/constants/config";

const { URL: ODOO_URL, DB: ODOO_DB } = ODOO_CONFIG;

export async function odooCall(
  path: string,
  params: Record<string, unknown> = {},
  sessionId?: string
) {
  const url = `${ODOO_URL}${path}`;

  const body = {
    jsonrpc: "2.0",
    method: "call",
    params: {
      ...params,
      db: params.db || ODOO_DB,
    },
  };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (sessionId) {
    headers["Cookie"] = `session_id=${sessionId}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(
      `Odoo API Error: ${response.status} ${response.statusText}`,
      text
    );
    throw new Error(`HTTP error! status: ${response.status} - ${text}`);
  }

  let data;
  try {
    data = await response.json();
  } catch {
    const text = await response.text();
    console.error("Failed to parse Odoo response:", text);
    throw new Error("Invalid JSON response from Odoo");
  }

  if (data.error) {
    console.error("Odoo Logic Error:", data.error);
    throw new Error(data.error.message || "Odoo API Error");
  }

  return data.result;
}
