import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const CustomDropdownMenu = ({ task }) => {
  const router = useRouter();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical size={15} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>⌘ Task Actions</DropdownMenuLabel>
          <DropdownMenuSeparator className="border border-neutral-300 dark:border-neutral-500" />
          <DropdownMenuItem
            className="flex justify-between"
            onClick={() => router.push(`/task/${task?.id}`)}
          >
            <span>Edit</span>
            <span>
              <Pencil
                size={16}
                className="text-green-500 dark:text-green-600 cursor-pointer"
              />
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            <span>Delete</span>
            <span>
              <Trash2
                size={16}
                className="text-red-500 dark:text-red-600 cursor-pointer"
              />
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CustomDropdownMenu;
