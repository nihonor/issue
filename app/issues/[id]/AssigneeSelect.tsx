"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Skeleton} from "@/app/components"

const AssigneeSelect = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });
  if(isLoading) return <Skeleton/>

  if (error) return null;
  //   const [users, setUsers] = useState<User[]>([]);
  //   useEffect(() => {
  //     const getUser = async () => {
  //       const { data } = await axios.get<User[]>("/api/users");
  //       setUsers(data);
  //     };
  //     getUser();
  //   }, []);
  return (
    <Select.Root>
      <Select.Trigger placeholder="assignee.." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggessions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
