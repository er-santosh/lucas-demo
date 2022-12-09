import ContainerFluid from "../../ui/container-fluid";
import NavLink from "../../ui/link/nav-link";
import Logo from "../../ui/logo";
import { AuthMenu } from "./auth-menu";
import { MobileNav } from "./mobile-nav";
export const headerLinks = [
  "Portfolio",
  "About Us",
  "Join Us",
  "News & Events",
];
const Header = () => {
  return (
    <ContainerFluid>
      <header className="flex items-center justify-between py-10">
        <MobileNav />
        <Logo />
        <div className="hidden items-center space-x-10 md:flex">
          {headerLinks.map((link, key) => (
            <NavLink key={key} href={"/"}>
              {link}
            </NavLink>
          ))}
        </div>
        <AuthMenu />
      </header>
    </ContainerFluid>
  );
};

export default Header;
