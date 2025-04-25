import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";
const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  CLOSED: { label: "Open", color: "green" },
  IN_PROGRESS: { label: "In progress", color: "violet" },
  OPEN: { label: "Open", color: "red" },
};
const IssueStatus = ({ status }: { status: Status }) => {
  return <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>;
};

export default IssueStatus;
