import DashboardLeft from "./dashboardLeft/DashboardLeft";
import DashboardMiddle from "./dashboardMiddle/DashboardMiddle";
import DashboardRight from "./dashboardRight/DashboardRight";

export default function Dashboard() {
  return (
    <div className="flex max-w-full max-h-full">
      <DashboardLeft />
      <DashboardMiddle />
      <DashboardRight />
    </div>
  );
}
