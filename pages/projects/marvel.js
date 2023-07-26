import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "/styles/Home.module.css"
import NavBar from "/components/project/NavBar"
import Intro from "/components/project/Intro"
import About from "../../components/project/About"
import Gallery from "../../components/project/Gallery"
import NavProject from "../../components/project/NavProject"

import Footer from "../../components/Footer"
import BackToTop from "/components/BackToTop"
import marvel1 from "../../public/projects/marvel1.jpg"
import marvel2 from "../../public/projects/marvel2.png"
import marvel3 from "../../public/projects/marvel3.jpg"
import marvel4 from "../../public/projects/marvel4.png"

const inter = Inter({ subsets: ["latin"] })

export default function DomaineAventurier() {
	return (
		<>
			<Head>
				<title>Project | Marvel Library</title>
				<meta
					name="description"
					content="Marvel Library - Fullstack React js | Characters / Comics / Favorites"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className=" dark:bg-[#DCDAD9] bg-[#ffffff] overflow-x-hidden ">
				<section id="introProject" className="pt-14 pb-8 md:pb-16">
					<header className="bg-[#ffffff] dark:bg-[#DCDAD9] pt-5 z-20">
						<div className="container">
							<NavBar />
						</div>
					</header>
					<Intro
						img1={marvel1}
						descAlt={"Marvel"}
						objectPosition={"objectPositionLeft27"}
						titreIntro="Marvel Library"
						textIntro="Full Stack React Js Web App"
						urlIntro="marvel-manuelf.netlify.app"
						urlDetailIntro="https://marvel-manuelf.netlify.app/"
					/>
				</section>
				<section
					id="aboutProject"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<About
						desc1={"Marvel Library web App realisation"}
						desc2={" React Js • Node Js • Call Api "}
						client={"Marvel"}
						role={"Web Designer & Web Developer"}
						year={"2023"}
						country={"France"}
					/>
				</section>
				<section
					id="gallery"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<Gallery
						img2={marvel2}
						img3={marvel3}
						img4={marvel4}
						paddingBlock1={""}
						paddingBlock2={""}
						paddingBlock3={"lg:py-10"}
						object1={"object-contain"}
						object2={"object-cover"}
						object3={"object-contain"}
						descAlt={"Marvel Library"}
					/>
				</section>

				<section
					id="navProject"
					className=" pt-4 md:pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<NavProject
						prevUrl="/projects/vinted"
						nextUrl="/projects/marcFontenelle"
					/>
				</section>

				<section
					id="Footer"
					className="pb-8 md:pb-16  dark:bg-[#222222] bg-[#213B86]"
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
