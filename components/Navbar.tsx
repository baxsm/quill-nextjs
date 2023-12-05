import { FC } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarLinks from "./NavbarLinks";
import { getUserSubscriptionPlan } from "@/lib/stripe";

const Navbar: FC = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const subscriptionPlan = await getUserSubscriptionPlan();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <NavbarLinks user={user} subscriptionPlan={subscriptionPlan} />
    </nav>
  );
};

export default Navbar;
