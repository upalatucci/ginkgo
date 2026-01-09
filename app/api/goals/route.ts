import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

const GOALS_KEY = "obiettivi-ginkgo";

const getGoals = () => kv.lrange(GOALS_KEY, 0, -1);

const addGoal = (goal: string) => kv.lpush(GOALS_KEY, goal);

export async function GET() {
  try {
    const goals = await getGoals();
    return NextResponse.json({ goals });
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

    await addGoal(body.goal);

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
