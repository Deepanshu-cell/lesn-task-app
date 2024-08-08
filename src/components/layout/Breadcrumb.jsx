import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const CustomBreadcrumb = ({ breadcrumbArray }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbArray?.map((item) => (
          <>
            <BreadcrumbItem>
              {item?.link ? (
                <Link
                  href={item?.link || "#"}
                  className="transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
                >
                  {item?.name || ""}
                </Link>
              ) : (
                <BreadcrumbPage>{item?.name || ""}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
