import Link from "next/link";
import { twMerge } from "tailwind-merge";

const buttonStyles = {
  outlined: "border",
  text: "",
  raised: "shadow-lg",
};
const buttonColors = {
  default: "bg-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  primary: "bg-primary hover:bg-primary-light text-white",
};

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "text" | "outlined" | "raised";
  color?: "default" | "success" | "warning" | "danger" | "primary";
  as?: "link" | "button";
  href?: string;
}

const Button = ({
  children,
  className,
  variant = "outlined",
  color = "default",
  as = "button",
  href,
  ...other
}: ButtonProps) => {
  const classes = twMerge(
    "flex items-center px-6 py-2 rounded-md",
    buttonStyles[variant],
    buttonColors[color],
    className
  );

  if (as == "link" && href)
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );

  return (
    <button {...other} className={classes}>
      {children}
    </button>
  );
};

export default Button;
