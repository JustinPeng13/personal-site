import Container from "../components/Container";
import interseedSS from '../public/assets/interseed_screenshot.png'
import deepracerLeague from '../public/assets/deepracer_league.jpeg'
import deepracerGarage from '../public/assets/deepracer_garage.jpeg'
import nestedQai from '../public/assets/nested_qai.png'
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <Container>
      <div className="flex flex-col pr-8 mb-6">
        <h1 className="text-right font-bold text-5xl md:text-6xl mb-2 text-black dark:text-white">
          Work Experience
        </h1>
        <h2 className="text-right text-gray-700 dark:text-gray-300 mb-4 text-3xl md:text-4xl">
          Justin Peng
        </h2>
      </div>

      <div id='interseed' className="py-8 px-8 mb-10 bg-neutral-50 dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition rounded-xl text-gray-600 dark:text-gray-400 text-xl">
        <h3 className="font-bold text-3xl md:text-4xl text-gray-800 dark:text-gray-200">Interseed.co</h3>
        <h4 className="font-semibold text-2xl md:text-3xl mb-4 text-gray-800 dark:text-gray-200">Front-End Engineer</h4>
        <p>
          Interseed.co is a one-stop digital platform for all things sustainability.
          As a Front-End Engineer, I iterated upon user interface and front-end functionality during weekly sprints according to user feedback.
          My proudest achievement is implementing a mobile-responsive community map with a search function and 4 filter components.
        </p>
        <p className="mt-4">
          Our community is now 182 members and 34 organisations strong! Check us out at&nbsp;
          <Link href='https://app.interseed.co'>
            <a target='_blank' rel='noopener noreferrer' className="text-blue-500">app.interseed.co</a>
          </Link>
          !
        </p>
        <div className="my-4 hover:shadow-xl transition">
          <Link href='https://app.interseed.co'>
            <a target='_blank' rel='noopener noreferrer' className="text-blue-500">
              <Image src={interseedSS} objectFit='cover'/>
            </a>
          </Link>
        </div>
        <p>
          <em><b>Tech Used</b>: React.js, MongoDB, Express.js, Node.js, Redux, Github Actions</em>
        </p>
      </div>

      <div id='sgcc' className="py-8 px-8 mb-10 bg-neutral-50 dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition rounded-xl text-gray-600 dark:text-gray-400 text-xl">
        <h3 className="font-bold text-3xl md:text-4xl text-gray-800 dark:text-gray-200">SG Code Campus</h3>
        <h4 className="font-semibold text-2xl md:text-3xl mb-4 text-gray-800 dark:text-gray-200">Course Instructor</h4>
        <p>
          I introduced kids, teenagers, and adults to the wonderful world of programming through Python and Scratch.
          A key moment for me was watching more than 200 secondary school students from across Singapore compete with their trained deep learning models using AWS DeepRacers, after undergoing my 3-hour workshop on deep reinforcement learning.
        </p>
        <div className="my-4 hover:shadow-xl transition">
          <Link href='https://www.sgcodecampus.com/blog/day-3-of-the-aws-deepracer-league/'>
            <a target='_blank' rel='noopener noreferrer' className="text-blue-500">
              <Image src={deepracerLeague} objectFit='cover' />
            </a>
          </Link>
        </div>
        <p>
          Besides coordinating and conducting the inaugural&nbsp;
          <Link href='https://www.sgcodecampus.com/datascience-bootcamp-accelerator-2021/'>
            <a target='_blank' rel='noopener noreferrer' className="text-blue-500">IMDA&ndash;AWS Data Science Bootcamp and Accelerator Programme</a>
          </Link>
          , I also coached 27 adult participants to achieve SMU&apos;s&nbsp;
          <Link href='https://academy.smu.edu.sg/advanced-diploma-python-programming-and-applied-data-analytics-4731'>
            <a target='_blank' rel='noopener noreferrer' className="text-blue-500">Advanced Diploma in Python Programming and Applied Data Analytics</a>
          </Link>
          &nbsp;certification.
        </p>

        <h4 className="font-semibold text-2xl md:text-3xl my-4 text-gray-800 dark:text-gray-200">Curriculum Developer</h4>
        <p>
          Additionally, I devised presentation materials and complementary projects for various programmes:
        </p>
        <ul className="list-disc list-inside">
          <li>Deep reinforcement learning and hyperparameter tuning (in partnership with AWS &amp; IMDA) &mdash; 3h</li>
          <li>Python OOP and web development &mdash; 32h</li>
          <li>Swift (in partnership with Apple) &mdash; 8h</li>
          <li>Python&apos;s PySimpleGUI library (in partnership with Radin Mas Primary School) &mdash; 8h</li>
        </ul>

        <h4 className="font-semibold text-2xl md:text-3xl my-4 text-gray-800 dark:text-gray-200">Deep Learning Intern</h4>
        <p>
          In preparation for the Data Science Bootcamp, I conducted hyperparameter optimisation using grid search over soft-actor critic and proximal policy optimisation algorithms to
          improve performance of the DeepRacer models.
          I then compiled a comprehensive guide on the DeepRacer and deep reinforcement learning concepts for instructors&apos; reference.
        </p>
        <div className="my-4 hover:shadow-xl transition">
          <Link href='https://www.sgcodecampus.com/blog/day-2-of-the-aws-deepracer-league/'>
            <a target='_blank' rel='noopener noreferrer' className="text-blue-500">
              <Image src={deepracerGarage} objectFit='cover' />
            </a>
          </Link>
        </div>
        <p>
          I also developed a hackathon preparation guide by researching and training models on the AWS DeepLens with AWS SageMaker, Lambda, and Rekognition.
        </p>
      </div>

      <div id='nestedai' className="py-8 px-8 mb-10 bg-neutral-50 dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition rounded-xl text-gray-600 dark:text-gray-400 text-xl">
        <h3 className="font-bold text-3xl md:text-4xl text-gray-800 dark:text-gray-200">Nested Technologies</h3>
        <h4 className="font-semibold text-2xl md:text-3xl mb-4 text-gray-800 dark:text-gray-200">Lead Software Development Intern</h4>
        <p>
          As the most senior software development intern, I oversaw 3 full-stack web applications deployed on AWS and a software development team of 10.
          I researched and implemented backend automation &amp; machine learning software for web scraping, automated emailing systems, and floor plan analysis.
          On the front-end, I designed UI/UX and beautified the web applications with dark mode, modals, and animations.
        </p>
        <div className="my-4 hover:shadow-xl transition">
          <Link href='https://nested.ai/quantity-ai/'>
            <a target='_blank' rel='noopener noreferrer' className="text-blue-500">
              <Image src={nestedQai} objectFit='cover' />
            </a>
          </Link>
        </div>
        <p className="mt-4">
          <em><b>Tech Used</b>: Python, Django, HTML5, CSS3, JavaScript, Bootstrap 4, jQuery, AWS, Docker, Postman, PayPal SDK, Github Actions</em>
        </p>
      </div>
    </Container>
  )
}