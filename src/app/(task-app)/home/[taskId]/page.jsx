import Header from "@/components/layout/Header";
import { TasksArray } from "@/lib/data";
import React from "react";

const breadcrumbArray = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Task Details",
  },
];

const page = ({ params }) => {
  // Getting details of current selected task, we can also call an api with SWR in case of dynamic data
  const selectedTask = TasksArray?.find(
    (task) => params?.taskId === task?.id?.toString()
  );

  return (
    <div className="w-[32rem] text-left p-3">
      <Header
        breadcrumbArray={breadcrumbArray}
        pageTitle={selectedTask?.title || ""}
      />
    </div>
  );
};

export default page;
