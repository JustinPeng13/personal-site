import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/Container'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start mb-16">
          <div className="flex flex-col pr-8">
            <h1 className="text-right font-bold text-3xl md:text-5xl mb-2 text-black dark:text-white">
              Justin Peng
            </h1>
            <h2 className="text-right text-gray-700 dark:text-gray-200 mb-4 text-2xl">
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

        <h3 className="font-bold text-2xl md:text-4xl mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        

        <h3 className="font-bold text-2xl md:text-4xl mb-4 mt-16 text-black dark:text-white">
          Learn React & Next.js
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Build and deploy a modern SaaS application using the most popular
          open-source software. This course is 12 hours long and is completely
          live streamed.
        </p>
        <span className="h-16" />
      </div>
    </Container>
  )
}
