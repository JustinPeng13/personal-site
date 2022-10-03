import Container from "../components/Container";

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-col pr-8 mb-6">
        <h1 className="text-right font-bold text-5xl sm:text-6xl mb-2 text-black dark:text-white">
          Contact Me
        </h1>
        <h2 className="text-right text-gray-700 dark:text-gray-300 mb-4 text-3xl sm:text-4xl">
          Justin Peng
        </h2>
      </div>
    </Container>
  )
}