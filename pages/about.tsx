import Link from "next/link";
import Container from "../components/Container";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-blue-500 hover:text-blue-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function About() {
  return (
    <Container>
      <div className="flex flex-col-reverse sm:flex-row mb-16">
        <div className="flex flex-col pr-8">
          <h1 className="text-right font-bold text-4xl md:text-5xl mb-2 text-black dark:text-white">
            About Me
          </h1>
          <h2 className="text-right text-gray-700 dark:text-gray-200 mb-4 text-2xl md:text-3xl">
            Justin Peng
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            Interested in applying software engineering and machine learning for <b>sustainable development 🍃</b> and <b>FinTech 💰</b>.
            Moulding the next generation of programmers.
          </p>
        </div>
      </div>
    </Container>
  )
}