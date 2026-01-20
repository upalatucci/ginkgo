import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

const DOMANDE_KEY = "domande-ginkgo";

const getDomande = () => kv.lrange(DOMANDE_KEY, 0, -1);

const addDomanda = (domanda: string) => kv.lpush(DOMANDE_KEY, domanda);

export async function GET() {
  try {
    const domande = await getDomande();
    return NextResponse.json({ domande });
  } catch (error) {
    console.error(
      "Errore durante il recupero delle domande su Redis:",
      error
    );
    return NextResponse.json(
      { error: "Errore interno del server." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    await addDomanda(body.domanda);

    return NextResponse.json({
      message: "Domanda salvata con successo su Redis.",
    });
  } catch (error) {
    console.error(
      "Errore durante il salvataggio della domanda su Redis:",
      error
    );
    return NextResponse.json(
      { error: "Errore interno del server." },
      { status: 500 }
    );
  }
}
