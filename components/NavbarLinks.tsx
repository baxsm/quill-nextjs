"use client";

import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { ArrowRight } from "lucide-react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import UserAccountNav from "./UserAccountNav";
import { getUserSubscriptionPlan } from "@/lib/stripe";

interface NavbarLinksProps {
  user: KindeUser | null;
  subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>;
}

const NavbarLinks: FC<NavbarLinksProps> = ({ user, subscriptionPlan }) => {
  return (
    <MaxWidthWrapper>
      <div className="flex h-14 items-center justify-between border-b border-zinc-200">
        <Link href="/" className="flex z-40 font-semibold">
          <span>quill.</span>
        </Link>
        {/** TODO: Mobile navbar */}
        <div className="hidden items-center space-x-4 sm:flex">
          {!user ? (
            <>
              <Link
                href="/pricing"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Sign in
              </LoginLink>
              <RegisterLink className={buttonVariants({ size: "sm" })}>
                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
              </RegisterLink>
            </>
          ) : (
            <>
              <Link
                href="/pricing"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Pricing
              </Link>
              <UserAccountNav
                subscriptionPlan={subscriptionPlan}
                email={user?.email ?? ""}
                imageUrl={user?.picture ?? ""}
                name={
                  !user.given_name || !user.family_name
                    ? "Your Account"
                    : `${user.given_name} ${user.family_name}`
                }
              />
            </>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default NavbarLinks;
