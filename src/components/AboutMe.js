const AboutMe = () => {
  return (
    <section
      className="w-full px-6 sm:px-12 md:px-24 lg:px-10 xl:px-44 2xl:px-52 py-16"
      id="about"
    >
      <h6 className="text-gray-500 text-sm font-light tracking-[6px] mb-5">
        WHO AM I?
      </h6>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-5">
        About Me
      </h1>
      <div>
        <p className="font-pt-serif text-base sm:text-lg md:text-xl text-justify leading-relaxed py-3">
          Hi, I'm <strong>Praveen Revatagaon</strong>, a passionate full-stack
          developer with <strong>3.5 years of experience</strong> in building
          dynamic, scalable web applications. I specialize in both the front-end
          and back-end, using technologies like <strong>React, Node.js, Express, and MongoDB</strong> to
          deliver seamless, high-performance solutions.
        </p>

        <p className="font-pt-serif text-base sm:text-lg md:text-xl text-justify leading-relaxed">
          Whether it's designing intuitive UIs with <strong>React</strong> or optimizing backend
          services with <strong>Node.js</strong>, I’m driven by creating smooth user experiences and scalable
          architectures. I thrive on tackling challenging problems, learning new
          technologies, and optimizing performance. When I’m not coding, you’ll
          find me exploring new trends, or working on side projects to refine my skills.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;