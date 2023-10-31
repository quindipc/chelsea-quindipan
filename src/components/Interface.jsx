const Section = (props) => {
  const { children } = props;
  return <section className={`h-screen w-screen p-8 max-x-screen 2xl mx-auto flex flex-col items-start justify-center`}>{children}</section>;
};

export const Interface = () => {
    return <div className="flex flex-col items-center w-screen">
        <AboutSection/>
        <Section>
            <h1>Home</h1>
        </Section>
        <Section>
            <h1>Skills</h1>
        </Section>
        <Section>
            <h1>Project</h1>
        </Section>
        <Section>
            <h1>Contact</h1>
        </Section>
  </div>;
};

const AboutSection = () => {
    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">Hi I'm <br />  <span className="bg-primary px-1 italic">Chelsea Quindipan</span></h1>

            <p className="text-lg text-gray-600 mt-"> I am a Graphic Designer turned Software Developer based in Toronto.
                <br />
                I love to build and create things! I am committed to creating
                <br />
                seamless, impactful digital solutions that bridge the gap between
                <br />
                technology and design.</p>
            <button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>Contact me</button>

        </Section>
    )
}