import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

export const Connect = () => {
  return (
    <section
      id="connect"
      className="relative flex flex-col items-center justify-center h-screen px-8 snap-end md:px-32"
    >
      <div className="max-w-xl px-8 py-12 rounded-lg add-bg">
        <p className="mb-4 text-3xl font-bold text-center md:text-4xl md:mb-8">Contact Me</p>
        <p className="mb-8 text-md md:text-xl md:mb-16">
          I love connecting with different people and it would be awesome if we could get in touch :) You can find me on
          these platforms:
        </p>
        <div className="flex items-center justify-around w-full py-6 text-3xl rounded-xl">
          <a href="https://www.linkedin.com/in/dhruv-sharma-867108124/" target="_blank" rel="noreferrer">
            <SiLinkedin />
          </a>
          <a href="https://github.com/illegalcall/" target="_blank" rel="noreferrer">
            <SiGithub />
          </a>
          <a href="mailto:d3v.dhruv@gmail.com">
            <SiGmail />
          </a>
        </div>
      </div>
      <footer className="absolute text-xs bottom-4">
        Dhruv Sharma 2023 --{" "}
        <span className="italic text-gray-400">
          Designed with 💜 by{" "}
          <a href="https://d3v-dhruv.vercel.app/" className="underline">
            Dhruv
          </a>
        </span>
      </footer>
    </section>
  );
};
