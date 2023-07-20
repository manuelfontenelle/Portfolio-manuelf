// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import manuImg from "../public/manuelfontenelle.jpg"
const Intro = () => {
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<h2 className="mt-3 font-SofiaSans text-[14.9vw] text-[#213B86] dark:text-[#DCDAD9] uppercase  leading-none whitespace-nowrap tracking-[-0.03em] flex justify-start">
					<div className="messageDefilant">Web developer &nbsp;</div>
					<div className="messageDefilant">Web developer &nbsp;</div>
					<div className="messageDefilant">Web developer &nbsp;</div>
				</h2>

				<div className="container">
					<div className="flex justify-between mt-[3vh] flex-col sm:flex-row gap-10 sm:gap-0">
						<h3 className=" sm:w-[40%]  font-Inter text-sm sm:text-lg  font-medium text-[#213B86]  dark:text-[#DCDAD9] introTxtContainer dark:introTxtContainer">
							<span className="font-bold">
								Full stack ReactJs/NodeJs creative web developer from Paris.
							</span>
							<br />
							<br />
							Passionate and experienced web developer with more than 8 years of
							experience in the development of websites and web applications, I
							specialized in ReactJs/NodeJs and NextJs. During my career, I have
							worked with many clients in agencie or as a freelancer, and have
							acquired solid technical skills that allow me today to assess the
							feasibility of a project and to provide you with the best possible
							support on your web projects.
							<br />
							<br />
							Being a graduate of a License as a Multimedia Graphic Designer
							since 2012, I have both artistic and technical sensitivity. I can
							manage the design of a full-fledged graphical interface (UI/UX).
							<br />
							<br />
							As a full stack web developer, I have a preference for the
							Front-end and in particular for the Html, Css, Javascript
							languages as well as ReactJs that I can combine with my artistic
							skills for everything related to animation, interaction and
							experience on the website.
							<br />
							<br />
							I like to create innovative, responsive, minimalist and modern
							websites. Intuitive web applications, but also a clean code,
							documented and respecting web standards. I am also attached to
							SEO, page speed and accessibility.
							<br />
							<br />
							Do not hesitate to contact me, I will be delighted to discuss with
							you.
						</h3>
						<div className="bg-slate-200 h-[500px] sm:w-[48%]  md:h-[750px] rounded-md introImgContainer z-20">
							<Image
								src={manuImg}
								className="h-full w-full object-cover rounded-md"
								alt="Picture of the author "
							/>
						</div>
						{/* <div className="bg-slate-200 h-[500px] sm:w-[48%]  md:h-[750px] rounded-md  hidden dark:block introImgContainer introImgContainer--Dark">
							<Image
								src={manuImg}
								className="h-full w-full object-cover rounded-md"
								alt="Picture of the author "
							/>
						</div> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default Intro
