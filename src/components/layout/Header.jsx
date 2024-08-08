import React from "react";
import CustomBreadcrumb from "./Breadcrumb";

const Header = ({ breadcrumbArray, pageTitle }) => {
  return (
    <div className="header">
      <CustomBreadcrumb breadcrumbArray={breadcrumbArray} />
      <h2 className="text-2xl text-blue-600 mt-1">{pageTitle || ""}</h2>
    </div>
  );
};

export default Header;
