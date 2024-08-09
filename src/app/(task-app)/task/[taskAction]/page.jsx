import Header from "@/components/layout/Header";
import { TaskForm } from "@/components/task-form/TaskForm";
import React from "react";

const page = ({ params }) => {
  const breadcrumbArray = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: params?.taskAction === "add" ? "Add Task" : "Edit Task",
    },
  ];

  return (
    <div className="w-[48rem] text-left p-3">
      <Header
        breadcrumbArray={breadcrumbArray || []}
        pageTitle={params?.taskAction === "add" ? "Add Task" : "Edit Task"}
      />

      <TaskForm />
    </div>
  );
};

export default page;
