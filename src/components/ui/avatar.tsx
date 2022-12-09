import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Avatar = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex h-14 w-14 items-center justify-center rounded-full bg-gray-500 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Avatar;
