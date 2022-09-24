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
          <h1 className="text-right font-bold text-5xl md:text-6xl mb-2 text-black dark:text-white">
            About Me
          </h1>
          <h2 className="text-right text-gray-700 dark:text-gray-200 mb-4 text-3xl md:text-4xl">
            Justin Peng
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-xl">
            Hi! I'm glad you want to know more about me -- that's why you're on this page, right? 😅
            <br />
            <br />
            I'm currently a Sophomore (Year 2) majoring in Computer Science at the National University of Singapore.
            It's definitely tough, and committing to so many activities and projects this semester was probably not the wisest choice to make 🤦‍♂️.
            Nevertheless, I only get to be young once, and I should milk all the time I have left before I officially start working 
            (and other things I tell myself when I start to regret 😜).
            <br />
            <br />
          </p>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-xl">
                <span>Interests:</span>
                <ul className="list-disc list-inside">
                  <li>Full Stack Software Engineering 💻</li>
                  <li>Machine Learning/Artificial Intelligence 🤖</li>
                  <li>Ethics of Artificial Intelligence 📖</li>
                  <li>(Tech For) Sustainable Development 🍃</li>
                  <li>FinTech 💰</li>
                </ul>
              </p>
            </div>
            <div>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-xl">
                Hobbies:
                <ul className="list-disc list-inside">
                  <li>Tennis 🎾</li>
                  <li>Dancing 🕺</li>
                  <li>Valorant 🎮</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}