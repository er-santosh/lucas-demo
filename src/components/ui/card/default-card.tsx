import React from "react";
import { twMerge } from "tailwind-merge";

type DefaultCardProps = React.ComponentPropsWithoutRef<"div">;

const DefaultCard = ({ className, children }: DefaultCardProps) => {
  return (
    <div className={twMerge("rounded-xl bg-gray-50 p-4 shadow-lg", className)}>
      {children}
    </div>
  );
};
export default DefaultCard;
