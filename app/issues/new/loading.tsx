import { Box, Button } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className="max-w-xl p-5">
      <Box className="max-w-2xl">
        <Skeleton height="2rem" />
        <Skeleton height="20rem" />
      </Box>

      
    </div>
  );
};

export default loading;
