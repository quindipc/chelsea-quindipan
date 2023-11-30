import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import reactIcon from "../assets/icons/react.png";
import mysqlIcon from "../assets/icons/mysql.png";
import nodeIcon from "../assets/icons/nodejs.png";
import expressIcon from "../assets/icons/expressjs.png";
import threejsIcon from "../assets/icons/threejs.png";
import typescriptIcon from "../assets/icons/typescript.png";
import javascriptIcon from "../assets/icons/javascript.png";
import tailwindIcon from "../assets/icons/tailwindcss.png";
import sassIcon from "../assets/icons/sass-icon.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import githubIcon from "../assets/icons/github.png";
import mailIcon from "../assets/icons/mail.png";
import chelseaLogo from "../assets/logo/w-logo-cropped.svg";
import mythicTails from "../assets/images/mythic-tails.png";
import insightsAI from "../assets/images/insights.png";
import coffeeChat from "../assets/images/coffeechat.png";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      className={`min-h-screen w-full p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
      initial={{ opacity: 0, y: 50 }}
      // fade animation
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      {/* Background Card */}
      <div className="bg-white bg-opacity-60 rounded-lg shadow-md p-8 max-w-screen-md max-h-screen">
        {/* Content */}
        {children}
      </div>
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      {/* <SocialsSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
};

const socials = [
  {
    title: "LinkedIn",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/chelsea-quindipan/",
  },
  {
    title: "GitHub",
    icon: githubIcon,
    link: "https://github.com/quindipc",
  },
  {
    title: "Email",
    icon: mailIcon,
    link: "mailto:quindipc@gmail.com",
  },
];

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl text-tertiary font-extrabold leading-snug">
        Hi I'm <br />{" "}
        <img
          className="w-96 bg-primary  p-5 rounded-md"
          src={chelseaLogo}
          alt="Chelsea Quindipan logo"
        />
      </h1>

      <motion.p
        className="text-2xl text-black mt-6"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {" "}
        I am a Graphic Designer turned Software Developer based in Toronto.
        <br />
        I love to build and create things! I am committed to creating
        <br />
        seamless, impactful digital solutions that bridge the gap between
        <br />
        technology and design.
      </motion.p>
      <motion.p
        className="text-2xl text-primary mt-6"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {" "}
        When I am not designing or coding, I love to spend my free time
        <br />
        hanging out with my two cats, playing video games or
        <br />
        indulge in my favourite shows!
      </motion.p>
      <div className="grid grid-cols-3 gap-2  mt-6">
        {socials.map((social, index) => (
          <div className="w-50" key={index}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={social.icon}
                alt={social.title}
                className="w-20 h-20 m-2 transition-transform transform hover:scale-110"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{ duration: 1, delay: 1 }}
              />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "JavaScript",
    icon: javascriptIcon,
    link: "https://www.javascript.com/",
  },
  {
    title: "React",
    icon: reactIcon,
    link: "https://reactjs.org/",
  },
  {
    title: "MySQL",
    icon: mysqlIcon,
    link: "https://www.mysql.com/",
  },
  {
    title: "Nodejs",
    icon: nodeIcon,
    link: "https://nodejs.org/en/",
  },
  {
    title: "Express",
    icon: expressIcon,
    link: "https://expressjs.com/",
  },
  {
    title: "TypeScript",
    icon: typescriptIcon,
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "Threejs / React Three Fiber",
    icon: threejsIcon,
    link: "https://threejs.org/",
  },
  {
    title: "Tailwind CSS",
    icon: tailwindIcon,
    link: "https://tailwindcss.com/",
  },
  {
    title: "Sass / SCSS",
    icon: sassIcon,
    link: "https://sass-lang.com/",
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <div>
        <h2 className="text-6xl text-tertiary font-extrabold leading-snug">
          Skills
        </h2>
        <div className="mt-8 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src={skill.icon}
                    alt={skill.title}
                    className="w-20 h-20 m-2 transition-transform transform hover:scale-110"
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const projects = [
  {
    title: "CoffeeChat - makeitMVP Project",
    image: coffeeChat,
    link: "https://github.com/MakeitMVP/CoffeeChat",
    description:
      "Coffee Chat is a platform designed to revolutionize the way professionals network and build meaningful connections.",
  },
  {
    title:
      "Mythic Tails: Cursebreaker's Odyssey - BrainStation Capstone Project",
    image: mythicTails,
    link: "https://mythic-tails-cursebreakers-odyssey.netlify.app/",
    description:
      "Mythic Tails: Cursebreaker’s Odyssey is an immersive text adventure game that takes players on a captivating journey through a cursed realm.",
  },
  {
    title: "Insights AI - Google Hackathon",
    image: insightsAI,
    link: "https://github.com/amirkiaml/Google-Industry-Day",
    description:
      "Insights is a powerful widget integrated into the Google platform that provides users with clear explanations of how AI enhances their experience, utilizes their data, and delivers the results they receive ",
  },
];

const ProjectSlide = ({ title, description, image, link }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-tertiary text-2xl">{description}</p>
      <a href={link}>
        <img
          className="rounded-lg object-cover opacity-90 h-full md:h-full lg:h-full w-full transition-transform transform hover:scale-110 hover:shadow-xl hover:opacity-100"
          src={image}
          alt={title}
        />
      </a>
    </div>
  );
};

const ProjectSection = () => {
  const controls = useAnimation();
  const [currentProject, setCurrentProject] = useState(0);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 300 : -300,
        opacity: 0,
      };
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentProject(newIndex);
    },
  };

  const nextProject = async () => {
    await controls.start("exit", { direction: 1 });
    setCurrentProject((currentProject + 1) % projects.length);
    await controls.start("enter", { direction: 1 });
  };

  const prevProject = async () => {
    await controls.start("exit", { direction: -1 });
    setCurrentProject(
      currentProject === 0 ? projects.length - 1 : currentProject - 1,
    );
    await controls.start("enter", { direction: -1 });
  };
  return (
    <Section>
      <h2 className="text-6xl text-tertiary font-extrabold leading-snug">
        Projects
      </h2>
      <div className="text-lg text-black mt-6 space-y-4 overflow-y-auto max-h-screen">
        <motion.div
          custom={1}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween" }}
          onAnimationComplete={() => controls.start("enter")}
          style={{ width: "100%" }}
        >
          <ProjectSlide
            title={projects[currentProject].title}
            description={projects[currentProject].description}
            image={projects[currentProject].image}
            link={projects[currentProject].link}
          />
        </motion.div>
      </div>

      <div className="flex justify-start mt-4">
        <motion.button
          className={`bg-primary text-white w-40 py-4 px-8 rounded-lg font-bold text-lg mt-6`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1, delay: 0.75 }}
          onClick={prevProject}
        >
          Previous
        </motion.button>

        <motion.button
          className={`bg-primary text-white w-40 py-4 px-8 ml-6 rounded-lg font-bold text-lg mt-6`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1, delay: 0.75 }}
          onClick={nextProject}
        >
          Next
        </motion.button>
      </div>
    </Section>
  );
};
