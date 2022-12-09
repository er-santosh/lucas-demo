import Link from "next/link";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const AsideLink = ({
  children,
  as = "link",
  href,
}: {
  children: ReactNode;
  as?: "button" | "link";
  href?: string;
}) => {
  const classes = twMerge(
    "flex w-full items-center justify-between border-b py-3 font-faro text-xl"
  );

  if (as === "link" && href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <a className={classes}>{children}</a>;
};
