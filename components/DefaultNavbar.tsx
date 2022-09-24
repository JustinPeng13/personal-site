import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";


function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

export default function DefaultNavbar() {
  return (
    <>
      <NavItem href="/" text="home" />
      <NavItem href="/about" text="about" />
      <Link href="/assets/justin_peng_resume.pdf">
        <a target='_blank' className='font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'>resume</a>
      </Link>
      <NavItem href="/experience" text="experience" />
      <NavItem href="/projects" text="projects" />
      <NavItem href="/contact" text="contact" />
    </>
  );
}