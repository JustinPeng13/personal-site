import Link from "next/link";
import Container from "../components/Container";
import Image from "next/image";
import tspHomepage from '../public/assets/tsp_homepage.png'

export default function Projects() {
  return (
    <Container>
      <div className="flex flex-col pr-8 mb-6 sm:text-right">
        <h1 className="font-bold text-5xl sm:text-6xl mb-2 text-black dark:text-white">
          Personal Projects
        </h1>
        <h2 className="text-gray-700 dark:text-gray-300 mb-4 text-3xl sm:text-4xl">
          Justin Peng
        </h2>
      </div>

      <div id='tsp' className="py-8 px-8 mb-10 bg-neutral-50 dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-shadow rounded-xl text-gray-600 dark:text-gray-400 sm:text-xl">
        <h3 className="font-bold text-3xl sm:text-4xl text-gray-800 dark:text-gray-200">TheSocialPitstop</h3>
        <h4 className="font-semibold text-2xl sm:text-3xl mb-4 text-gray-800 dark:text-gray-200">Full-Stack Engineer</h4>
        <p>
          TheSocialPitstop is an online community that connects businesses and socially-oriented organisations for corporate social responsibility project partnerships.
          I built the platform over 3 months together with a coursemate, and it was awarded the Orbital &ndash; Apollo 11 (Advanced) certification by NUS.
        </p>
        <p className="mt-4">
          Check us out at&nbsp;
          <Link href='https://theocialpitstop.vercel.app'>
            <a target='_blank' rel='noopener noreferrer' className="text-indigo-600 dark:text-indigo-400">thesocialpitstop.vercel.app</a>
          </Link>
          ! Or, find out more in our&nbsp;
          <Link href='https://drive.google.com/file/d/1kQQVBpxuSU_z89ssI2WwCHQYkDbXFrtH/view'>
            <a target='_blank' rel='noopener noreferrer' className="text-indigo-600 dark:text-indigo-400">poster</a>
          </Link>
          ,&nbsp;
          <Link href='https://docs.google.com/document/d/1Dh9ryDYsRjsHrujdwJpr1zloDwOYwzn6lRG0et53ZTU/view'>
            <a target='_blank' rel='noopener noreferrer' className="text-indigo-600 dark:text-indigo-400">report</a>
          </Link>
          , and&nbsp;
          <Link href='https://drive.google.com/file/d/1OqlYS0FW7DZ8w9aDWZRZeHCZrDRqwPmb/view'>
            <a target='_blank' rel='noopener noreferrer' className="text-indigo-600 dark:text-indigo-400">video</a>
          </Link>
          !
        </p>
        <div className="my-4 hover:shadow-xl transition-shadow">
          <Link href='https://app.interseed.co'>
            <a target='_blank' rel='noopener noreferrer' className="text-indigo-600 dark:text-indigo-400">
              <Image src={tspHomepage} objectFit='cover'/>
            </a>
          </Link>
        </div>
        <p>
          <em><b>Tech Used</b>: Next.js, Vercel, AWS, Terraform, GraphQL, Auth0, Algolia, Jest, Cypress, Github Actions</em>
        </p>
      </div>
    </Container>
  )
}