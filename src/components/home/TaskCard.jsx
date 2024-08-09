"use client";
import { BsListTask } from "react-icons/bs";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "../ui/checkbox";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CustomDropdownMenu from "./dropdown-menu";
import Link from "next/link";
import PriorityBadge from "../task-details/priority-badge";

const TaskCard = ({ task }) => {
  return (
    <div className="mt-3 max-w-full p-4 bg-white hover:bg-blue-100 border border-blue-200 hover:border-blue-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <div className="flex items-center justify-between">
        {/* title here*/}
        <div className="flex items-center gap-x-3">
          <BsListTask size={18} className="text-blue-600" />
          <span href="#">
            <h5 className="text-base font-semibold tracking-tight text-gray-700 dark:text-white">
              {task?.title}
            </h5>
          </span>
        </div>

        {/*Custom Dropdown-menu */}
        <CustomDropdownMenu />
      </div>

      <Separator className="my-1" />

      {/* Due date & priority badge */}
      <div className="flex flex-row w-full h-4 my-2">
        <span className="text-xs text-neutral-700">
          Due Date: {task?.due_date}
        </span>
        <Separator orientation="vertical" className="mx-2" />
        {/* priority badge */}
        <PriorityBadge priority={task?.priority || ""} />
      </div>

      {/*Description here  */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="mb-3 text-sm font-light text-gray-500 dark:text-gray-400 text-ellipsis line-clamp-1">
              {task?.description || ""}
            </p>
          </TooltipTrigger>
          <TooltipContent className="w-64">
            {task?.description || ""}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/*task checkbox and view details */}
      <div className="flex h-5">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Mark the Task as completed
          </label>
        </div>
        <Separator orientation="vertical" className="mx-2" />
        <Link
          href={`/home/${task?.id}`}
          className="inline-flex font-medium items-center text-blue-600 hover:underline text-sm"
        >
          view task details
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
