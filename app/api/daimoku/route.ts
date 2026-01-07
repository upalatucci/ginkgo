import { NextResponse, NextRequest } from "next/server";
import { kv } from "@vercel/kv";

export async function GET() {
  const daimoku = await kv.get<number>("daimoku-ginkgo");

  return NextResponse.json(
    { message: "OK", daimoku: daimoku ?? 0 },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const numberDaimokuIncr = parseInt(body.daimoku);

  if (isNaN(numberDaimokuIncr))
    return NextResponse.json({ message: "Not a number" }, { status: 400 });

  const newDaimoku = await kv.incrby(
    "daimoku-ginkgo",
    numberDaimokuIncr as number
  );

  return NextResponse.json(
    { message: "OK", daimoku: newDaimoku },
    { status: 200 }
  );
}
