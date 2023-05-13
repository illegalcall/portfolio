export const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col items-center justify-center px-8 py-24 bg-bottom bg-no-repeat fill-screen snap-start snap-always md:px-32 bg-waveMobile lg:bg-wave"
    >
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <p className="mb-4 text-3xl font-bold md:text-4xl md:mb-8">About</p>
        <div className="mb-8 text-lg md:text-xl md:mb-16">
          <p className="mb-4">
            I am a lifelong learner with experience in Full Stack Development. I am extremly passionate about writing
            code that has an impact and can bring ideas to life. I also enjoy solving algorighmic problems.
          </p>
          <p>
            In addition to development, I enjoy going to the lifting heavy weights 🏋️‍♀️, travelling 🏝️, watching anime 🍿,
            listening to music 🎶, reading fiction 📚 and mentoring my juniors 👨🏻‍🎓 in college.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1_rp4H9RH0fJYz5EkX-tahyIm7OKiFyro/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-8 py-1 bg-white border-2 border-gray-700 rounded-full shadow-md md:text-lg">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};
