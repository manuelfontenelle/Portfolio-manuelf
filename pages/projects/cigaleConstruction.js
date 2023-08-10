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
import cigaleConstruction1 from "../../public/projects/cigale-construction1.jpg"
import cigaleConstruction2 from "../../public/projects/cigale-construction2.jpg"
import cigaleConstruction3 from "../../public/projects/cigale-construction3.png"
import cigaleConstruction4 from "../../public/projects/cigale-construction4.png"

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

export default function cigaleConstruction() {
	const { t } = useTranslation("common")
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

			<main className=" dark:bg-[#DCDAD9] bg-[#ffffff] overflow-x-hidden ">
				<section id="introProject" className="pt-14 pb-8 md:pb-16">
					<header className="bg-[#ffffff] dark:bg-[#DCDAD9] pt-5 z-20">
						<div className="container">
							<NavBar />
						</div>
					</header>
					<Intro
						img1={cigaleConstruction1}
						descAlt={"Cigale Construction"}
						objectPosition={""}
						titreIntro="Cigale Construction"
						textIntro={t("common.cigaleConstructionDesc")}
						urlIntro="cigaleconstruction.ca"
						urlDetailIntro="https://www.cigaleconstruction.ca/"
					/>
				</section>
				<section
					id="aboutProject"
					className="pb-8 md:pb-16 pt-8 dark:bg-[#222222] bg-[#213B86] "
				>
					<About
						desc1={"Cigale Construction website realisation"}
						desc2={"Figma • React Js • Next Js • Node Js • Nodemailer "}
						client={"Cigale Construction"}
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
					<NavProject
						prevUrl="/projects/domaineAventurier"
						nextUrl="/projects/vinted"
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
