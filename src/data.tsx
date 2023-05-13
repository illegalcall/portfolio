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
    code: "https://github.com/rakshit087/translat3",
    gallery: "https://devfolio.co/projects/translat-cbfc",
    live: "",
    tags: ["all", "web 3"],
  },
];
