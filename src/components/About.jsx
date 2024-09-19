"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants/constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import astronaut from "../assets/header.svg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    glareEnable={true}
    glareMaxOpacity={0.8}
    glareColor="#ffffff"
    glarePosition="bottom"
    glareBorderRadius="20px"
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    tiltEnable={true}
    perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="relative overflow-hidden lg:overflow-visible">
        <motion.div variants={textVariant()}>
          <p
            className={
              "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
            }
          >
            Introduction
          </p>
          <h2
            className={
              "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
            }
          >
            Overview.
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold"
        >
          Hello, I'm Taher, a Freelancer with 5+ years of experience in Website
          Development. I am passionate about Data Science, Website Designing,
          and Business Analyst and constantly strive to stay up-to-date with the
          latest trends and technologies. Throughout my career, I have honed my
          skills in Website Development, Business Analyst and have successfully
          completed more than 10 projects. My ability has helped me deliver
          exceptional results and earn the trust of my clients and colleagues
          alike. I firmly believe in collaboration and teamwork, and I enjoy
          working with others to achieve a common goal. I also take pride in
          mentoring and coaching junior team members and have been recognized
          for my ability to develop talent within my organization. In my free
          time, I enjoy Photography and am always on the lookout for new
          experiences and challenges. I am excited to connect with like-minded
          professionals and explore new opportunities.
        </motion.p>
        <Image
          src={color_sharp}
          alt="color-sharp"
          className="absolute z-[-1] h-80 -left-60 w-screen -top-20"
        />
        <Image
          src={astronaut}
          alt="astronaut"
          className="absolute z-[-1] h-80 -right-20 animation top-28"
        />
      </div>

      <div className="mt-20 flex-wrap justify-center gap-10 hidden md:flex">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
