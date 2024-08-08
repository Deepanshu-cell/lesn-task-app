import Navbar from "@/components/layout/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center w-[full]">{children}</div>
      <Navbar />
    </div>
  );
};

export default layout;
