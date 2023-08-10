import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
// import styles from "../styles/Home.module.css"
import NavBar from "../components/NavBar"
import Intro from "../components/Intro"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["home"])),
		},
	}
}
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	const { t } = useTranslation("home")
	return (
		<>
			<Head>
				<title>
					Manuel Fontenelle | Développeur web Full-stack ReactJs/NodeJs
				</title>
				<meta
					name="description"
					content="Manuel Fontenelle | Développeur Full-stack ReactJs/NodeJs"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />

				<meta
					property="og:title"
					content="Portfolio Manuel Fontenelle | Développeur Full-stack ReactJs/NodeJs"
				/>
				<meta
					property="og:description"
					content="Développeur Full-stack | ReactJs/NodeJs/NextJs/Strapi"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.manuelfontenelle.com" />
				<meta
					property="og:image"
					content="https://www.manuelfontenelle.com/ogimg.jpg"
				/>
				<meta property="og:site_name" content="Manuel Fontenelle" />
			</Head>

			<main className=" dark:bg-[#222222] bg-[#ffffff] overflow-x-hidden ">
				<section id="intro" className="pt-14 pb-8 sm:pb-16">
					<header className="bg-[#ffffff] dark:bg-[#222222] pt-5 z-30 ">
						<div className="container">
							<NavBar />
						</div>
					</header>
					<Intro />
				</section>
				<section
					id="about"
					className="pb-16 pt-8 dark:bg-[#DCDAD9] bg-[#213B86] "
				>
					<About />
				</section>
				<section
					id="Projects"
					className="pb-24 lg:mb-16 pt-8 md:mb-32 dark:bg-[#222222] bg-[#ffffff] "
				>
					<Projects />
				</section>
				<section
					id="Contact"
					className="pb-16 pt-8 md:mt-32 dark:bg-[#DCDAD9] bg-[#213B86]"
				>
					<Contact />
				</section>
				<section
					id="Footer"
					className="pb-16 pt-8 dark:bg-[#DCDAD9] bg-[#213B86]"
				>
					<div className="container">
						<Footer />
					</div>
				</section>
				<section
					id="BackToTop"
					className="dark:bg-[#DCDAD9] hover:dark:bg-[#222222] bg-[#213B86] hover:bg-[#27E193]"
				>
					<BackToTop />
				</section>
			</main>
		</>
	)
}
