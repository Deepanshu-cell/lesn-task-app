import { TaskDistributionChart } from "@/components/dashboard/task-distrubution-chart";
import { TaskPriorityChart } from "@/components/dashboard/task-priority-chart";
import Header from "@/components/layout/Header";
import React from "react";

const breadcrumbArray = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Dashboard",
  },
];


const page = () => {
  return (
    <div className="w-[48rem] text-left p-3">
      <Header breadcrumbArray={breadcrumbArray} pageTitle={"Dashboard"} />

      {/* Dashboard Charts starts here */}
      <div className="h-[calc(100vh-10rem)] rounded-md mt-2 mb-20 bg-white dark:bg-neutral-600 w-full p-5">

        <div className="grid md:grid-cols-2 grid-cols-1">
        {/* Chart for completed tasks, pending tasks, and task priority distribution -Pie Chart*/}
        <TaskDistributionChart />

        {/* Chart for Task priority Distribution */}
        <TaskPriorityChart/>
        </div>
      </div>
    </div>
  );
};

export default page;
