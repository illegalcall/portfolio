import { IProject } from "./types";

export const projects: IProject[] = [
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
    date: "Jul 2022 - Aug 2022",
    code: "https://github.com/illegalcall/airbnb-clone",
    gallery: "",
    live: "https://book-your-stay.vercel.app/",
    tags: ["nextjs", "tailwindcss", "prisma", "nextauth", "react-hook-form", "zustand", "mongodb", "cloudinary"],
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
    tags: ["socket.io", "webrtc", "react", "nodejs", "express", "mongodb"],
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
    tags: ["nextjs", "mongodb"],
  },
];
