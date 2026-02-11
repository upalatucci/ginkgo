import { NextResponse, NextRequest } from "next/server";
import { kv } from "@vercel/kv";

const CANZONE_KEY = "canzone-contributi-ginkgo";
const CANZONE_COUNT_KEY = "canzone-count-ginkgo";

export interface CanzoneEntry {
  testo: string;
  data: string;
}

export async function GET() {
  try {
    const [count, entries] = await Promise.all([
      kv.get<number>(CANZONE_COUNT_KEY),
      kv.lrange<CanzoneEntry>(CANZONE_KEY, 0, -1),
    ]);
    return NextResponse.json(
      {
        message: "OK",
        count: count ?? 0,
        entries: entries ?? [],
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const testo = (body.testo || "").trim();

    if (!testo) {
      return NextResponse.json(
        { message: "Il contributo non può essere vuoto" },
        { status: 400 }
      );
    }

    const wordCount = testo.split(/\s+/).filter(Boolean).length;
    if (wordCount > 3000) {
      return NextResponse.json(
        { message: "Il contributo non può superare 3000 parole" },
        { status: 400 }
      );
    }

    const entry: CanzoneEntry = {
      testo,
      data: new Date().toISOString(),
    };

    await kv.lpush(CANZONE_KEY, entry);
    const newCount = await kv.incr(CANZONE_COUNT_KEY);

    return NextResponse.json(
      { message: "OK", count: newCount },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: String(error) },
      { status: 500 }
    );
  }
}
