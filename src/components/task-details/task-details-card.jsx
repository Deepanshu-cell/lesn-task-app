import React from "react";
import { Separator } from "../ui/separator";
import PriorityBadge from "./priority-badge";
import { MapPin } from "lucide-react";
import CustomDropdownMenu from "../home/dropdown-menu";

const TaskDetailsCard = ({ selectedTask }) => {
  return (
    <div className="h-[calc(100vh-10rem)] rounded-md ml-8 mt-2 mb-20 bg-white dark:bg-neutral-600 w-full p-5">
      <div className="flex items-center justify-between mb-4 px-1">
        {/* due date , priority*/}
        <div className="flex items-center gap-x-2 h-3 mt-1">
          <span>Due Date : {selectedTask?.due_date || "NA"}</span>
          <Separator
            orientation="vertical"
            className="border border-neutral-300"
          />
          <PriorityBadge priority={selectedTask?.priority || ""} />
        </div>

        {/* location reminder */}
        <div className="flex items-center gap-x-1">
          <MapPin size={16} className="text-red-400 dark:text-blue-600" />
          <span className="text-blue-400 text-sm font-semibold">
            {selectedTask?.location_reminder || ""}
          </span>
          <CustomDropdownMenu />
        </div>

        {/* edit and delete actions */}
      </div>

      {/* Task description */}
      <div>
        <p className="text-neutral-500 dark:text-neutral-300">
          {selectedTask?.description || ""}
        </p>
        <br />

        {/* paragraph added for static data for demo purpose*/}
        <p className="text-neutral-500 dark:text-neutral-300">
          This paragraph is added for static data for demo purpose.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          voluptate id quo nihil non soluta aut tempore sapiente, alias cumque,
          error ipsa placeat optio vitae deleniti consectetur commodi quod,
          expedita provident recusandae culpa architecto maxime impedit.
          Sapiente vel, tenetur illum exercitationem laboriosam aperiam
          accusamus temporibus ullam beatae officia fugiat rerum voluptatem,
          animi libero maxime a odio amet culpa alias omnis neque dicta quia
          nisi! Laudantium necessitatibus, dicta vitae minima consequatur
          perspiciatis porro sunt blanditiis ad officia tempora laboriosam
          adipisci earum sed distinctio neque rerum labore exercitationem esse
          ab totam tenetur voluptatem nemo. In cum, eaque magnam officiis id at
          deleniti iste, perspiciatis atque voluptas vel voluptates voluptatum
          ex non modi reprehenderit ipsum aliquam, recusandae fugiat neque
          fugit. Debitis quos in itaque iure qui dicta assumenda, hic,
          necessitatibus vero autem voluptas quaerat incidunt ipsam laborum non
          fugit similique amet? Repellendus labore, magni itaque dignissimos
          recusandae odio deserunt porro eaque commodi iure?
        </p>
      </div>
    </div>
  );
};

export default TaskDetailsCard;
