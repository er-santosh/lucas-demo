import React from "react";
import { twMerge } from "tailwind-merge";

type BorderedCardProps = React.ComponentPropsWithoutRef<"div">;

const BorderedCard = ({ className, children }: BorderedCardProps) => {
  return (
    <div
      className={twMerge(
        "rounded-xl border-4 border-white bg-gray-50 p-4 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};
export default BorderedCard;
