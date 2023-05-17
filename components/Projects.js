// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

import domaineAventurierImg from "../public/previews/domaine-aventurier.jpg"
import vintedImg from "../public/previews/vinted.jpg"
import marcFontenelleImg from "../public/previews/marc-fontenelle.jpg"
import cigaleConstructionImg from "../public/previews/cigale-construction.jpg"
import marvelImg from "../public/previews/marvel.jpg"

const Projects = () => {
	return (
		<>
			<div>
				<h2 className=" flex justify-center items-center font-SofiaSans text-[14.9vw] text-[#213B86] dark:text-[#DCDAD9] uppercase ml-[0%] leading-none whitespace-nowrap tracking-[-0.03em]">
					Projects
					<span className="">
						<svg
							width="342"
							height="200"
							viewBox="0 0 342 200"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="fill-[#213B86] dark:fill-[#DCDAD9] svg-sphere"
						>
							<path
								d="M170.996 199.06C125.68 199.06 83.0168 188.925 50.8773 170.514C18.0688 151.729 0 126.52 0 99.5299C0 72.5396 18.0688 47.3382 50.8773 28.546C83.0246 10.135 125.688 0 170.996 0C216.304 0 258.975 10.135 291.123 28.546C323.931 47.3304 342 72.5396 342 99.5299C342 126.52 323.931 151.722 291.123 170.514C258.975 188.925 216.312 199.06 170.996 199.06ZM170.996 7.5293C126.971 7.5293 85.6381 17.3143 54.6108 35.0797C24.2447 52.4718 7.52153 75.3553 7.52153 99.5299C7.52153 123.705 24.2447 146.596 54.6108 163.98C85.6381 181.746 126.971 191.531 170.996 191.531C215.021 191.531 256.354 181.746 287.381 163.98C317.748 146.588 334.471 123.705 334.471 99.5299C334.471 75.3553 317.748 52.464 287.381 35.0797C256.354 17.3143 215.021 7.5293 170.996 7.5293Z"
								fill=""
							/>
							<path
								d="M170.996 199.06C135.574 199.06 102.237 188.839 77.1135 170.273C51.6476 151.457 37.6235 126.334 37.6235 99.5299C37.6235 72.7262 51.6476 47.6026 77.1135 28.7871C102.237 10.2283 135.574 0 170.996 0C206.418 0 239.756 10.2205 264.879 28.7871C290.345 47.6026 304.369 72.7262 304.369 99.5299C304.369 126.334 290.345 151.457 264.879 170.273C239.756 188.832 206.418 199.06 170.996 199.06ZM170.996 7.5293C101.607 7.5293 45.1528 48.8005 45.1528 99.5377C45.1528 150.275 101.607 191.546 170.996 191.546C240.386 191.546 296.84 150.275 296.84 99.5377C296.84 48.8005 240.385 7.5293 170.996 7.5293Z"
								fill=""
							/>
							<path
								d="M170.996 199.06C125.12 199.06 87.8002 154.413 87.8002 99.5299C87.8002 44.6469 125.12 0 170.996 0C216.872 0 254.192 44.6469 254.192 99.5299C254.192 154.413 216.872 199.06 170.996 199.06ZM170.996 7.5293C129.266 7.5293 95.3218 48.8005 95.3218 99.5377C95.3218 150.275 129.274 191.546 170.996 191.546C212.719 191.546 246.67 150.275 246.67 99.5377C246.67 48.8005 212.726 7.5293 170.996 7.5293Z"
								fill=""
							/>
							<path
								d="M170.996 199.06C168.919 199.06 167.231 197.38 167.231 195.295V3.76465C167.231 1.68787 168.912 0 170.996 0C173.081 0 174.76 1.68009 174.76 3.76465V195.295C174.76 197.372 173.073 199.06 170.996 199.06Z"
								fill=""
							/>
							<path
								d="M338.235 103.295H3.76465C1.68787 103.295 0 101.607 0 99.5299C0 97.4531 1.68787 95.7652 3.76465 95.7652H338.235C340.312 95.7652 342 97.4531 342 99.5299C342 101.607 340.32 103.295 338.235 103.295Z"
								fill=""
							/>
							<path
								d="M169.767 63.0347C145.655 63.0347 122.196 61.7202 100.043 59.1301C85.9804 57.4966 72.5396 55.3343 60.1023 52.7052C51.2507 50.8463 42.8735 48.715 35.1965 46.3816C33.213 45.7749 32.0929 43.6748 32.6919 41.6835C33.2986 39.7001 35.3987 38.58 37.3899 39.179C44.8492 41.4502 53.0086 43.527 61.6501 45.3393C73.8697 47.9216 87.0771 50.0451 100.915 51.6552C122.779 54.2142 145.943 55.5054 169.767 55.5054C170.148 55.5054 170.529 55.5054 170.918 55.4976C170.942 55.4976 170.973 55.4976 170.996 55.4976C195.249 55.4587 218.785 54.0742 240.938 51.3752C254.853 49.6873 267.975 47.5016 279.938 44.8804C288.579 43.0136 296.638 40.9135 303.879 38.6345C305.862 38.0122 307.97 39.1167 308.593 41.0924C309.215 43.0758 308.11 45.1837 306.135 45.806C298.668 48.1472 290.392 50.3096 281.532 52.223C269.344 54.8909 255.989 57.1155 241.84 58.8345C219.4 61.5646 195.583 62.9725 171.043 63.0114C170.607 63.0191 170.195 63.0192 169.759 63.0192L169.767 63.0347Z"
								fill=""
							/>
							<path
								d="M305.015 160.589C304.642 160.589 304.26 160.534 303.887 160.418C296.638 158.139 288.587 156.039 279.954 154.18C267.975 151.558 254.853 149.373 240.946 147.685C218.793 144.986 195.264 143.601 171.004 143.562C170.981 143.562 170.95 143.562 170.926 143.562C170.537 143.555 170.156 143.555 169.775 143.555C145.951 143.555 122.787 144.853 100.923 147.405C87.0851 149.015 73.8777 151.138 61.6581 153.721C53.0165 155.533 44.8572 157.61 37.3901 159.881C35.4067 160.488 33.2988 159.368 32.6921 157.376C32.0854 155.393 33.2055 153.285 35.1967 152.678C42.866 150.337 51.2509 148.214 60.1025 146.355C72.5398 143.726 85.9728 141.563 100.044 139.93C122.196 137.34 145.647 136.025 169.767 136.025C170.203 136.025 170.615 136.025 171.051 136.033C195.591 136.072 219.416 137.48 241.848 140.21C255.989 141.929 269.344 144.153 281.548 146.821C290.4 148.735 298.676 150.889 306.135 153.238C308.118 153.861 309.215 155.969 308.593 157.952C308.087 159.562 306.602 160.589 305.007 160.589H305.015Z"
								fill=""
							/>
						</svg>
					</span>
					Projects
				</h2>
				<div className="container">
					<div className="flex flex-col gap-14">
						<div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-end mt-5 ">
							<Link
								href="/projects/domaineAventurier"
								className="h-[400px] md:h-[550px] xl:h-[750px] w-[100%] md:w-[60%] rounded-md"
							>
								<Image
									src={domaineAventurierImg}
									className="h-full w-full object-cover rounded-md"
									alt="Picture of the author "
								/>
							</Link>
							<Link
								href="/projects/cigaleConstruction"
								className="h-[400px] md:h-[350px] xl:h-[500px] w-[100%] md:w-[36%] bg-[#213B86] dark:bg-[#DCDAD9] rounded-md"
							>
								<Image
									src={cigaleConstructionImg}
									className="h-full w-full object-cover rounded-md"
									alt="Picture of the author"
								/>
							</Link>
						</div>
						<div className="flex flex-row justify-center items-end ">
							<Link
								href="/projects/vinted"
								className="h-[400px] md:h-[550px] xl:h-[750px] w-[100%] md:w-[60%] bg-[#213B86] dark:bg-[#DCDAD9] rounded-md"
							>
								<Image
									src={vintedImg}
									className="h-full w-full object-cover rounded-md"
									alt="Picture of the author"
								/>
							</Link>
						</div>
						<div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-end ">
							<Link
								href="/projects/marvel"
								className="h-[400px] md:h-[350px] xl:h-[500px] w-[100%] md:w-[36%] bg-[#213B86] dark:bg-[#DCDAD9] rounded-md md:mb-[-6rem;]"
							>
								<Image
									src={marvelImg}
									className="h-full w-full object-cover rounded-md"
									alt="Picture of the author"
								/>
							</Link>
							<Link
								href="/projects/marcFontenelle"
								className="h-[400px] md:h-[550px] xl:h-[750px] w-[100%] md:w-[60%] bg-[#213B86] dark:bg-[#DCDAD9] rounded-md"
							>
								<Image
									src={marcFontenelleImg}
									className="h-full w-full object-cover rounded-md"
									alt="Picture of the author"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Projects