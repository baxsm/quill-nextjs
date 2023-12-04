import BillingForm from "@/components/BillingForm";
import { getUserSubscriptionPlan } from "@/lib/stripe";
import { FC } from "react";

const Page: FC = async () => {
  const subscriptionPlan = await getUserSubscriptionPlan();

  return (
    <BillingForm subscriptionPlan={subscriptionPlan}/>
  );
};

export default Page;
