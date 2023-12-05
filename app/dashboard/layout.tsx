import { FC, ReactNode } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = async ({ children }) => {
  const { isAuthenticated } = getKindeServerSession();

  const isAuth = await isAuthenticated();

  if (!isAuth) {
    redirect("/login");
  }

  return <>{children}</>;
};

export default layout;
