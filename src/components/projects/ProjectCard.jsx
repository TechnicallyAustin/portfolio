import React from 'react'
import {
  Image,
  Card,
  CardBody,
  Chip,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import ProjectsImage from "../../assets/projectsImage.jpeg";
import ProjectChip from './ProjectChip';

export default function ProjectCard() {
    return (
      <Card
        id="projectCard"
        className="w-full h-4/6 flex flex-col bg-transparent"
      >
        <div className="w-full h-4/6">
          <Image
            removeWrapper={true}
            src={ProjectsImage}
            alt="Project Image"
            height={110}
            width={380}
            className="w-full h-full object-cover"
          />
        </div>
        <CardBody className="w-full h-2/6">Project Information</CardBody>
        <CardFooter className="w-full h-2/6 relative flex flex-wrap gap-2 justify-around items-center">
          <ProjectChip />
          <ProjectChip />
          <ProjectChip />
          <ProjectChip />
          <ProjectChip />
          <ProjectChip />
        </CardFooter>
      </Card>
    );
}
