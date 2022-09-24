import Container from "../components/Container";

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-col-reverse sm:flex-row mb-16">
        <div className="flex flex-col pr-8">
          <h1 className="text-right font-bold text-5xl md:text-6xl mb-2 text-black dark:text-white">
            Contact Me
          </h1>
          <h2 className="text-right text-gray-700 dark:text-gray-200 mb-4 text-3xl md:text-4xl">
            Justin Peng
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-xl">
            I'm honoured that you want to get in touch with me, even if it's negative feedback hahaha... 😟
          </p>
        </div>
      </div>
    </Container>
  )
}