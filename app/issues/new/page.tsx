"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchemas";
import z from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof issueSchema>;

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(issueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
            setIsSubmitting(true);
            await axios.post("/api/issue", data);
            router.push("/issues");
          } catch (error) {
            setIsSubmitting(false)
            setError("An expected error occured");
          }
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />

        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          Submit New Issue {isSubmitting&&<Spinner/>} 
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
