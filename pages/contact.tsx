import Container from "../components/Container";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const ExternalLink = ({ href, children }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <div className="p-8">
      {children}
    </div>
  </a>
);

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-col pr-8 mb-6 sm:text-right">
        <h1 className="font-bold text-5xl sm:text-6xl mb-2 text-black dark:text-white">
          Contact Me
        </h1>
        <h2 className="text-gray-700 dark:text-gray-300 mb-4 text-3xl sm:text-4xl">
          Justin Peng
        </h2>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:my-28 md:w-9/12 w-full  mx-auto text-center justify-center items-center text-gray-700 dark:text-gray-300">
        <div className="group mx-4">
          <ExternalLink href="mailto:justinpeng13@gmail.com">
            <div className="group-hover:animate-bounce">
              <FaEnvelope style={{ "margin": "auto" }} size={'4rem'} />
            </div>
            <p className="mt-2">Email</p>
          </ExternalLink>
        </div>
        <div className="group mx-4">
          <ExternalLink href="https://linkedin.com/in/justin-peng">
            <div className="group-hover:animate-bounce">
              <FaLinkedin style={{ "margin": "auto" }} size={'4rem'} />
            </div>
            <p className="mt-2">LinkedIn</p>
          </ExternalLink>
        </div>
        <div className="group mx-4">
          <ExternalLink href="https://github.com/JustinPeng13">
            <div className="group-hover:animate-bounce">
              <FaGithub style={{ "margin": "auto" }} size={'4rem'} />
            </div>
            <p className="mt-2">GitHub</p>
          </ExternalLink>
        </div>
      </div>
    </Container>
  )
}