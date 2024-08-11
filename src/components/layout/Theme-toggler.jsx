import React from "react";
import { Button } from "../ui/button";
import { Sun } from "lucide-react";

const ThemeToggler = () => {
  return (
    <div className="absolute top-10 right-10">
      <Button
        size="sm"
        className="p-2 rounded-lg focus:outline-none bg-transparent hover:bg-neutral-200"
      >
        <Sun className="text-neutral-700" />
      </Button>
    </div>
  );
};

export default ThemeToggler;
