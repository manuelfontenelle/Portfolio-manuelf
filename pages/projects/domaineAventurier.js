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
import domaineAventurier1 from "../../public/projects/domaine-aventurier1.jpg"
import domaineAventurier2 from "../../public/projects/domaine-aventurier2.png"
import domaineAventurier3 from "../../public/projects/domaine-aventurier3.jpg"
import domaineAventurier4 from "../../public/projects/domaine-aventurier4.png"

const inter = Inter({ subsets: ["latin"] })

export default function DomaineAventurier() {
	return (
		<>
			<Head>
				<title>Project | Domaine aventurier</title>
				<meta
					name="description"
					content="Domaine Aventurier - Hunting and fishing outfitter in the Hautes Laurentides"
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
						img1={domaineAventurier1}
						descAlt={"Domaine Aventurier"}
						objectPosition={"objectPositionLeft15"}
						titreIntro="Domaine Aventurier"
						textIntro="Domaine Aventurier is a hunting and fishing outfitter in the Hautes Laurentides, in the province of Quebec."
						urlIntro="domaineaventurier.com"
						urlDetailIntro="https://domaine-aventurier-i18n.vercel.app/"
					/>
				</section>
				<section
					id="aboutProject"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<About
						desc1={"Domaine Aventurier website realisation"}
						desc2={"Figma • React Js • Next Js • i18n • Node Js • Nodemailer "}
						client={"Domaine Aventurier"}
						role={"Web Designer & Web Developer"}
						year={"2023"}
						country={"Canada"}
					/>
				</section>
				<section
					id="gallery"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<Gallery
						img2={domaineAventurier2}
						img3={domaineAventurier3}
						img4={domaineAventurier4}
						paddingBlock1={"lg:py-10"}
						paddingBlock2={""}
						paddingBlock3={"lg:py-10"}
						object1={"object-contain"}
						object2={"object-cover"}
						object3={"object-contain"}
						descAlt={"Domaine Aventurier"}
					/>
				</section>

				<section
					id="navProject"
					className=" pt-4 md:pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<NavProject
						prevUrl="/projects/marcFontenelle"
						nextUrl="/projects/cigaleConstruction"
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
