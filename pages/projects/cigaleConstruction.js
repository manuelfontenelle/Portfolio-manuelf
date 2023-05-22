import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "/styles/Home.module.css"
import NavBar from "/components/project/NavBar"
import Intro from "/components/project/Intro"
import About from "../../components/project/About"
import Gallery from "../../components/project/Gallery"
import NavProject from "../../components/project/NavProject"

import Footer from "/components/Footer"
import BackToTop from "/components/BackToTop"
import cigaleConstruction1 from "../../public/projects/cigale-construction1.jpg"
import cigaleConstruction2 from "../../public/projects/cigale-construction2.jpg"
import cigaleConstruction3 from "../../public/projects/cigale-construction3.png"
import cigaleConstruction4 from "../../public/projects/cigale-construction4.png"

const inter = Inter({ subsets: ["latin"] })

export default function DomaineAventurier() {
	return (
		<>
			<Head>
				<title>Project | Cigale Construction</title>
				<meta
					name="description"
					content="Cigale Construction - General Contractor specializing in the realization of Architectural projects. Located in the greater Montreal area."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className=" dark:bg-[#DCDAD9] bg-[#27e193] overflow-x-hidden ">
				<section id="introProject" className="pt-6 pb-8  md:pb-16">
					<div className="container">
						<NavBar />
					</div>
					<Intro
						img1={cigaleConstruction1}
						descAlt={"Cigale Construction"}
						objectPosition={""}
						titreIntro="Cigale Construction"
						textIntro="General Contractor specializing in the realization of Architectural projects. Located in the greater Montreal area."
						urlIntro="cigaleconstruction.ca"
						urlDetailIntro="https://www.cigaleconstruction.ca/"
					/>
				</section>
				<section
					id="aboutProject"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<About />
				</section>
				<section
					id="gallery"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<Gallery
						img2={cigaleConstruction2}
						img3={cigaleConstruction3}
						img4={cigaleConstruction4}
						paddingBlock1={""}
						paddingBlock2={"lg:py-10"}
						paddingBlock3={"lg:py-10"}
						object1={"object-cover"}
						object2={"object-contain"}
						object3={"object-contain"}
						descAlt={"Cigale Construction"}
					/>
				</section>

				<section
					id="navProject"
					className=" pt-4 md:pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<NavProject />
				</section>

				<section
					id="Footer"
					className="pb-8 md:pb-16  dark:bg-[#222222] bg-[#213B86]"
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
