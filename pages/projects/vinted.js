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
import vinted1 from "../../public/projects/vinted1.jpg"
import vinted2 from "../../public/projects/vinted2.jpg"
import vinted3 from "../../public/projects/vinted3.jpg"
import vinted4 from "../../public/projects/vinted4.jpg"

const inter = Inter({ subsets: ["latin"] })

export default function DomaineAventurier() {
	return (
		<>
			<Head>
				<title>Project | Vinted clone</title>
				<meta
					name="description"
					content="Vinted Clone - Fullstack React js | CRUD / MongoDb / Stripe payment"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className=" dark:bg-[#DCDAD9] bg-[#27e193] overflow-x-hidden ">
				<section id="introProject" className="pt-14 pb-8  md:pb-16">
					<header className="bg-[#27e193] dark:bg-[#DCDAD9] pt-5 z-20">
						<div className="container">
							<NavBar />
						</div>
					</header>
					<Intro
						img1={vinted1}
						descAlt={"Vinted"}
						objectPosition={"objectPositionLeft27"}
						titreIntro="Vinted Clone"
						textIntro="Full Stack React js Web App"
						urlIntro="vinted-frontend-manuelf.netlify.app"
						urlDetailIntro="https://vinted-frontend-manuelf.netlify.app/"
					/>
				</section>
				<section
					id="aboutProject"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<About
						desc1={"Vinted Clone web App realisation"}
						desc2={" React Js • Node Js • Mongo DB • CRUD • Stripe payment"}
						client={"Vinted"}
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
						img2={vinted2}
						img3={vinted3}
						img4={vinted4}
						paddingBlock1={""}
						paddingBlock2={""}
						paddingBlock3={""}
						object1={"object-cover"}
						object2={"object-cover"}
						object3={"object-cover"}
						descAlt={"Vinted"}
					/>
				</section>

				<section
					id="navProject"
					className=" pt-4 md:pt-8 dark:bg-[#222222] bg-[#213B86]"
				>
					<NavProject
						prevUrl="/projects/cigaleConstruction"
						nextUrl="/projects/marvel"
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
