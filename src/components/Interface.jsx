import { motion } from "framer-motion";
import reactIcon from "../assets/icons/react.png";
import mysqlIcon from "../assets/icons/mysql.png";
import nodeIcon from "../assets/icons/nodejs.png";
import expressIcon from "../assets/icons/expressjs.png";
import threejsIcon from "../assets/icons/threejs.png";
import typescriptIcon from "../assets/icons/typescript.png";
import javascriptIcon from "../assets/icons/javascript.png";
import tailwindIcon from "../assets/icons/tailwindcss.png";
import SassIcon from "../assets/icons/sass.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import githubIcon from "../assets/icons/github.png";
import mailIcon from "../assets/icons/mail.png";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      className={`h-screen w-screen p-8 max-x-screen 2xl mx-auto flex flex-col items-start justify-center`}
      initial={{ opacity: 0, y: 50 }}
      // fade animation
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <SocialsSection />
      {/* <ContactSection /> */}
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl text-tertiary font-extrabold leading-snug">
        Hi I'm <br />{" "}
        <img
          className="w-96 bg-primary  p-5 rounded-md"
          src="src/assets/logo/w-logo-cropped.svg"
          alt="white logo"
        />
      </h1>

      <motion.p
        className="text-lg text-black mt-6"
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
      <motion.button
        className={`bg-primary text-white py-4 px-8 rounded-lg font-bold text-lg mt-6`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 2 }}
      >
        Contact me
      </motion.button>
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
    icon: SassIcon,
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
        <div className="mt-8 space-y-">
          <div className="grid grid-cols-3 gap-2">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

const ProjectSection = () => {
  return (
    <Section>
      <h2 className="text-6xl text-tertiary font-extrabold leading-snug">
        Projects
      </h2>
      <motion.p
        className="text-lg text-black mt-6"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 1.5 }}
      >
       Under construction...
      </motion.p>
    </Section>
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

const SocialsSection = () => {
  return (
    <Section>
      <div>
        <h2 className="text-6xl text-tertiary font-extrabold leading-snug">
         Socials
        </h2>
        <div className="mt-8 space-y-">
          <div className="grid grid-cols-3 gap-2">
            {socials.map((social, index) => (
              <div className="w-64" key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
        </div>
      </div>
    </Section>
  );
};

// const ContactSection = () => {
//   return (
//     <Section>
//       <h2 className="text-5xl font-bold">Contact me</h2>
//       <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
//         <form>
//           <label
//             htmlFor="name"
//             className="font-medium text-gray-900 block mb-1"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
//           />
//           <label
//             htmlFor="email"
//             className="font-medium text-gray-900 block mb-1 mt-8"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
//           />
//           <label
//             htmlFor="email"
//             className="font-medium text-gray-900 block mb-1 mt-8"
//           >
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
//           />
//           <button className="bg-primary text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
//             Submit
//           </button>
//         </form>
//       </div>
//     </Section>
//   );
// };