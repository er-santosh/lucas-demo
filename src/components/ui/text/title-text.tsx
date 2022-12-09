import type { ReactNode } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

export const TitleText = ({
  children,
  className,
}: { children: ReactNode } & React.ComponentPropsWithoutRef<"h1">) => {
  return (
    <h1 className={twMerge("pb-3 font-faro text-4xl text-black", className)}>
      {children}
    </h1>
  );
};
