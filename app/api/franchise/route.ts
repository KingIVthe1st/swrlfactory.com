import { NextResponse } from "next/server";
import { validateFranchiseForm, type FranchiseFormData } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body: FranchiseFormData = await request.json();
    const errors = validateFranchiseForm(body);
    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }
    // Production: send via Resend
    console.log("Franchise form submission:", body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
