"use client";

import { useUser } from "@clerk/nextjs";
import { db } from "@/firebase";
import { collection, doc } from "firebase/firestore";
import { Files } from "lucide-react";
import { use, useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

//number of docs the user is allowed to have
const FREE_LIMIT = 2;
const PRO_LIMIT = 20;

function useSubscription() {
  const [hasActiveMembership, setHasActiveMembership] = useState(null);
  const [isOverFileLimit, setIsOverFileLimit] = useState(false);
  const { user } = useUser();

  // Listen to the user document
  const [snapshot, loading, error] = useDocument(
    user && doc(db, "users", user?.id),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  // Listen to the user's files collection
  const [fileSnapshot, filesLoading] = useCollection(
    user && collection(db, "users", user?.id, "files")
  );

  useEffect(() => {
    if (!snapshot) return;

    const data = snapshot.data();
    if (!data) return;

    setHasActiveMembership(data.hasActiveMembership);
  }, [snapshot]);

  useEffect(() => {
    if (!fileSnapshot || hasActiveMembership === null) return;

    const files = fileSnapshot.docs;
    const usersLimit = hasActiveMembership ? PRO_LIMIT : FREE_LIMIT;

    console.log(
      "Checking if user is over file limit",
      files.length,
      usersLimit
    );

    setIsOverFileLimit(files.length >= usersLimit);
  }, [fileSnapshot, hasActiveMembership, PRO_LIMIT, FREE_LIMIT]);

  return { hasActiveMembership, loading, error, isOverFileLimit, filesLoading };
}
export default useSubscription;
