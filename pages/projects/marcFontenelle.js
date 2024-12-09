import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "/styles/Home.module.css"
import NavBar from "/components/project/NavBar"
import Intro from "/components/project/Intro"
import About from "../../components/project/About"
import Gallery from "../../components/project/Gallery"
import NavProject from "../../components/project/NavProject"

import Footer from "/components/project/Footer"
import BackToTop from "/components/BackToTop"
import marcFontenelle1 from "../../public/projects/marc-fontenelle1.jpg"
import marcFontenelle2 from "../../public/projects/marc-fontenelle2.jpg"
import marcFontenelle3 from "../../public/projects/marc-fontenelle3.jpg"
import marcFontenelle4 from "../../public/projects/marc-fontenelle4.png"

const inter = Inter({ subsets: ["latin"] })

import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	}
}

export default function marcFontenelle() {
	const { t } = useTranslation("common")
	return (
		<>
			<Head>
				<title>Project | Marc Fontenelle</title>
				<meta
					name="description"
					content="Marc Fontenelle - Portfolio - Artist / Sculptor"
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
						img1={marcFontenelle1}
						descAlt={"Marc Fontenelle"}
						objectPosition={"objectPositionLeft27"}
						titreIntro="Marc Fontenelle"
						textIntro={t("common.marcFontenelleDesc")}
						urlIntro="marcfontenelle.com"
						urlDetailIntro="https://marcfontenelle.com/"
					/>
				</section>
				<section
					id="aboutProject"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<About
						desc1={"Marc Fontenelle website realisation"}
						desc2={"Figma • Html • Css • Js • Node Js • Nodemailer "}
						client={"Marc Fontenelle"}
						role={"Web Designer & Web Developer"}
						year={"2022"}
						country={"France"}
					/>
				</section>
				<section
					id="gallery"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<Gallery
						img2={marcFontenelle2}
						img3={marcFontenelle3}
						img4={marcFontenelle4}
						paddingBlock1={""}
						paddingBlock2={""}
						paddingBlock3={"lg:py-10"}
						object1={"object-cover"}
						object2={"object-cover"}
						object3={"object-contain"}
						descAlt={"Marc Fontenelle"}
					/>
				</section>

				<section
					id="navProject"
					className=" pt-4 md:pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<NavProject
						prevUrl="/projects/marvel"
						nextUrl="/projects/domaineAventurier"
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
