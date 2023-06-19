// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import Competence from "./Competence"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const About = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		//// settings global des animations ////
		ScrollTrigger.defaults({
			toggleActions: "restart pause reverse pause",
			// markers: true,
			// onEnter: () => console.log("enter"),
			// onLeave: () => console.log("leave"),
			// start: "-450px center",
			// end: "-300px center",
			// scrub: 3,
			// duration: 6,
		})
		//// settings d'animation d'1 box ////
		// gsap.to(".boxAnim", {
		// 	scrollTrigger: {
		// 		trigger: ".boxAnim",
		// 		start: "-450px center",
		// 		end: "-300px center",
		// 		scrub: 2,
		// 	},
		// 	scale: 1,
		// 	opacity: 1,
		// })

		//// settings global des animations des boxs ////
		const boxAnims = gsap.utils.toArray(".boxAnim")
		boxAnims.forEach((boxAnim) => {
			gsap.to(boxAnim, {
				scrollTrigger: {
					trigger: boxAnim,
					start: "-700px center",
					end: "-50px center",
					scrub: 1,
				},
				scale: 1,
				opacity: 1,
			})
		})

		//// settings d'animation d'1 titre ////
		// gsap.to(".title1Anim", {
		// 	scrollTrigger: {
		// 		trigger: ".title1Anim",
		// 		// markers: true,
		// 		start: "-350px center",
		// 		end: "-50px center",
		// 		scrub: 1,
		// 	},
		// 	y: 0,
		// 	opacity: 1,
		// })

		//// settings global des animations des titres ////
		const titleAnims = gsap.utils.toArray(".titleAnim")
		titleAnims.forEach((titleAnim) => {
			gsap.to(titleAnim, {
				scrollTrigger: {
					trigger: titleAnim,
					start: "-450px center",
					end: "-150px center",
					scrub: 1,
				},
				y: 0,
				opacity: 1,
			})
		})

		//// settings global des animations des textes ////
		const textesAnims = gsap.utils.toArray(".texteAnim")
		textesAnims.forEach((texteAnim) => {
			gsap.to(texteAnim, {
				scrollTrigger: {
					trigger: texteAnim,
					start: "-300px center",
					end: "-150px center",
					scrub: 1,
				},
				opacity: 1,
			})
		})

		//// settings d'animation d'1 compétence ////
		// gsap.to(".cpt1", {
		// 	scrollTrigger: ".cpt1",
		// 	x: 0,
		// 	duration: 1,
		// })

		//// settings global des animations des compétences ////
		const competences = gsap.utils.toArray(".cpt")
		competences.forEach((competence) => {
			gsap.to(competence, {
				scrollTrigger: {
					trigger: competence,
					// toggleActions: "restart pause reverse pause",
					start: "-450px center",
					end: "-300px center",
					scrub: 3,
				},
				x: 0,
				duration: 1,
			})
		})
	}, [])

	return (
		<>
			<div>
				<h2 className=" flex justify-start items-center font-SofiaSans text-[14.9vw] text-[#DCDAD9] dark:text-[#222222] uppercase ml-[0%] leading-none whitespace-nowrap tracking-[-0.03em]">
					<div className="messageDefilant">
						About
						<span className="">
							<svg
								width="342"
								height="200"
								viewBox="0 0 342 200"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="fill-[#DCDAD9] dark:fill-[#222222] svg-sphere"
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
					</div>
					<div className="messageDefilant">
						About
						<span className="">
							<svg
								width="342"
								height="200"
								viewBox="0 0 342 200"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="fill-[#DCDAD9] dark:fill-[#222222] svg-sphere"
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
					</div>
					<div className="messageDefilant">
						About
						<span className="">
							<svg
								width="342"
								height="200"
								viewBox="0 0 342 200"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="fill-[#DCDAD9] dark:fill-[#222222] svg-sphere"
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
					</div>
				</h2>
				<div className="container">
					<div className="flex justify-between border-t-[1px] border-[#DCDAD9] dark:border-[#222222] pb-14 pt-4 mt-5 text-[#DCDAD9]  dark:text-[#222222] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" sm:w-[48%] font-SofiaSans text-xl uppercase ">
							<div className="overflow-hidden relative flex items-center justify-start h-8">
								<h3 className="titleAnim">About me</h3>
							</div>
						</div>
						<div className=" sm:w-[48%]  font-Inter font-medium text-sm sm:text-base texteAnim ">
							As a Fullstack developer, I can take care of the total creation of
							your website (showcase / ecommerce / portfolio / blog /
							application).
							<br />
							<br />
							I will take care of the user experience part on the front-end and
							database / data management on the back-end part.
							<br />
							<br />
							And I am also graphic and web designer ;)
						</div>
					</div>
					<div className="flex justify-between border-t-[1px] border-[#DCDAD9] dark:border-[#222222]  pt-4 mt-5 text-[#DCDAD9]  dark:text-[#222222] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" sm:w-[48%] font-SofiaSans text-xl uppercase">
							<div className="overflow-hidden relative flex items-center justify-start h-7">
								<h3 className="titleAnim">Here's what i do</h3>
							</div>
						</div>

						<div className="sm:w-[48%] gap-5 flex justify-between flex-wrap">
							<div className="boxAnim w-[100%] xl:w-[48%]">
								<Competence
									title="front-end"
									svg={
										<svg
											width="45"
											height="45"
											viewBox="0 0 45 45"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="svgAbout fill-[#101D43] dark:fill-[#DCDAD9] "
										>
											<path
												d="M0.186976 25.4325C1.45961 35.4498 9.54917 43.5394 19.5676 44.8132C34.2631 46.6816 46.6815 34.2642 44.8133 19.5675C43.5406 9.55017 35.4511 1.46063 25.4326 0.186761C10.7348 -1.68155 -1.68247 10.7358 0.186976 25.4325ZM11.4632 13.107C11.4632 12.2009 12.1986 11.4643 13.1058 11.4643H31.8909C32.797 11.4643 33.5336 12.1997 33.5336 13.107V31.893C33.5336 32.7991 32.7982 33.5357 31.8909 33.5357H13.1058C12.1998 33.5357 11.4632 32.8003 11.4632 31.893V13.107Z"
												fill=""
											/>
										</svg>
									}
									desc1="The Front-End corresponds to all the part of the code that will be executed in the web browser, namely all of the interface and its functionalities."
									desc2="The Front-End developer is responsible for the architecture of the web application and the logical implementation of its functionalities."
								/>
							</div>
							<div className="boxAnim w-[100%] xl:w-[48%]">
								<Competence
									title="Back-end"
									svg={
										<svg
											width="45"
											height="45"
											viewBox="0 0 45 45"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="svgAbout fill-[#101D43] dark:fill-[#DCDAD9] "
										>
											<path
												d="M19.5675 44.8132C34.263 46.6816 46.6815 34.2642 44.8132 19.5675C43.5406 9.55017 35.451 1.46063 25.4325 0.186761C10.7369 -1.68155 -1.68154 10.7358 0.186741 25.4325C1.46169 35.451 9.55015 43.5405 19.5675 44.8132ZM22.5012 11.4651C28.5951 11.4651 33.537 16.4045 33.537 22.5009C33.537 28.5949 28.5951 33.5367 22.5012 33.5367C16.4072 33.5367 11.4654 28.5949 11.4654 22.5009C11.4654 16.4069 16.4072 11.4651 22.5012 11.4651Z"
												fill=""
											/>
										</svg>
									}
									desc1="The back-end refers to the technical and functional side of a website. Unlike the front-end, the back end takes care of all the back-office part, that is to say the essential elements for the operation of the site, but which are invisible to Internet users."
									desc2="Like database management or the concept of CRUd (create, read, update, delete)"
								/>
							</div>
							<div className="boxAnim w-[100%] xl:w-[48%]">
								<Competence
									title="Cms"
									svg={
										<svg
											width="45"
											height="45"
											viewBox="0 0 45 45"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="svgAbout fill-[#101D43] dark:fill-[#DCDAD9]"
										>
											<path
												d="M19.5675 44.8132C34.263 46.6815 46.6815 34.2642 44.8132 19.5675C43.5406 9.55017 35.451 1.46063 25.4325 0.186761C10.7369 -1.68155 -1.68154 10.7358 0.186741 25.4325C1.46055 35.4498 9.55015 43.5382 19.5675 44.8132ZM9.85484 28.2676L21.0909 9.48243C21.7278 8.41712 23.2731 8.41712 23.91 9.48243L35.1449 28.2676C35.4485 28.7762 35.4554 29.4051 35.1633 29.9217C34.8723 30.436 34.3259 30.7545 33.7348 30.7545H11.2635C10.6724 30.7545 10.1272 30.4372 9.83508 29.9217C9.54412 29.4062 9.55128 28.775 9.85484 28.2676Z"
												fill=""
											/>
										</svg>
									}
									desc1="CMS is the acronym for Content Management System. It is an online interface through which it is possible to easily manage and modify a website, without the need for technical knowledge of computer language."
									desc2="Strapi is a platform with many tools that allow flexible use from all frontend frameworks"
								/>
							</div>
							<div className="boxAnim w-[100%] xl:w-[48%]">
								<Competence
									title="ui/ux design"
									svg={
										<svg
											width="45"
											height="45"
											viewBox="0 0 45 45"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="svgAbout fill-[#101D43] dark:fill-[#DCDAD9]"
										>
											<path
												d="M25.4324 44.813C35.4497 43.5404 43.5392 35.4508 44.813 25.4324C46.6813 10.7346 34.2641 -1.6815 19.5674 0.18677C9.55012 1.4594 1.46062 9.54896 0.18676 19.5674C-1.68154 34.2652 10.7357 46.6825 25.4324 44.813ZM11.9454 14.2685C11.3027 13.6258 11.3027 12.588 11.9454 11.9465C12.588 11.3039 13.6258 11.3039 14.2673 11.9465L22.4999 20.1791L30.7325 11.9465C31.3751 11.3039 32.4129 11.3039 33.0544 11.9465C33.697 12.5892 33.697 13.627 33.0544 14.2685L24.8218 22.5011L33.0544 30.7337C33.697 31.3763 33.697 32.4141 33.0544 33.0556C32.7337 33.3764 32.3133 33.5367 31.8929 33.5367C31.4725 33.5367 31.0521 33.3763 30.7314 33.0556L22.5 24.823L14.2673 33.0556C13.9466 33.3764 13.5262 33.5367 13.1058 33.5367C12.6854 33.5367 12.265 33.3763 11.9443 33.0556C11.3017 32.413 11.3017 31.3752 11.9443 30.7337L20.1769 22.5011L11.9454 14.2685Z"
												fill=""
											/>
										</svg>
									}
									desc1="UI is short for user interface. The mission of the UI designer is to create a web interface that is graphically pleasing and easy to learn."
									desc2="UX refers to the overall quality of interactions between the user and the site or app. It is determined by technical, practical and emotional aspects. The quality of the user experience on a site requires significant design work."
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-between border-t-[1px] border-[#DCDAD9] dark:border-[#222222] xl:pb-14 pt-4 mt-5 text-[#DCDAD9]  dark:text-[#222222] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" sm:w-[48%] font-SofiaSans text-xl uppercase">
							<div className="overflow-hidden relative flex items-center justify-start h-8">
								<h3 className="titleAnim">Tools</h3>
							</div>
						</div>
						<div className=" sm:w-[48%]  font-Inter  font-bold  text-3xl sm:text-5xl flex flex-col sm:gap-1  competencesGrp">
							<span className="cpt">JAVASCRIPT</span>
							<span className="cpt">TYPESCRIPT</span>
							<span className="cpt">HTML</span>
							<span className="cpt">CSS / SCSS</span>
							<span className="cpt">REACT JS</span>
							<span className="cpt">NEXT JS</span>
							<span className="cpt">PHP / SQL</span>
							<span className="cpt">LARAVEL</span>
							<span className="cpt">WORDPRESS</span>
							<span className="cpt">STRAPI</span>
							{/* <span className="cpt">VUE JS</span> */}
							<span className="cpt">TAILWIND CSS</span>
							<span className="cpt">GSAP / THREEJS</span>
							<span className="cpt">VERCEL</span>
							<span className="cpt">NETLIFY</span>
							<span className="cpt">HEROKU</span>
							<span className="cpt">GIT / GITHUB</span>
							<span className="cpt">FIGMA / PS / AI</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
