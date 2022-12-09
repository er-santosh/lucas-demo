import Button from "../../ui/button/button";
import ContainerFluid from "../../ui/container-fluid";
import Logo from "../../ui/logo";
import { SubTitleText } from "../../ui/text/subtitle-text";
import { TitleText } from "../../ui/text/title-text";
const partners = ["Atlassian", "Slack", "Dropbox", "Shopify", "Google"];
const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <ContainerFluid>
        <div className="grid grid-cols-2 py-16 md:grid-cols-3 xl:grid-cols-5">
          {partners.map((partner, key) => (
            <TitleText className="text-xl" key={key}>
              {partner}
            </TitleText>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-16 border-b-2 pb-16 sm:grid-cols-2 md:grid-cols-4">
          <div className="leading-10">
            <Logo />
            <SubTitleText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              vel, nihil explicabo placeat soluta saepe ducimus optio assumenda
              incidunt voluptate perferendis dolor a id voluptatibus cumque
              facilis unde impedit voluptatum.
            </SubTitleText>
          </div>
          <div className="leading-10">
            <TitleText className="text-xl">Contact</TitleText>
            <SubTitleText>
              <span className="font-faro font-bold">Email</span>:
              email@example.com
            </SubTitleText>
            <SubTitleText>
              <span className="font-faro font-bold">Phone</span>: 000000000000
            </SubTitleText>
          </div>
          <div className="col-span-2 leading-10">
            <TitleText className="text-xl">Subscribe</TitleText>
            <div className="flex items-center gap-6">
              <input
                type="text"
                placeholder="Email"
                className="max-w-[230px] rounded-full px-3 focus:outline-none lg:max-w-full"
              />
              <Button className="rounded-full bg-black text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 py-16 md:grid-cols-3">
          <SubTitleText>Privacy & Policy</SubTitleText>
          <SubTitleText>Privacy Policy, Terms & Conditions</SubTitleText>
          <SubTitleText>&copy; 2022</SubTitleText>
        </div>
      </ContainerFluid>
    </footer>
  );
};

export default Footer;
