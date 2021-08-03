import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Loading from "../../components/loading/loading";
import { useAuth } from "../../utils/context/auth-context";

interface PropsRemain {
  children: ReactElement;
}

export const Remain: React.FC<PropsRemain> = ({ children }) => {
  const router = useRouter();
  const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser !== null) router.push("/admin");
  }, []);
  return <div>{children}</div>;
};
