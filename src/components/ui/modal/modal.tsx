import { Dialog, Transition } from "@headlessui/react";
import type { ReactNode } from "react";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import type { ModalProps } from "./modal-toggle";

interface IModal extends ModalProps {
  children: ReactNode;
  modalClasses?: string;
  modalContentClasses?: string;
  position?: "left" | "right" | "top" | "bottom" | "center";
  animate?: "scale" | "translate";
  animateOrigin?: "left" | "right" | "top" | "bottom";
}

function Modal({
  children,
  modalClasses,
  modalContentClasses,
  position = "center",
  animate = "translate",
  animateOrigin = "top",
  isModalOpen,
  toggleModal,
}: IModal) {
  const classes = ["fixed"];
  switch (position) {
    case "left":
      classes.push("top-0 left-0");
      break;
    case "right":
      classes.push("top-0 right-0");
      break;
    case "top":
      classes.push("inset-0");
      break;
    case "bottom":
      classes.push("bottom-0 left-0 right-0");
      break;
    case "center":
      classes.push("left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2");
      break;
    default:
      classes.push("left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2");
      break;
  }

  let enterFrom = "";
  let leaveFrom = "";

  if (animate === "scale") {
    enterFrom = "scale-95";
    leaveFrom = "scale-100";
  } else if (animate === "translate") {
    switch (animateOrigin) {
      case "top":
        enterFrom = "-translate-y-full";
        leaveFrom = "translate-y-0";
        break;
      case "bottom":
        enterFrom = "translate-y-full";
        leaveFrom = "translate-y-0";
        break;

      case "left":
        enterFrom = "-translate-x-full";
        leaveFrom = "translate-x-0";
        break;

      case "right":
        enterFrom = "translate-x-full";
        leaveFrom = "translate-x-0";
        break;

      default:
        enterFrom = "-translate-y-full";
        leaveFrom = "translate-y-0";
        break;
    }
  }

  return (
    <Transition show={isModalOpen} as={Fragment}>
      <Dialog
        onClose={toggleModal}
        className={twMerge("relative z-50", modalClasses)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            aria-hidden="true"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-700"
          enterFrom={twMerge("opacity-0", enterFrom)}
          enterTo={twMerge("opacity-100", leaveFrom)}
          leave="ease-in duration-300"
          leaveFrom={twMerge("opacity-100", leaveFrom)}
          leaveTo={twMerge("opacity-0", enterFrom)}
        >
          <div className={twMerge(classes)}>
            {/* Container to center the panel */}
            <Dialog.Panel
              className={twMerge("w-full bg-white", modalContentClasses)}
            >
              {children}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default Modal;
