const Section = (props) => {
  const { children } = props;
  return (
    <section
      className={`h-screen w-screen p-8 max-x-screen 2xl mx-auto flex flex-col items-start justify-center`}
    >
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      {/* Project */}
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl text-tertiary font-extrabold leading-snug">
        Hi I'm <br />{" "}
        <img
          className="bg-primary"
          src="src/assets/logo/w-logo-cropped.svg"
          alt="white logo"
        />
      </h1>

      <p className="text-lg text-black mt-6">
        {" "}
        I am a Graphic Designer turned Software Developer based in Toronto.
        <br />
        I love to build and create things! I am committed to creating
        <br />
        seamless, impactful digital solutions that bridge the gap between
        <br />
        technology and design.
      </p>
      <button
        className={`bg-tertiary text-white py-4 px-8 rounded-lg font-bold text-lg mt-6`}
      >
        Contact me
      </button>
    </Section>
  );
};

const skills = [
  {
    title: "React",
    icon: "",
  },
  {
    title: "MySQL",
    icon: "",
  },
  {
    title: "Nodejs",
    icon: "",
  },
  {
    title: "Express",
    icon: "",
  },
  {
    title: "TypeScript",
    icon: "",
  },
  {
    title: "Threejs / React Three Fiber",
    icon: "",
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold">Skills</h2>
      </div>
      <div className="mt-8 space-y-">
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <h3 className="text-xl font-bold text-black">{skill.title}</h3>
            <img src={skill.icon} alt={skill.title} className="w-64" />
          </div>
        ))}
      </div>
    </Section>
  );
};


const ContactSection = () => { 

    return (
        <Section>
          <h2 className="text-5xl font-bold">Contact me</h2>
          <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
            <form>
              <label for="name" className="font-medium text-gray-900 block mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <label
                for="email"
                className="font-medium text-gray-900 block mb-1 mt-8"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <label
                for="email"
                className="font-medium text-gray-900 block mb-1 mt-8"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
                Submit
              </button>
            </form>
          </div>
        </Section>
      );
}
