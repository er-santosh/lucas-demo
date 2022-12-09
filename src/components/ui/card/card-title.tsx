import type { ReactNode } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

const CardTitle = ({
  children,
  className,
}: { children: ReactNode } & React.ComponentPropsWithoutRef<"h1">) => {
  return (
    <h1 className={twMerge("pb-3 font-faro text-xl text-black", className)}>
      {children}
    </h1>
  );
};

export default CardTitle;
