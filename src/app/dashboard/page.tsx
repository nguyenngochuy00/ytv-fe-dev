import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { DashboardStats } from "@/components/organisms/DashboardStats";
import { DashboardSummary } from "@/components/organisms/DashboardSummary";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <DashboardTemplate userName={session.user.name}>
      <DashboardStats />
      <DashboardSummary userName={session.user.name} />
    </DashboardTemplate>
  );
}
