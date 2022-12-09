import Avatar from "../ui/avatar";
import BorderedCard from "../ui/card/bordered-card";
import CardTitle from "../ui/card/card-title";
import ContainerFluid from "../ui/container-fluid";
import { SubTitleText } from "../ui/text/subtitle-text";
import { TitleText } from "../ui/text/title-text";

const AdministrativeAssistance = () => {
  return (
    <div className="relative min-h-[800px] bg-gradient-to-br from-green-50 via-orange-50 to-pink-100 bg-no-repeat">
      <ContainerFluid>
        <div className="py-16">
          <p className="font-faro">
            ---------------{" "}
            <span className="ml-5">Administrative in nature</span>
          </p>
          <div className="my-10 grid grid-cols-1 lg:grid-cols-2">
            <div className="leading-10">
              <TitleText>
                Online assistance to <br /> support your success at <br /> EPCC.
              </TitleText>
              <TitleText>$23,45.00</TitleText>
              <SubTitleText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                dolorem aspernatur dolor repellendus cum eveniet? Ad aspernatur
                possimus velit. Voluptatibus et assumenda omnis beatae, alias
                enim culpa suscipit aspernatur expedita.
              </SubTitleText>
            </div>
            <div className="flex xl:relative">
              <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 md:left-20 md:top-2/3 md:-translate-x-0 xl:top-full"></div>
              <div className="-top-20 mt-5 w-full opacity-70 xl:absolute xl:mt-0">
                <div className="mb-5 flex flex-col items-center justify-between gap-6 md:flex-row xl:justify-start">
                  <BorderedCard className=" animate-fadeInRight">
                    <div className="flex flex-col items-center justify-center p-10 leading-8">
                      <Avatar>A</Avatar>
                      <SubTitleText className="mt-4">80% Startups</SubTitleText>
                      <TitleText>Investors</TitleText>
                    </div>
                  </BorderedCard>
                  <BorderedCard className="animate-fadeInLeft">
                    <div className="flex flex-col items-center justify-center p-10 leading-8">
                      <Avatar>A</Avatar>
                      <CardTitle className="mb-6 mt-4">John Doe</CardTitle>
                      <SubTitleText>Assistance</SubTitleText>
                      <TitleText>1400.56</TitleText>
                    </div>
                  </BorderedCard>
                </div>
                <div className="flex justify-center xl:inline-block">
                  <div className="ml-0 max-w-[400px] xl:ml-40">
                    <BorderedCard className=" animate-fadeInUp">
                      <div className="flex items-center gap-4 py-2">
                        <Avatar className="bg-green-50 text-green-500">
                          A
                        </Avatar>
                        <div>
                          <TitleText className="text-lg">
                            Mr. John Doe
                          </TitleText>
                          <SubTitleText>Designation</SubTitleText>
                        </div>
                      </div>
                      <SubTitleText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure voluptatibus provident maxime odit, inventore in
                        veniam officiis quas blanditiis id ab vel vitae laborum
                        minus tempora quae deserunt iste cum!
                      </SubTitleText>
                    </BorderedCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default AdministrativeAssistance;
