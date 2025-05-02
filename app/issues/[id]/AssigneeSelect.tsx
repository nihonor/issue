"use client"
import { Select } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="assignee.." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggessions</Select.Label>
          <Select.Item value="1">Honore</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
