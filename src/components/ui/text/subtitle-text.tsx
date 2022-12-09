import type { ReactNode } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

export const SubTitleText = ({
  children,
  className,
}: { children: ReactNode } & React.ComponentPropsWithoutRef<"p">) => {
  return (
    <p
      className={twMerge(
        "pb-3 font-sans text-sm font-light text-gray-500",
        className
      )}
    >
      {children}
    </p>
  );
};
