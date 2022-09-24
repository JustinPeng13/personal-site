import Container from "../components/Container";
import interseedSS from '../public/assets/interseed_screenshot.png'
import Image from "next/image";

export default function Experience() {
  return (
    <Container>
      <div className="flex flex-col-reverse sm:flex-row mb-16">
        <div className="flex flex-col pr-8">
          <h1 className="text-right font-bold text-5xl md:text-6xl mb-2 text-black dark:text-white">
            Work Experience
          </h1>
          <h2 className="text-right text-gray-700 dark:text-gray-200 mb-4 text-3xl md:text-4xl">
            Justin Peng
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-xl">
            Are you hiring for a company I applied to? If so, I would love to be able to add your company's name at the top of this page next 😆
          </p>
        </div>
      </div>
      
      <div className="py-4 px-8 mb-10 bg-white shadow-lg rounded-xl">
        <h3 className="font-bold text-3xl md:text-4xl text-black dark:text-white">Interseed.co</h3>
        <h4 className="font-semibold text-2xl md:text-3xl mb-6 text-black dark:text-white">Front-End Engineer</h4>
        <p className="text-gray-600 dark:text-gray-400 text-xl">
          Interseed is a one-stop digital platform for all things sustainability.
          As a Front-End Engineer, I iterated upon user interface and front-end functionality during weekly sprints according to user feedback.
          My proudest achievement is implementing a mobile-responsive community map with a search function and 4 filter components.
          <br /><br />
          Our community is now 182 members and 34 organisations strong! Check us out at{' '}
          <a href='https://app.interseed.co' target='_blank' className="text-blue-500">app.interseed.co</a>!
          <br /><br />
          <div className="">
            <Image src={interseedSS} objectFit='cover' />
          </div>
          <em><b>Tech Used</b>: MongoDB, Express.js, React.js, Node.js, Redux, Github Actions</em>
        </p>
      </div>

      <div className="py-4 px-8 mb-10 bg-white shadow-lg rounded-xl">
        <h3 className="font-bold text-3xl md:text-4xl text-black dark:text-white">SG Code Campus</h3>
        <h4 className="font-semibold text-2xl md:text-3xl mb-6 text-black dark:text-white">Course Instructor</h4>
        <p className="text-gray-600 dark:text-gray-400 text-xl">
          Interseed is a one-stop digital platform for all things sustainability.
          As a Front-End Engineer, I iterated upon user interface and front-end functionality during weekly sprints according to user feedback.
          My proudest achievement is implementing a mobile-responsive community map with a search function and 4 filter components.
          <br /><br />
          Our community is now 182 members and 34 organisations strong!
          <br /><br />
        </p>
        <h4 className="font-semibold text-2xl md:text-3xl mb-6 text-black dark:text-white">Curriculum Developer</h4>
        <p className="text-gray-600 dark:text-gray-400 text-xl">
          Interseed is a one-stop digital platform for all things sustainability.
          As a Front-End Engineer, I iterated upon user interface and front-end functionality during weekly sprints according to user feedback.
          My proudest achievement is implementing a mobile-responsive community map with a search function and 4 filter components.
          <br /><br />
          Our community is now 182 members and 34 organisations strong!
          <br /><br />
        </p>
        <h4 className="font-semibold text-2xl md:text-3xl mb-6 text-black dark:text-white">Deep Learning Intern</h4>
        <p className="text-gray-600 dark:text-gray-400 text-xl">
          Interseed is a one-stop digital platform for all things sustainability.
          As a Front-End Engineer, I iterated upon user interface and front-end functionality during weekly sprints according to user feedback.
          My proudest achievement is implementing a mobile-responsive community map with a search function and 4 filter components.
          <br /><br />
          Our community is now 182 members and 34 organisations strong!
          <br /><br />
        </p>
      </div>

      <div className="py-4 px-8 bg-white shadow-lg rounded-xl">
        <h3 className="font-bold text-3xl md:text-4xl text-black dark:text-white">Nested Technologies</h3>
        <h4 className="font-semibold text-2xl md:text-3xl mb-6 text-black dark:text-white">Software Development Intern</h4>
        <p className="text-gray-600 dark:text-gray-400 text-xl">
          Interseed is a one-stop digital platform for all things sustainability.
          As a Front-End Engineer, I iterated upon user interface and front-end functionality during weekly sprints according to user feedback.
          My proudest achievement is implementing a mobile-responsive community map with a search function and 4 filter components.
          <br /><br />
          Our community is now 182 members and 34 organisations strong!
          <br /><br />
          <div className="">
            <Image src={interseedSS} objectFit='cover' />
          </div>
          <em><b>Tech Used</b>: MongoDB, Express.js, React.js, Node.js, Redux, Github Actions</em>
        </p>
      </div>
    </Container>
  )
}