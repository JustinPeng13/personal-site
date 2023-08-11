import Link from "next/link";
import Container from "../components/Container";
import adskLogo from "../public/assets/adsk_logo.png";
import interseedLogo from "../public/assets/interseed_logo.jpg";
import sgccLogo from "../public/assets/sgcc_logo.png";
import tspLogo from "../public/assets/tsp_logo.jpg";
import nfsLogo from "../public/assets/nfs_logo.jpg";
import racesgLogo from "../public/assets/racesg_logo.jpg";
import Image from "next/image";
import Conic from "../components/Conic";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      {/* INTRO */}
      <div className="mb-16">
        <div className="flex flex-col pr-8">
          <h1 className="sm:text-center font-bold text-5xl sm:text-6xl mb-2 text-black dark:text-white">
            Justin Peng
          </h1>
          <h2 className="sm:text-center text-gray-700 dark:text-gray-300 mb-4 text-3xl sm:text-4xl">
            Software Engineer
          </h2>
          <p className="sm:text-center mt-4 text-gray-600 dark:text-gray-400 text-xl">
            Interested in applying software engineering and machine learning for{" "}
            <b>sustainable development 🍃</b> and <b>FinTech 💰</b>. Moulding
            the next generation of programmers.
          </p>
        </div>
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

      {/* WORK EXPERIENCE */}
      <h3 className="font-bold text-3xl md:text-4xl mb-6 text-gray-800 dark:text-gray-200">
        Work Experience
      </h3>

      {/* Autodesk */}
      <div
        className="flex justify-center group cursor-pointer"
        onClick={() => router.push("/experience#autodesk")}
      >
        <div className="hidden mt-8 -mr-10 md:block overflow-hidden w-48 h-48 rounded-full border-2 border-indigo-500 shadow-lg group-hover:shadow-2xl transition z-10">
          <Image src={adskLogo} objectFit="cover" alt="Autodesk Logo" />
        </div>
        <div className="my-5 md:mt-0">
          <Conic>
            <div className="max-w-lg md:text-right py-4 px-8 bg-neutral-50 rounded-lg md:pr-16 md:h-60 dark:bg-neutral-900">
              <div className="flex mx-auto sm:float-right md:hidden overflow-hidden w-20 h-20 rounded-full border-2 border-indigo-500 sm:shadow-lg">
                <Image
                  src={adskLogo}
                  objectFit="cover"
                  alt="Autodesk Logo"
                />
              </div>
              <div className="">
                <h2 className="text-indigo-500 text-3xl font-semibold">
                  Autodesk
                </h2>
                <h2 className="text-indigo-700 dark:text-indigo-300 text-2xl font-semibold">
                  Software Engineer Intern
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Extended the Forge Content Service <b>API endpoints</b> to handle new attributes;
                  created <b>data tables</b> & <b>triggers</b>;
                  supported <b>language localisation</b> in <b>indexing</b> & <b>search</b>.
                </p>
              </div>
              <div className="mt-4 text-indigo-700 dark:text-indigo-300 font-medium">
                2023
              </div>
            </div>
          </Conic>
        </div>
      </div>

      {/* Interseed */}
      <div
        className="flex justify-center group cursor-pointer"
        onClick={() => router.push("/experience#interseed")}
      >
        <div className="my-5 md:mt-0">
          <Conic>
            <div className="max-w-lg py-4 px-8 bg-neutral-50 rounded-lg md:pr-16 md:h-60 dark:bg-neutral-900">
              <div className="flex mx-auto sm:float-right md:hidden overflow-hidden w-20 h-20 rounded-full border-2 border-indigo-500 sm:shadow-lg">
                <Image
                  src={interseedLogo}
                  objectFit="cover"
                  alt="Interseed Logo"
                />
              </div>
              <div>
                <h2 className="text-indigo-500 text-3xl font-semibold">
                  Interseed.co
                </h2>
                <h2 className="text-indigo-700 dark:text-indigo-300 text-2xl font-semibold">
                  Front-End Engineer
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Built a one-stop digital platform for all things{" "}
                  <b>sustainability</b>, attracting sustainability ambassadors
                  from all over <b>Southeast Asia</b> to connect with each
                  other.
                </p>
              </div>
              <div className="mt-3 text-indigo-700 dark:text-indigo-300 font-medium">
                2022
              </div>
            </div>
          </Conic>
        </div>
        <div className="hidden mt-6 -ml-10 md:block overflow-hidden w-48 h-48 rounded-full border-2 border-indigo-500 shadow-lg group-hover:shadow-2xl transition z-10">
          <Image src={interseedLogo} objectFit="cover" alt="Interseed Logo" />
        </div>
      </div>

      {/* SGCC */}
      <div
        className="flex justify-center group cursor-pointer"
        onClick={() => router.push("/experience#sgcc")}
      >
        <div className="hidden mt-8 -mr-10 md:block overflow-hidden w-48 h-48 rounded-full border-2 border-indigo-500 shadow-lg group-hover:shadow-2xl transition z-10">
          <Image src={sgccLogo} objectFit="cover" alt="SG Code Campus Logo" />
        </div>
        <div className="my-5 md:mt-0">
          <Conic>
            <div className="max-w-lg md:text-right py-4 px-8 bg-neutral-50 rounded-lg md:pr-16 md:h-60 dark:bg-neutral-900">
              <div className="flex mx-auto sm:float-right md:hidden overflow-hidden w-20 h-20 rounded-full border-2 border-indigo-500 sm:shadow-lg">
                <Image
                  src={sgccLogo}
                  objectFit="cover"
                  alt="SG Code Campus Logo"
                />
              </div>
              <div className="">
                <h2 className="text-indigo-500 text-3xl font-semibold">
                  SG Code Campus
                </h2>
                <h2 className="text-indigo-700 dark:text-indigo-300 text-2xl font-semibold">
                  Instructor/
                  <wbr />
                  Curriculum Dev
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Taught adults & children <b>deep reinforcement learning</b>, <b>data science</b>
                  , <b>Python</b> & <b>Scratch</b>;
                  crafted teaching materials for <b>AWS DeepRacer</b>,{" "}
                  <b>OOP</b>, <b>web dev</b> & <b>Swift</b>.
                </p>
              </div>
              <div className="mt-4 text-indigo-700 dark:text-indigo-300 font-medium">
                2021-2022
              </div>
            </div>
          </Conic>
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

      {/* PROJECTS */}
      <h3 className="font-bold text-3xl md:text-4xl mb-6 mt-16 text-gray-800 dark:text-gray-200">
        Projects
      </h3>

      {/* NUS Fintech Society Website */}
      <div
        className="flex justify-center group cursor-pointer"
        onClick={() => router.push("/projects#nfs-website")}
      >
        <div className="my-5 md:mt-0">
          <Conic>
            <div className="max-w-lg py-4 px-8 bg-neutral-50 rounded-lg md:pr-16 md:h-60 dark:bg-neutral-900">
              <div className="flex mx-auto sm:float-right md:hidden overflow-hidden w-20 h-20 rounded-full border-2 border-indigo-500 sm:shadow-lg">
                <Image
                  src={nfsLogo}
                  objectFit="cover"
                  alt="NUS Fintech Society Logo"
                />
              </div>
              <div>
                <h2 className="text-indigo-500 text-3xl font-semibold">
                  NUS Fintech Society
                </h2>
                <h2 className="text-indigo-700 dark:text-indigo-300 text-2xl font-semibold">
                  Technical Lead
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Revamped the <b>user interface</b> and <b>functionality</b> of
                  the NUS Fintech Society website by <b>managing</b> a team of 4
                  software engineers and 3 designers.
                </p>
              </div>
              <div className="mt-3 text-indigo-700 dark:text-indigo-300 font-medium">
                2022-2023
              </div>
            </div>
          </Conic>
        </div>
        <div className="hidden mt-6 -ml-10 md:block overflow-hidden w-48 h-48 rounded-full border-2 border-indigo-500 shadow-lg group-hover:shadow-2xl transition z-10">
          <Image
            src={nfsLogo}
            objectFit="cover"
            alt="NUS Fintech Society Logo"
          />
        </div>
      </div>

      {/* RaceSG */}
      <div
        className="flex justify-center group cursor-pointer"
        onClick={() => router.push("/projects#racesg")}
      >
        <div className="hidden mt-8 -mr-10 md:block overflow-hidden w-48 h-48 rounded-full border-2 border-indigo-500 shadow-lg group-hover:shadow-2xl transition z-10">
          <Image src={racesgLogo} objectFit="fill" alt="RaceSG Logo" />
        </div>
        <div className="my-5 md:mt-0">
          <Conic>
            <div className="max-w-lg md:text-right py-4 px-8 bg-neutral-50 rounded-lg md:pr-16 md:h-60 dark:bg-neutral-900">
              <div className="flex mx-auto sm:float-right md:hidden overflow-hidden w-20 h-20 rounded-full border-2 border-indigo-500 sm:shadow-lg">
                <Image src={racesgLogo} objectFit="cover" alt="RaceSG Logo" />
              </div>
              <div className="">
                <h2 className="text-indigo-500 text-3xl font-semibold">
                  RaceSG
                </h2>
                <h2 className="text-indigo-700 dark:text-indigo-300 text-2xl font-semibold">
                  Full Stack Engineer
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Ideated and implemented an amazing race application
                  incorporating <b>sgID</b> to boost tourism in Singapore
                  &mdash; emerged <b>finalists</b> in <b>LifeHack 2023</b>.
                </p>
              </div>
              <div className="mt-4 text-indigo-700 dark:text-indigo-300 font-medium">
                2023
              </div>
            </div>
          </Conic>
        </div>
      </div>

      {/* TheSocialPitstop */}
      <div
        className="flex justify-center group cursor-pointer"
        onClick={() => router.push("/projects#tsp")}
      >
        <div className="my-5 md:mt-0">
          <Conic>
            <div className="max-w-lg py-4 px-8 bg-neutral-50 rounded-lg md:pr-16 md:h-60 dark:bg-neutral-900">
              <div className="flex mx-auto sm:float-right md:hidden overflow-hidden w-20 h-20 rounded-full border-2 border-indigo-500 sm:shadow-lg">
                <Image
                  src={tspLogo}
                  objectFit="cover"
                  alt="TheSocialPitstop Logo"
                />
              </div>
              <div>
                <h2 className="text-indigo-500 text-3xl font-semibold">
                  The
                  <wbr />
                  Social
                  <wbr />
                  Pitstop
                </h2>
                <h2 className="text-indigo-700 dark:text-indigo-300 text-2xl font-semibold">
                  Full Stack Engineer
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Built a serverless web-based platform for <b>businesses</b>{" "}
                  and <b>social enterprises</b> to connect and find partners for{" "}
                  <b>corporate social responsibility</b> projects.
                </p>
              </div>
              <div className="mt-3 text-indigo-700 dark:text-indigo-300 font-medium">
                2022
              </div>
            </div>
          </Conic>
        </div>
        <div className="hidden mt-6 -ml-10 md:block overflow-hidden w-48 h-48 rounded-full border-2 border-indigo-500 shadow-lg group-hover:shadow-2xl transition z-10">
          <Image src={tspLogo} objectFit="cover" alt="TheSocialPitstop Logo" />
        </div>
      </div>

      <div>
        <Link href="/projects">
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
  );
}
