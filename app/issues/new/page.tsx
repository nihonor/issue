"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface NewIssueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<NewIssueForm>();
  const router = useRouter();
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl p-5">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Icon>
            <IoIosInformationCircleOutline />
          </Callout.Icon>
          <Callout.Text>Unexpected error occured</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issue", data);
            router.push("/issues");
          } catch (error) {
            setError("An expected error occured");
          }
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
