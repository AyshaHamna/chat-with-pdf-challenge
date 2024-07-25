"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function PlaceHolderDocument() {
  const router = useRouter();

  const handleClick = () => {
    //check if user is pro or free
    router.push("dashboard/upload");
  };

  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-500"
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Add a document</p>
    </Button>
  );
}
export default PlaceHolderDocument;
