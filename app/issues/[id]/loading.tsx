import IssueStatus from "@/app/components/IssueStatus";
import { Box, Card, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="4" mt="4">
        <Skeleton width="5rem"/>
        <Skeleton width="8rem"/>
      </Flex>

      <Card className="prose" mt="4">
       <Skeleton count={3}/>
      </Card>
    </Box>
  );
};

export default loading;
