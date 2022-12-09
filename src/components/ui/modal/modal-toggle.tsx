import type { ReactElement } from "react";
import { useState } from "react";

export interface ModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

interface ModalToggleProps {
  children: (props: ModalProps) => ReactElement;
}

function ModalToggle({ children }: ModalToggleProps) {
  const [isOpen, toggleIsOpen] = useState(false);
  return children({
    isModalOpen: isOpen,
    toggleModal: () => toggleIsOpen(!isOpen),
  });
}

export default ModalToggle;
