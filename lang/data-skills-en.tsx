/**
 * Contains all skill information.
 */

import gitImg from "../public/img/skills/git.svg";
import cppImg from "../public/img/skills/cpp.svg";
import javaImg from "../public/img/skills/java.svg";
import cImg from "../public/img/skills/c.svg";
import reactImg from "../public/img/skills/react.svg";
import nodeImg from "../public/img/skills/node.svg";
import typescriptImg from "../public/img/skills/typescript.svg";
import pythonImg from "../public/img/skills/python.svg";
import awsImg from "../public/img/skills/aws.png";
import azureImg from "../public/img/skills/azure.png";
import gcpImg from "../public/img/skills/gcp.jpg";

const skills = [
  {
    id: 1,
    title: "Languages",
    subSkills: [
      {
        name: "Python",
        image: pythonImg,
      },
      {
        name: "C",
        image: cImg,
      },
      {
        name: "C++",
        image: cppImg,
      },
      {
        name: "Java",
        image: javaImg,
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    subSkills: [
      {
        name: "React",
        image: reactImg,
      },
      {
        name: "JavaScript",
        image: nodeImg,
      },
      {
        name: "TypeScript",
        image: typescriptImg,
      },
    ],
  },
  {
    id: 3,
    title: "Cloud & Platforms",
    subSkills: [
      {
        name: "AWS",
        image: awsImg,
      },
      {
        name: "Azure",
        image: azureImg,
      },
      {
        name: "GCP",
        image: gcpImg,
      },
    ],
  },
  {
    id: 4,
    title: "Tools",
    subSkills: [
      {
        name: "Git",
        image: gitImg,
      },
    ],
  },
];

export default skills;
