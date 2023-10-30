const Section = (props) => {
  const { children } = props;
  return <section className={`h-screen w-screen p-8 max-x-screen 2xl mx-auto flex flex-col items-start justify-center`}>{children}</section>;
};

export const Interface = () => {
    return <>
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
    </>;
};
