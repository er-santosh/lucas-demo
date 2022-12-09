import Avatar from "../ui/avatar";
import ContainerFluid from "../ui/container-fluid";
import { SubTitleText } from "../ui/text/subtitle-text";
import { TitleText } from "../ui/text/title-text";

const Testimonials = () => {
  return (
    <div className="bg-gray-200">
      <ContainerFluid>
        <div className="py-16">
          <div className="flex flex-col items-center">
            <p className="mb-5 font-faro">
              --------------- <span className="ml-5">Testimonials</span>
            </p>
            <TitleText className="text-center">
              Set the optional path to <br /> achieve them.
            </TitleText>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <div className="mb-5 flex items-center gap-4 py-2">
                <Avatar className="bg-green-50 text-green-500">A</Avatar>
                <div>
                  <TitleText className="text-lg">Mr. John Doe</TitleText>
                  <SubTitleText>Designation</SubTitleText>
                </div>
              </div>
              <TitleText className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                enim saepe dolores doloremque, delectus debitis, deleniti
                ratione quia sit, id voluptatum atque dolorum laudantium omnis
                vero excepturi. Voluptatum, tempora odio.
              </TitleText>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-4 py-2">
                <Avatar className="bg-green-50 text-green-500">A</Avatar>
                <div>
                  <TitleText className="text-lg">Mr. John Doe</TitleText>
                  <SubTitleText>Designation</SubTitleText>
                </div>
              </div>
              <TitleText className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                enim saepe dolores doloremque, delectus debitis, deleniti
                ratione quia sit, id voluptatum atque dolorum laudantium omnis
                vero excepturi. Voluptatum, tempora odio.
              </TitleText>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-4 py-2">
                <Avatar className="bg-green-50 text-green-500">A</Avatar>
                <div>
                  <TitleText className="text-lg">Mr. John Doe</TitleText>
                  <SubTitleText>Designation</SubTitleText>
                </div>
              </div>
              <TitleText className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                enim saepe dolores doloremque, delectus debitis, deleniti
                ratione quia sit, id voluptatum atque dolorum laudantium omnis
                vero excepturi. Voluptatum, tempora odio.
              </TitleText>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Testimonials;
