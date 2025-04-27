import IssueStatus from "@/app/components/IssueStatus";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import IssueButton from "../IssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetail from "./IssueDetail";

interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <IssueDetail issue={issue}/>
      </Box>
      <Box>
      <EditIssueButton issueId={issue.id}/>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
