import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "/styles/Home.module.css"
import NavBar from "/components/NavBar"
import Intro from "/components/project/Intro"

import Footer from "/components/Footer"
import BackToTop from "/components/BackToTop"

const inter = Inter({ subsets: ["latin"] })

export default function DomaineAventurier() {
	return (
		<>
			<Head>
				<title>Project | Domaine aventurier</title>
				<meta
					name="description"
					content="Domaine Aventurier - Pourvoirie chasse et pêche dans les Hautes Laurentides"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className=" dark:bg-[#222222] bg-[#27e193] overflow-x-hidden ">
				<section id="intro" className="pt-6 pb-8  sm:pb-16">
					<div className="container">
						<NavBar />
					</div>
					<Intro />
				</section>

				<section
					id="Footer"
					className="pb-16 pt-8 dark:bg-[#DCDAD9] bg-[#213B86]"
				>
					<div className="container">
						<Footer />
					</div>
				</section>
				<section id="BackToTop" className="dark:bg-[#DCDAD9] bg-[#213B86] ">
					<BackToTop />
				</section>
			</main>
		</>
	)
}
