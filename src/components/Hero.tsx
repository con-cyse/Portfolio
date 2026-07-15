// Use URL import to avoid TypeScript module declaration issues in bundlers like Vite
const profileImage = new URL("../assets/profile.png", import.meta.url).href;

const Hero = () => {
  return (
    <section id="home" className="mesh-bg flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
      <div className="mx-auto max-w-4xl">
        <img
          src={profileImage}
          className="mx-auto mb-8 h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40"
          alt="Cyril Jade M. Concoles"
        />
        <h1 className="text-4xl font-bold tracking-normal text-[var(--color-deep-teal)] sm:text-6xl lg:text-7xl">
          Cyril Jade M. Concoles
        </h1>
        <p className="mt-6 text-lg font-medium text-[var(--color-atlantic)] sm:text-2xl">
          Full-Stack Developer & Designer
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--color-deep-teal)] px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-[var(--color-atlantic)] sm:text-lg"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-deep-teal)] px-6 py-3 text-base font-semibold text-[var(--color-deep-teal)] transition-colors duration-300 hover:bg-[var(--color-deep-teal)] hover:text-white sm:text-lg"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
