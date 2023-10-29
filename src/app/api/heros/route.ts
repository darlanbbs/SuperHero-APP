import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch(
    "http://homologacao3.azapfy.com.br/api/ps/metahumans"
  );

  if (!res.ok) {
    throw new Error("Erro na requisição");
  }

  const data = await res.json();
  return NextResponse.json({ data });
}
