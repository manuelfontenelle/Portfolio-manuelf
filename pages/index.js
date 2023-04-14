import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"
import NavBar from "../components/NavBar"
import Intro from "../components/Intro"
import About from "../components/About"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Manuel Fontenelle | Développeur Full-stack ReactJs/NodeJs</title>
				<meta
					name="description"
					content="Manuel Fontenelle | Développeur Full-stack ReactJs/NodeJs"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className=" dark:bg-[#222222] bg-[#27e193] h-[100vh] pt-8 overflow-x-hidden">
				<div className="container">
					<NavBar />
				</div>

				<section id="intro" className=" pb-16 sm:h-[92vh] sm:pb-0">
					<Intro />
				</section>
				<section
					id="about"
					className="pb-16 pt-8 dark:bg-[#DCDAD9] bg-[#213B86] "
				>
					<About />
				</section>
			</main>
		</>
	)
}
