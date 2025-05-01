"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { issueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoIosInformationCircleOutline } from "react-icons/io";
import SimpleMDE from "react-simplemde-editor";
import z from "zod";

type IssueFormData = z.infer<typeof issueSchema>;

interface Props {
  issue?: Issue;
}

const IssueForm = ({ issue }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (issue) await axios.patch("/api/issue/" + issue.id, data);
      else await axios.post("/api/issue", data);
      router.push("/issues/list");
      router.refresh() 
    } catch (error) {
      setIsSubmitting(false);
      setError("An expected error occured");
    }
  });
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
      <form className=" space-y-4" onSubmit={onSubmit}>
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        />

        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          defaultValue={issue?.description}
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {issue ? "Update issue" : "Submit new issue"}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
