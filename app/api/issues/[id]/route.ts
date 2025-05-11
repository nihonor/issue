import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const issueId = parseInt(params.id);
  
  if (isNaN(issueId))
    return NextResponse.json({ error: "Invalid issue ID" }, { status: 400 });



  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });

  if (!issue)
    return NextResponse.json({ error: "Issue not found" }, { status: 404 });

  await prisma.issue.delete({
    where: { id: issueId },
  });

  return NextResponse.json({});
} 