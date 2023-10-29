import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { herosId: number } }
) {
  const herosId = params.herosId;
  const res = await fetch(
    `http://homologacao3.azapfy.com.br/api/ps/metahumans/${herosId}`
  );

  if (!res.ok) {
    throw new Error("Erro na requisição");
  }

  const data = await res.json();
  return NextResponse.json({ data });
}
