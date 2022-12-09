/* eslint-disable jsx-a11y/alt-text */
import { Popover, Transition } from "@headlessui/react";
import type { ReactNode } from "react";
import { Fragment, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import DefaultCard from "../card/default-card";

interface DropdownMenuProps {
  triggerButton: ReactNode;
  className?: string;
  children?: ReactNode;
}

function DropdownMenu({
  triggerButton,
  className,
  children,
}: DropdownMenuProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = () => {
    setOpenState((openState) => !openState);
    buttonRef?.current?.click();
  };

  const onHover = (open: boolean, action: string) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      toggleMenu();
    }
  };

  const handleClickOutside = (event: any) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <Popover className="relative">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, "onMouseEnter")}
          onMouseLeave={() => onHover(open, "onMouseLeave")}
          className="flex flex-col"
        >
          <Popover.Button
            className={"flex items-center focus:outline-none"}
            ref={buttonRef}
          >
            {triggerButton}
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-10"
          >
            <Popover.Panel
              className={twMerge(
                "absolute top-14 right-0 z-50 w-40",
                className
              )}
            >
              <DefaultCard>{children}</DefaultCard>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}

export default DropdownMenu;
