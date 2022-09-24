import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 font-consolas">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-2 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">about</a>
          </Link>
          <Link href="/assets/justin_peng_resume.pdf">
            <a target='_blank' className="text-gray-500 hover:text-gray-600 transition">resume</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/experience">
            <a className="text-gray-500 hover:text-gray-600 transition">experience</a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 hover:text-gray-600 transition">projects</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-500 hover:text-gray-600 transition">contact</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://linkedin.com/in/justin-peng">
            <div className='flex'>
              <FaLinkedin size={'1.25rem'}/>
              <span className='ml-2'>linkedin</span>
            </div>
          </ExternalLink>
          <ExternalLink href="https://github.com/JustinPeng13">
            <div className='flex'>
              <FaGithub size={'1.25rem'}/>
              <span className='ml-2'>github</span>
            </div>
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}