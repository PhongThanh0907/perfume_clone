import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";
import MenuBrand from "./MenuBrand";
import NavBar from "./NavBar";
import Support from "./Support";
import Contact from "./Contact";
import StickyLeft from "./StickyLeft";
import StickyRight from "./StickyRight";

interface Props {
  title: string;
  children: any;
}

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-Perfume" : "Perfume"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <header className="bg-[#f5f6f8]">
        <Header />
        <MenuBrand />
        <NavBar />
      </header>

      <main className="m-auto mt-4 px-4 bg-[#f5f6f8]">{children}</main>

      <footer className="bg-[#f5f6f8]">
        <Support />
        <Contact />
        <Footer />
      </footer>
      <section className="hidden lg:inline fixed bottom-24 left-4">
        <StickyLeft />
      </section>
      <section className="hidden lg:inline fixed bottom-24 right-4">
        <StickyRight />
      </section>
    </>
  );
};

export default Layout;
