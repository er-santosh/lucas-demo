import { signIn, signOut, useSession } from "next-auth/react";
import Avatar from "../../ui/avatar";
import Button from "../../ui/button/button";
import DropdownMenu from "../../ui/menu/dropdown-menu";
import { TitleText } from "../../ui/text/title-text";

export const AuthMenu: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      {sessionData ? (
        <DropdownMenu
          triggerButton={
            <Avatar className=" uppercase">
              {sessionData.user?.name ? sessionData.user?.name[0] : "User"}
            </Avatar>
          }
        >
          <TitleText className="truncate text-lg">Santosh</TitleText>
          <Button className="bg-red-500 text-white" onClick={() => signOut()}>
            Logout
          </Button>
        </DropdownMenu>
      ) : (
        <Button
          onClick={() => signIn()}
          className="rounded-full border-2 bg-gray-100 py-2 px-4 transition-colors duration-200 hover:bg-orange-50 xl:py-3 xl:px-10"
        >
          Register
        </Button>
      )}
    </>
  );
};
