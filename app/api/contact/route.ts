import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  const name = payload.name?.trim() || "";
  const email = payload.email?.trim() || "";
  const subject = payload.subject?.trim() || "";
  const message = payload.message?.trim() || "";

  if (name.length < 2 || !isValidEmail(email) || subject.length < 4 || message.length < 20) {
    return NextResponse.json(
      {
        message: "Datos incompletos o invalidos.",
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: "Mensaje recibido correctamente (modo simulado).",
    receivedAt: new Date().toISOString(),
  });
}
