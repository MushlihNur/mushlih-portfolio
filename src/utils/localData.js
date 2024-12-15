import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap, FaCss3, FaLaravel, FaReact } from "react-icons/fa6";
import { SiJavascript, SiMysql, SiPhp, SiTailwindcss } from "react-icons/si";
import projectErrorImage from '../assets/images/projects/project-error.png';

const skillsData = [
  {
    id: 'skills-1',
    name: 'HTML',
    icon: FaHtml5,
  },
  {
    id: 'skills-2',
    name: 'CSS',
    icon: FaCss3,
  },
  {
    id: 'skills-3',
    name: 'Javascript',
    icon: SiJavascript,
  },
  {
    id: 'skills-4',
    name: 'PHP',
    icon: SiPhp,
  },
  {
    id: 'skills-5',
    name: 'Laravel',
    icon: FaLaravel,
  },
  {
    id: 'skills-6',
    name: 'React',
    icon: FaReact,
  },
  {
    id: 'skills-7',
    name: 'MySQL',
    icon: SiMysql,
  },
  {
    id: 'skills-8',
    name: 'Bootstrap',
    icon: FaBootstrap,
  },
  {
    id: 'skills-9',
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
];

const projectsData = [
  {
    id: 'projects-1',
    title: 'API OpenSID',
    description: 'API OpenSID is a capstone project designed to connect a mobile application with the OpenSID database in Sukapura Village, supporting the digitalization of village services.',
    thumbnail: projectErrorImage,
    technologies: ['Laravel', 'MySQL'],
  },
  {
    id: 'projects-2',
    title: 'Thread Talk',
    description: 'Thread Talk is an online discussion platform that allows users to post text, like, dislike, unlike, undislike, and add comments.',
    thumbnail: projectErrorImage,
    technologies: ['React Js', 'Tailwind CSS', 'CI/CD'],
  },
  {
    id: 'projects-3',
    title: 'CMS Report Transaction',
    description: 'CMS Report Transaction is a project aimed at providing a management dashboard for monitoring sales and user data through a website.',
    thumbnail: projectErrorImage,
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
  },
];

export { 
  skillsData,
  projectsData,
};
