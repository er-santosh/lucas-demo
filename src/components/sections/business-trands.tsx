import Avatar from "../ui/avatar";
import BorderedCard from "../ui/card/bordered-card";
import CardTitle from "../ui/card/card-title";
import ContainerFluid from "../ui/container-fluid";
import { SubTitleText } from "../ui/text/subtitle-text";
import { TitleText } from "../ui/text/title-text";

const BusinessTrands = () => {
  return (
    <ContainerFluid>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <TitleText>Business Trands</TitleText>
          <SubTitleText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            perferendis, animi placeat architecto obcaecati neque, sint soluta
            laudantium ipsum voluptates iure? Dolorem dolorum consequatur
            cupiditate ab illo illum aut sit?
          </SubTitleText>
          <div className="flex items-center gap-4 py-2">
            <Avatar className="bg-green-50 text-green-500">A</Avatar>
            <div>
              <TitleText className="text-lg">Mr. John Doe</TitleText>
              <SubTitleText>Designation</SubTitleText>
            </div>
          </div>
        </div>
        <BorderedCard>
          <div className="mb-4 flex items-center justify-between py-2">
            <Avatar className="bg-red-50 text-red-500">V</Avatar>
            <SubTitleText className="font-faro">May 2022</SubTitleText>
          </div>
          <CardTitle>Visibilty Booster</CardTitle>
          <SubTitleText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quidem animi. Laboriosam repellendus quod dicta sit, fugit nihil
            quam veniam rem illum placeat accusamus, animi molestias asperiores
            iusto delectus sed?
          </SubTitleText>
        </BorderedCard>
        <BorderedCard>
          <div className="mb-4 flex items-center justify-between py-2">
            <Avatar className="bg-purple-50 text-purple-500">A</Avatar>
            <SubTitleText className="font-faro">Dec 2022</SubTitleText>
          </div>
          <CardTitle>Online Assistance</CardTitle>
          <SubTitleText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quidem animi. Laboriosam repellendus quod dicta sit, fugit nihil
            quam veniam rem illum placeat accusamus, animi molestias asperiores
            iusto delectus sed?
          </SubTitleText>
        </BorderedCard>
      </div>
    </ContainerFluid>
  );
};

export default BusinessTrands;
