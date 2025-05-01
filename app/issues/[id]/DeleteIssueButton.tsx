"use client";
import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const deleteIssue = () => {
    try {
      setIsDeleting(true)
      axios.delete("/api/issues/" + issueId);
      router.push("/issues/list");
      router.refresh();
    } catch (error) {
      setIsDeleting(false)
      setError(true);
    }
  };
  const router = useRouter();
  const [error, setError] = useState(false);
  const[isDeleting,setIsDeleting]=useState(false);
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" disabled={isDeleting}>Delete issue
            {isDeleting&&<Spinner/>}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue?
          </AlertDialog.Description>
          <Flex gap="4">
            <AlertDialog.Cancel>
              <Button color="gray" variant="soft">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={deleteIssue}>
                Confirm deletion
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This could not be deleted
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            mt="4"
            onClick={() => setError(false)}
          >
            Ok
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
