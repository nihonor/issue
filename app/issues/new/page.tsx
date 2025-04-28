import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
import IssueForm from "@/app/issues/_components/IssueForm";

// const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
//   ssr: false,
//   // loading: () => <IssueFormSkeleton />,
// });
const NewIssuePage = () => {
  return (
    <div>
      <IssueForm />
    </div>
  );
};

export default NewIssuePage;
