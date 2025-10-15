import LogoLoop from '../animations/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiExpress,
  SiGit,
  SiGooglecloud,
  SiMongodb,
} from 'react-icons/si';

const techLogos = [
  {
    node: <SiHtml5 />,
    title: 'HTML',
    href: 'https://www.w3schools.com/Html/',
  },
  {
    node: <SiCss3 />,
    title: 'CSS',
    href: 'https://www.w3schools.com/Css/',
  },
  {
    node: <SiJavascript />,
    title: 'JavaScript',
    href: 'https://www.javascript.com/',
  },
  {
    node: <SiTypescript />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
  },

  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  {
    node: <SiTailwindcss />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  {
    node: <SiMysql />,
    title: 'MySQL',
    href: 'https://mysql.com',
  },
  {
    node: <SiExpress />,
    title: 'Express.js',
    href: 'https://expressjs.com',
  },
  {
    node: <SiGit />,
    title: 'Git',
    href: 'https://git-scm.com',
  },
  {
    node: <SiGooglecloud />,
    title: 'Google Cloud',
    href: 'https://cloud.google.com/',
  },
  {
    node: <SiMongodb />,
    title: 'MongoDB',
    href: 'https://mongodb.com/',
  },
];

export default function Skills() {
  return (
    <div className="mb-20">
      <LogoLoop
        logos={techLogos}
        speed={38}
        direction="left"
        logoHeight={32}
        gap={64}
        pauseOnHover
        fadeOut
        fadeOutColor="#060010"
        ariaLabel="Skills"
      />
    </div>
  );
}
