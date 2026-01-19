import { NextResponse, NextRequest } from "next/server";
import { kv } from "@vercel/kv";

const DIALOGHI_KEY = "dialoghi-ginkgo";
const DIALOGHI_COUNT_KEY = "dialoghi-count-ginkgo";

export interface DialogoEntry {
  numero: number;
  nota: string;
  data: string;
}

export async function GET() {
  try {
    const count = await kv.get<number>(DIALOGHI_COUNT_KEY);
    const entries = await kv.lrange<DialogoEntry>(DIALOGHI_KEY, 0, -1);
    
    return NextResponse.json(
      { 
        message: "OK", 
        count: count ?? 0,
        entries: entries ?? []
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
    const numero = parseInt(body.numero);
    const nota = body.nota || "";

    if (isNaN(numero) || numero < 1 || numero > 1000) {
      return NextResponse.json(
        { message: "Numero non valido. Deve essere tra 1 e 1000" },
        { status: 400 }
      );
    }

    // Incrementa il contatore totale
    const newCount = await kv.incrby(DIALOGHI_COUNT_KEY, numero);

    // Salva l'entry con la nota
    const entry: DialogoEntry = {
      numero,
      nota: nota.trim(),
      data: new Date().toISOString(),
    };

    await kv.lpush(DIALOGHI_KEY, entry);

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
