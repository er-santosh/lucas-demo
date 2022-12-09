import { BsCircleFill } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";
import Button from "../ui/button/button";
import ContainerFluid from "../ui/container-fluid";
import { SubTitleText } from "../ui/text/subtitle-text";
const HeroSection = () => {
  return (
    <ContainerFluid>
      <div className="flex gap-10 py-16 font-faro">
        <div className="w-full xl:w-2/3">
          <p className="">
            --------------- <span className="ml-5">Something blurry</span>
          </p>
          <h1 className="my-10 animate-fadeInDown text-6xl">
            Being Founders <br /> Takes guts
          </h1>
          <SubTitleText>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            iure necessitatibus voluptate ut nostrum inventore aut accusamus
            ipsa, voluptatum sapiente dolores quod deserunt delectus quisquam
            reiciendis! Quod dolorem illum delectus.{" "}
          </SubTitleText>
          <div className="mt-10 flex items-center gap-4">
            <Button
              variant="raised"
              className="animate-fadeInRight rounded-full bg-black py-3 px-10 text-white"
            >
              Book Demo
            </Button>
            <Button
              variant="raised"
              className="animate-scaleUp rounded-full bg-black p-3 text-white"
            >
              <FiPlay size={20} />
            </Button>
            <span className=" animate-fadeInLeft">Watch Showcase</span>
          </div>
        </div>
        <div className="relative hidden h-[500px] w-[380px] lg:inline-block">
          <div className="h-full rounded-full border-2 border-gray-400 p-6">
            <div className="h-full rounded-full bg-gray-300"></div>
          </div>
          <span className="absolute bottom-16 right-10">
            <BsCircleFill size={30} />
          </span>
        </div>
      </div>
    </ContainerFluid>
  );
};

export default HeroSection;
