import { IssueStatus } from "@/app/components";
import { Issue } from "@prisma/client";
import { Heading, Flex, Card } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetail = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue?.title}</Heading>

      <Flex gap="4" mt="4">
        <IssueStatus status={issue.status} />
        <div>{issue?.createdAt.toDateString()}</div>
      </Flex>

      <Card className="prose" mt="4">
        <ReactMarkdown>{issue?.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetail;
