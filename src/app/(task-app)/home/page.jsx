import Searchbar from "@/components/home/Searchbar";
import TaskCard from "@/components/home/TaskCard";
import Header from "@/components/layout/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TasksArray } from "@/lib/data";
import React from "react";
const breadcrumbArray = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Task Manager",
  },
];

const page = () => {
  return (
    <div className="w-[48rem] text-left p-3">
      <Header breadcrumbArray={breadcrumbArray} pageTitle={"Task Manager"} />
      <div className="search-container my-1">
        <Searchbar />
      </div>

      <div className="mt-3">
        <ScrollArea className="h-[calc(100vh-10rem)] rounded-md px-3">
          {TasksArray?.map((task) => (
            <TaskCard task={task} key={task?.id} />
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default page;
