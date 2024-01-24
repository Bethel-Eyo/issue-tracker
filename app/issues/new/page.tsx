import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

// ssr set to false means we don't want nextjs to render this on the server.
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
