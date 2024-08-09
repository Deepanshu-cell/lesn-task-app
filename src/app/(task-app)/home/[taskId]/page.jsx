import Header from "@/components/layout/Header";
import TaskDetailsCard from "@/components/task-details/task-details-card";
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
    <div className="w-[40rem] text-left p-3">
      <Header
        breadcrumbArray={breadcrumbArray}
        pageTitle={selectedTask?.title || ""}
      />
      <TaskDetailsCard selectedTask={selectedTask}/>
    </div>
  );
};

export default page;
