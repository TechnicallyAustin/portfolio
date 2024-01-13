import React from "react";
import {Chip, Divider } from "@nextui-org/react";
import Port from "../../assets/port.jpeg";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="w-full h-full flex overflow-y-scroll no-scrollbar">
      <section className="w-full max-h-full  rounded-lg relative top-6 flex flex-wrap overflow-y-scroll justify-start gap-3 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </div>
  );
}

