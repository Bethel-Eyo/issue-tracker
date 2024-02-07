import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  /**Ideally we don't need the request parameter for this call, but if
   * we remove the parameter, nextjs will cache the output of this endpoint
   * so to prevent caching, we add the parameter back in.
   */
  const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(users);
}
