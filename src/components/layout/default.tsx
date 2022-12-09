import type { ReactNode } from "react";
import Footer from "./navigation/footer";
import Header from "./navigation/header";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
