"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="me">
      <div className="grid grid-cols-1 lg:grid-cols-12  ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white tex-4xl lg:text-6xl font-extrabold mb-4 sm:text-5xl ">
            <span>Hello, I&apos;m </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-secondry-400 to-primary-500">
              Lakshmi Lavanya
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={["Web Developer", 5000]}
              wrapper="span"
              speed={1}
              style={{ fontSize: "0.9em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <div className="flex items-center gap-5 mt-4">
            <Link href="/img/resume.pdf" download="download">
              <button className="rounded-full bg-transparent hover:bg-slate-200 text-white hover:text-black border border-white  py-2 px-4 w-full sm:w-fit hover:font-bold">
                Download CV
              </button>
            </Link>

            <Link
              className="p-2 border border-white rounded-full hover:bg-sky-800"
              href="https://www.linkedin.com/in/lavanya2502">
              <LinkedInIcon className="text-4xl" />
            </Link>
            <Link
              className="p-2 border border-white rounded-full hover:text-black hover:bg-white"
              href="https://github.com/lakshmilavanya02">
              <GitHubIcon className="text-4xl" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full h-[350px] w-[350px] relative overflow-hidden object-fill">
            <Image
              src="/img/user.jpeg"
              alt=""
              width={400}
              height={400}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-hidden"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
