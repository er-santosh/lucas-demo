import type { ReactNode } from "react";

const ContainerFluid = ({ children }: { children: ReactNode }) => {
  return <div className="px-6 md:px-10 xl:container-fluid">{children}</div>;
};

export default ContainerFluid;
