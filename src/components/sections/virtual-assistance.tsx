import { BsCircleFill } from "react-icons/bs";
import Avatar from "../ui/avatar";
import ContainerFluid from "../ui/container-fluid";
import { SubTitleText } from "../ui/text/subtitle-text";
import { TitleText } from "../ui/text/title-text";

const VirtualAssistance = () => {
  return (
    <div className="mt-10 bg-gray-100 py-16">
      <ContainerFluid>
        <div className="flex gap-16">
          <div className="relative hidden h-[500px] w-[380px] lg:inline-block">
            <div className="h-full rounded-full border-2 border-gray-400 p-6">
              <div className="h-full rounded-full bg-gray-300"></div>
            </div>
            <span className="absolute bottom-16 left-10">
              <BsCircleFill size={30} />
            </span>
          </div>
          <div className="w-full xl:w-2/3">
            <TitleText>25,400+</TitleText>
            <TitleText className="mt-10 text-lg lg:text-2xl">
              A virtual assistant is an independent <br /> contractor who
              supports clients from <br /> a remote location.
            </TitleText>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-20">
              <div>
                <div className="mb-4 flex items-center gap-4 py-2">
                  <Avatar className="bg-red-50 text-red-500">V</Avatar>
                  <SubTitleText className="font-faro">
                    Data Checking
                  </SubTitleText>
                </div>
                <SubTitleText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                  similique consequatur aut totam eligendi inventore? Temporibus
                  blanditiis ratione assumenda eveniet, hic incidunt corrupti,
                  nulla, ut nesciunt omnis aliquam nemo magni!
                </SubTitleText>
              </div>
              <div>
                <div className="mb-4 flex items-center gap-4 py-2">
                  <Avatar className="bg-red-50 text-red-500">V</Avatar>
                  <SubTitleText className="font-faro">
                    Boost Performance
                  </SubTitleText>
                </div>
                <SubTitleText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                  similique consequatur aut totam eligendi inventore? Temporibus
                  blanditiis ratione assumenda eveniet, hic incidunt corrupti,
                  nulla, ut nesciunt omnis aliquam nemo magni!
                </SubTitleText>
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default VirtualAssistance;
