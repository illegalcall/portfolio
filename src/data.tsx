import { IProject } from "./types";

export const tags = ["all", "frontend", "backend", "full stack", "mobile", "web 3", "cloud"];

export const projects: IProject[] = [
  {
    title: "Dad Jokes Generator",
    desc: (
      <div>
        <p>Generates Dad Jokes which is previewed ready to download as an image.</p>
        <br />
        <p>
          This app is built using <span className="underline ">Next.js 13</span>, styling with{" "}
          <span className="underline ">Styled Components</span>, <span className="underline ">AWS Amplify</span> as
          backend, <span className="underline ">DynamoDb</span> to store data ,{" "}
          <span className="underline ">Lambda</span> functions for handling backend requests.
        </p>
      </div>
    ),
    date: "June 2023 - June 2023",
    code: "https://github.com/illegalcall/dad-jokes-generator",
    gallery: "",
    live: "https://prod.d32p8zhaaofoa2.amplifyapp.com/",
    tags: ["all", "frontend", "backend", "full stack", "cloud"],
  },
  {
    title: "Crypto price ticker",
    desc: (
      <div>
        <p>Popular crypto price ticker app CoinMarketCap inspired project</p>
        <br />
        <p>
          React Native app is bootstrapped using <span className="underline ">Expo</span> and built with
          <span className="underline ">TypeScript</span>, <span className="underline ">Redux Toolkit</span>.
        </p>
      </div>
    ),
    date: "May 2023 - May 2023",
    code: "https://github.com/illegalcall/crypto-price-ticker",
    gallery: "https://github.com/illegalcall/crypto-price-ticker#app-screenshots",
    live: "",
    tags: ["all", "frontend", "backend", "full stack", "mobile"],
  },
  {
    title: "Airbnb Clone",
    desc: (
      <div>
        <p>
          Popular stays booking website Airbnb’s clone. Supports signup/login, view listings, create listing, make
          reservation to name a few features.
        </p>
        <br />
        <p>
          This app is built using <span className="underline ">Next.js 13</span>, styling with{" "}
          <span className="underline ">TailwindCSS</span>, <span className="underline ">Prisma</span> as ORM,
          authentication using <span className="underline ">NextAuth</span>,{" "}
          <span className="underline ">React Hook Form</span> forform validation,{" "}
          <span className="underline ">Zustand</span> as a store, <span className="underline ">MongoDB</span> database
          and Cloudinary to upload/store images.
        </p>
      </div>
    ),
    date: "May 2023 - May 2023",
    code: "https://github.com/illegalcall/airbnb-clone",
    gallery: "",
    live: "https://book-your-stay.vercel.app/",
    tags: ["all", "frontend", "backend", "full stack"],
  },
  {
    title: "We-Connect",
    desc: (
      <div>
        <p>Video conferencing with and collaborative text editing whiteboard.</p>
        <br />
        <p>Used socket.io forreal-time connection.WebRTC for Live video conferencing with multiple users.</p>
      </div>
    ),
    date: "Jul 2021 - Aug 2021",
    code: "",
    gallery: "",
    live: "https://we-con-nect.netlify.app/",
    tags: ["all", "frontend", "backend", "full stack"],
  },
  {
    title: "Codedamn Clone",
    desc: (
      <div>
        <p>
          Codedamn is an online platform for learning programming. This is a clone of the website with some features
          like online HTML, CSS, JS editor and a basic terminal with live preview.
        </p>
        <br />
        <p>
          This app is built using <span className="underline">Next.js 13</span>, with{" "}
          <span className="underline ">MongoDB</span> as database
        </p>
      </div>
    ),
    date: "Mar 2021 - Mar 2021",
    code: "",
    gallery: "",
    live: "https://codedamn-psi.vercel.app/",
    tags: ["all", "frontend"],
  },
];
