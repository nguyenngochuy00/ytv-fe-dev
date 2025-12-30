import { NextRequest, NextResponse } from "next/server";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";
import { odooLogin } from "@/services/odoo";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Missing credentials" },
        { status: 400 }
      );
    }

    // Call Odoo login API
    const odooData = await odooLogin(email, password);

    if (odooData && odooData.uid) {
      const user = {
        id: odooData.uid.toString(),
        email: odooData.login || email,
        name: odooData.name || "User",
        company_id: odooData.company_id,
        partner_id: odooData.partner_id,
        odoo_session_id: odooData.session_id,
      };

      const expires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours
      const sessionToken = await encrypt({ user, expires });

      (await cookies()).set("session", sessionToken, {
        expires,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });

      return NextResponse.json({
        success: true,
        user,
        token: sessionToken,
        odoo_session_id: odooData.session_id,
      });
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch (error) {
    console.error("Login error:", error);
    const message =
      error instanceof Error ? error.message : "An error occurred during login";
    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 401 }
    );
  }
}
