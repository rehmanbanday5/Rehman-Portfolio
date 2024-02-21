import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light
    dark:border-light sm:text-base "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>2024 © All Rights Reserved.</span>
        <div className="flex items-center md:py-2">
          Made By <span className="text-2xl text-center px-1">&#x1F451;</span>
          <Link href="/">Abdul Rehman </Link>
        </div>
        <Link className="underline underline-offset-2 " href="/">
          Front-End-Developer!{" "}
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
