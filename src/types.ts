import React from "react";

export interface IProject {
  title: string;
  desc: React.ReactNode;
  date: string;
  gallery: string | undefined;
  code: string | undefined;
  live: string | undefined;
  tags: string[];
}
