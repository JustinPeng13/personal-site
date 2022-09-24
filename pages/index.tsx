import Link from 'next/link'
import Container from '../components/Container'

export default function Home() {
  return (
    <Container>
      {/* INTRO */}
      <div className="flex flex-col-reverse sm:flex-row mb-16">
        <div className="flex flex-col pr-8">
          <h1 className="text-right font-bold text-4xl md:text-5xl mb-2 text-black dark:text-white">
            Justin Peng
          </h1>
          <h2 className="text-right text-gray-700 dark:text-gray-200 mb-4 text-2xl md:text-3xl">
            Software Engineer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            Interested in applying software engineering and machine learning for <b>sustainable development 🍃</b> and <b>FinTech 💰</b>.
            Moulding the next generation of programmers.
          </p>
          <div>
            <Link href="/about">
              <a className="flex float-right text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* WORK EXPERIENCE */}
      <h3 className="font-bold text-3xl md:text-4xl mb-6 text-black dark:text-white">Work Experience</h3>
      {/* Interseed */}
      <div className="flex justify-center">
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 md:mt-0 md:mb-10 md:pr-16 md:h-60">
          <div className="flex justify-center -mt-16 md:hidden">
            <img className="object-cover rounded-full border-2 border-indigo-500" width='80px' height='80px' src="/assets/interseed.jpg" />
          </div>
          <div>
            <h2 className="text-indigo-500 text-3xl font-semibold">Interseed</h2>
            <h2 className="text-indigo-700 text-2xl font-semibold">Front-End Engineer</h2>
            <p className="mt-2 text-gray-600">
              Built a one-stop digital platform for all things <b>sustainability</b>, attracting sustainability ambassadors from all over <b>Southeast Asia</b> to connect with each other.
            </p>
          </div>
          <div className="mt-3 text-indigo-700 font-medium">
            2022-Present
          </div>
        </div>
        <div className="hidden mt-6 -ml-10 md:block overflow-hidden">
          <img className="object-cover rounded-full border-2 border-indigo-500" width='180px' height='180px' src="/assets/interseed.jpg" />
        </div>
      </div>
      {/* SGCC */}
      <div className="flex justify-center">
        <div className="hidden mt-8 -mr-10 md:block z-10">
          <img className="object-cover rounded-full border-2 border-indigo-500" width='180px' height='180px' src="/assets/sgcodecampus.png" />
        </div>
        <div className="text-right max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 md:mt-0 md:pl-16 md:h-60">
          <div className="flex justify-center -mt-16 md:hidden">
            <img className="object-cover rounded-full border-2 border-indigo-500" width='80px' height='80px' src="/assets/sgcodecampus.png" />
          </div>
          <div>
          <h2 className="text-indigo-500 text-3xl font-semibold">SG Code Campus</h2>
            <h2 className="text-indigo-700 text-2xl font-semibold">Instructor/Curriculum Dev</h2>
            <p className="mt-2 text-gray-600">
              Taught <b>deep reinforcement learning</b>, <b>data science</b>, <b>Python</b>, and <b>Scratch</b> to adults and children. Crafted teaching materials for <b>AWS DeepRacer</b>, <b>OOP</b>, <b>web dev</b>, and <b>Swift</b>.
            </p>
          </div>
          <div className="mt-4 text-indigo-700 font-medium">
            2021-Present
          </div>
        </div>
      </div>
      <div>
        <Link href="/experience">
          <a className="flex float-right text-right text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            See all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>

      {/* PERSONAL PROJECTS */}
      <h3 className="font-bold text-3xl md:text-4xl mb-6 mt-16 text-black dark:text-white">Personal Projects</h3>
      {/* Interseed */}
      <div className="flex justify-center">
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 md:mt-0 md:mb-10 md:pr-16 md:h-60">
          <div className="-mt-16 md:hidden">
            <img className="object-cover rounded-full border-2 border-indigo-500" width='80px' height='80px' src="/assets/thesocialpitstop.jpg" />
          </div>
          <div>
            <h2 className="text-indigo-500 text-3xl font-semibold">TheSocialPitstop</h2>
            <h2 className="text-indigo-700 text-2xl font-semibold">Full Stack Engineer</h2>
            <p className="mt-2 text-gray-600">
              Built a serverless web-based platform for <b>businesses</b> and <b>social enterprises</b> to connect and find partners for <b>corporate social responsibility</b> projects.
            </p>
          </div>
          <div className="mt-3 text-indigo-700 font-medium">
            2022-Present
          </div>
        </div>
        <div className="hidden mt-6 -ml-10 md:block overflow-hidden">
          <img className="object-cover rounded-full border-2 border-indigo-500" width='180px' height='180px' src="/assets/thesocialpitstop.jpg" />
        </div>
      </div>

      <span className="h-16" />
      <div>
        <Link href="/experience">
          <a className="flex float-right text-right text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            See all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  )
}
