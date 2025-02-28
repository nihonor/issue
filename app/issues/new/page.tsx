import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl p-5 space-y-4">
      <TextField.Root placeholder="Title" />
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
