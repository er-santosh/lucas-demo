import { AiOutlineMenu } from "react-icons/ai";
import Button from "../../ui/button/button";
import { AsideLink } from "../../ui/link/aside-link";
import Modal from "../../ui/modal/modal";
import ModalToggle from "../../ui/modal/modal-toggle";
import { headerLinks } from "./header";

export const MobileNav = () => {
  return (
    <>
      <ModalToggle>
        {({ toggleModal, isModalOpen }) => (
          <>
            <Button
              variant="text"
              className="bg-transparent md:hidden"
              onClick={toggleModal}
            >
              <AiOutlineMenu size={20} />
            </Button>
            <Modal
              position="left"
              animateOrigin="left"
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
              modalContentClasses="h-screen"
            >
              <div className="h-full">
                <div className="flex w-64 flex-col p-4 pb-4">
                  {headerLinks.map((link, key) => (
                    <AsideLink key={key} href="/">
                      {link}
                    </AsideLink>
                  ))}
                </div>
              </div>
            </Modal>
          </>
        )}
      </ModalToggle>
    </>
  );
};
