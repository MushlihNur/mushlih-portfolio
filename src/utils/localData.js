// Import semua gambar
import apiOpenSIDImage from '../assets/images/projects/api-opensid.png';
import cmsReportTransactionImage from '../assets/images/projects/cms-report-penjualan.png';
import threadTalkImage from '../assets/images/projects/thread-talk.png';
import seaLabLogo from '../assets/images/experiences/sea-lab.png';
import dicodingLogo from '../assets/images/experiences/dicoding.png';
import adinusaLogo from '../assets/images/experiences/adinusa.png';
import dealDuluLogo from '../assets/images/experiences/dealdulu.png';

import { FaGithub, FaHtml5, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaBootstrap, FaCss3, FaLaravel, FaReact } from "react-icons/fa6";
import { SiGmail, SiJavascript, SiMysql, SiPhp, SiTailwindcss } from "react-icons/si";

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
    thumbnail: apiOpenSIDImage,
    technologies: ['Laravel', 'MySQL'],
  },
  {
    id: 'projects-2',
    title: 'CMS Report Transaction',
    description: 'CMS Report Transaction is a project aimed at providing a management dashboard for monitoring sales and user data through a website.',
    thumbnail: cmsReportTransactionImage,
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 'projects-3',
    title: 'Thread Talk',
    description: 'Thread Talk is an online discussion platform that allows users to post text, like, dislike, unlike, undislike, and add comments.',
    thumbnail: threadTalkImage,
    technologies: ['React Js', 'Tailwind CSS', 'CI/CD'],
  },
];

const experiencesData = [
  {
    id: 'experiences-1',
    role: 'Laboratory Assistant',
    description: 'Contract at SEA Laboratory',
    startDate: 'Jul 2021',
    endDate: 'Jul 2022',
    logo: seaLabLogo,
  },
  {
    id: 'experiences-2',
    role: 'Front-End Web and Back-End Developer',
    description: 'Joint Certified Independent Study (SIB) Independent Campus Program batch 2 at Dicoding Indonesia',
    startDate: 'Feb 2022',
    endDate: 'Aug 2022',
    logo: dicodingLogo,
  },
  {
    id: 'experiences-3',
    role: 'Full Stack Developer',
    description: 'Full-time at PT. Adikara Nusantara Teknologi',
    startDate: 'Sept 2022',
    endDate: 'Oct 2023',
    logo: adinusaLogo,
  },
  {
    id: 'experiences-4',
    role: 'Website Developer',
    description: 'Contract at PT. Deal Dulu International',
    startDate: 'Oct 2023',
    endDate: 'Dec 2024',
    logo: dealDuluLogo,
  },
];

const socialMediaData = [
  {
    id: 'social-media-1',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mushlihnurislam/',
    icon: FaLinkedin
  },
  {
    id: 'social-media-2',
    name: 'GitHub',
    url: 'https://github.com/MushlihNur',
    icon: FaGithub,
  },
  {
    id: 'social-media-3',
    name: 'Gmail',
    url: 'mailto:mushlih.nuris@gmail.com',
    icon: SiGmail,
  },
  {
    id: 'social-media-4',
    name: 'Instagram',
    url: 'https://instagram.com/mushlih.nuris',
    icon: FaInstagram,
  }
];

export { 
  skillsData,
  projectsData,
  experiencesData,
  socialMediaData,
};
