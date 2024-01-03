import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  Nome: string;
  Email: string;
  Telefone: string;
  Cidade: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as RequestBody;

    if (!body) {
      throw new Error('Request body is null');
    }

    const newUser = await db.user.create({
      data: {
        nome: body.Nome,
        email: body.Email,
        telefone: body.Telefone,
        cidade: body.Cidade,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'could not insert user' }, { status: 500 });
  }
}
