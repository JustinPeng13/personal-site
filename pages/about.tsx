import Link from "next/link";
import Container from "../components/Container";

export default function About() {
  return (
    <Container>
      <div className="flex flex-col pr-8">
        <h1 className="text-right font-bold text-5xl md:text-6xl mb-2 text-black dark:text-white">
          About Me
        </h1>
        <h2 className="text-right text-gray-700 dark:text-gray-300 mb-2 text-3xl md:text-4xl">
          Justin Peng
        </h2>
      </div>

      <div className="mt-6 text-gray-600 dark:text-gray-400 text-xl text-justify">
        <p>
          Hi! I&apos;m currently a Sophomore (Year 2) majoring in Computer Science at the National University of Singapore.
        </p>

        <p className="mt-6">
          My interest in programming started back when I was 13, from my school&apos;s&nbsp;
          <Link href='https://www.ri.edu.sg/learning-at-ri/year-1-4/core-subjects/computer-studies'>
            <a target='_blank' rel='noopener noreferrer' className="text-blue-600">Computer Studies</a>
          </Link>
          &nbsp;classes, in which I built websites in HTML, CSS, and JavaScript.
          Then, I took on the 3-year Computer Elective Programme, which introduced me to Python and the Django framework, and game development.
        </p>

        <p className="mt-6">
          While undergoing National Service, I spent my free time completing online programming&nbsp;
          <Link href='#courses-certifications'>
            <a className="text-blue-600">courses</a>
          </Link>
          &nbsp;and reading books on the future of AI.
          I landed a software development internship at&nbsp;
          <Link href='/experience#nestedai'>
            <a className="text-blue-600">Nested Technologies</a>
          </Link>
          , following which I taught and developed curricula at&nbsp;
          <Link href='/experience#sgcc'>
            <a className="text-blue-600">SG Code Campus</a>
          </Link>
          , before finally starting my Computer Science degree at NUS.
        </p>

        <p className="mt-4">
          At NUS, I developed an interest in sustainability, and joined&nbsp;
          <Link href='/experience#interseed'>
            <a className="text-blue-600">Interseed.co</a>
          </Link>
          &nbsp;as a front-end engineer.
          I also embarked on various&nbsp;
          <Link href='/projects'>
            <a className="text-blue-600">projects</a>
          </Link>
          &nbsp;and joined&nbsp;
          <Link href='#activities'>
            <a className="text-blue-600">extra-curricular activities</a>
          </Link>
          .
        </p>

        <div id='courses-certifications' className="mt-8">
          <b>Courses &amp; Certifications</b>
          <ul className="list-disc list-inside">
            <li>AWS Certified Developer - Associate (In Progress)</li>
            <li>DeepLearning.AI Deep Learning Specialisation (In Progress)</li>
            <li>Orbital - Apollo 11 (Advanced)</li>
            <li>Stanford University Machine Learning</li>
            <li>Johns Hopkins University HTML, CSS, and Javascript for Web Developers</li>
            <li>Smartcademy Data Analytics</li>
          </ul>
        </div>

        <div className="md:grid md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="mt-8">
              <b>Interests</b>
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
            <p className="mt-8">
              <b>Hobbies</b>
              <ul className="list-disc list-inside">
                <li>Tennis 🎾</li>
                <li>Dancing 🕺</li>
                <li>Valorant 🎮</li>
                <li>Gymming 🏋</li>
              </ul>
            </p>
          </div>
        </div>

        <div id='activities' className="mt-8">
          <b>Extra-Curricular Activities</b>
          <ul className="list-disc list-inside">
            <li>NUS Fintech Society &ndash; Tech Lead (Fintech Website)</li>
            <li>Tembusu Student Developer Club &ndash; Co-Director</li>
            <li>Tembusu Tennis Team &ndash; Co-Captain</li>
            <li>SoC Bash &ndash; Head of Programmes &amp; Logistics</li>
            <li>NUS SAVE &ndash; Green Canteens Ambassador</li>
            <li>Korean Cultural Interest Group &ndash; Cover Dancer</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}