import { NextResponse } from "next/server";
import { validateContactForm, type ContactFormData } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const errors = validateContactForm(body);
    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }
    // Production: send via Resend
    console.log("Contact form submission:", body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
