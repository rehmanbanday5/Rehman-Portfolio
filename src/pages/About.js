import React from "react";
import Head from "next/head";
import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import PassportRblac from "../../public/images/profile/PassportRblac.png";
import Image from "next/image";
import Skills from "@/Components/Skills";
import Education from "@/Components/Education";
import Transition from "@/Components/Transition";

const About = () => {
  return (
    <>
      <Head>
        <title> Abdul Rehman | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Drives Purpose"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
                Hello, I am Abdul Rehman Banday, a Front-end Developer and UI/UX
                designer. I love creating websites and digital experiences that
                not only look great but also work seamlessly. I am always
                exploring new ways to turn my clients ideas into reality. Lets
                build something awesome together! 🚀
              </p>
              <p className="font-medium my-4">
                I see design as more than just making things look good its about
                tackling challenges and crafting experiences that users truly
                enjoy. I always strive for top-notch design and keeping users at
                the heart of it all. I am excited about the chance to bring my
                skills and enthusiasm to your next project!
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8  "
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light 
              "
              />
              <Image
                src={PassportRblac}
                alt=""
                className="w-full h-full increase rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center
            md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  3+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm "
                >
                  {" "}
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                 3+
                </span>
                <h2
                  className="text-xl font-medium capitalize  text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Projects Completed{" "}
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  1+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm  "
                >
                  Years of Experience{" "}
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
