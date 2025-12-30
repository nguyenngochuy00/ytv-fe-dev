import { odooCall } from "./client";

export async function odooSearch(
  model: string,
  domain: unknown[] = [],
  fields: string[] = [],
  options: { limit?: number; offset?: number; order?: string } = {},
  sessionId?: string
) {
  const result = await odooCall(
    `/api/${model}/search`,
    {
      domain,
      fields,
      ...options,
    },
    sessionId
  );
  if (!result?.success) {
    throw new Error(
      result?.error?.message || `Search failed for model ${model}`
    );
  }
  return result.data;
}

export async function odooRead(
  model: string,
  id: number,
  fields: string[] = [],
  sessionId?: string
) {
  const result = await odooCall(
    `/api/${model}/read/${id}`,
    {
      fields,
    },
    sessionId
  );
  if (!result?.success) {
    throw new Error(
      result?.error?.message || `Read failed for model ${model} id ${id}`
    );
  }
  return result.data;
}

export async function odooCreate(
  model: string,
  data: Record<string, unknown>,
  sessionId?: string
) {
  const result = await odooCall(
    `/api/${model}/create`,
    {
      data,
    },
    sessionId
  );
  if (!result?.success) {
    throw new Error(
      result?.error?.message || `Create failed for model ${model}`
    );
  }
  return result.data;
}
