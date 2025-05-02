'use client'
import React, { PropsWithChildren } from "react";
import {
  QueryClientProvider as ReactQueryClient,
  QueryClient,
} from "@tanstack/react-query";

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return <ReactQueryClient client={queryClient}>{children}</ReactQueryClient>;
};

export default QueryClientProvider;
