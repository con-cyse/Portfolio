// Use URL import to avoid TypeScript module declaration issues in bundlers like Vite
const profileImage = new URL("../assets/profile.png", import.meta.url).href;

const Hero = () => {
  return (
    <section id="home" className="mesh-bg h-screen min-h-[70vh] px-6 py-24 flex items-center justify-center text-center">
      <div className="max-w-4xl">
        <img
          src={profileImage}
          className="mx-auto mb-8 h-40 w-40 rounded-full object-cover "
          alt="Cyril Jade M. Concoles"
        />
        <h1 className="text-5xl font-bold tracking-normal text-[var(--color-deep-teal)] sm:text-6xl lg:text-7xl">
          Cyril Jade M. Concoles
        </h1>
        <p className="mt-6 text-xl font-medium text-[var(--color-atlantic)] sm:text-2xl">
          Full-Stack Developer & Designer
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-[var(--color-deep-teal)] px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[var(--color-atlantic)]"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-[var(--color-deep-teal)] px-6 py-3 text-lg font-semibold text-[var(--color-deep-teal)] transition-colors duration-300 hover:bg-[var(--color-deep-teal)] hover:text-white"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
