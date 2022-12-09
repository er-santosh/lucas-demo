import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const NavLink = ({
  href,
  className,
  children,
}: LinkProps & { className?: string; children: ReactNode }) => {
  return (
    <Link
      tabIndex={-1}
      className={twMerge("relative font-aerotype text-2xl", className)}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
