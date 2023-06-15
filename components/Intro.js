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
						<div
							className=" sm:w-[40%]  font-Inter text-sm sm:text-lg  font-medium text-[#213B86]  dark:text-[#DCDAD9]"
							id="introTxtContainer"
						>
							Full stack ReactJs/NodeJs developer from Paris/France, I have been
							passionate about IT and Design since a very young age.
							<br />
							<br /> I have a preference for the front-end and in particular for
							the Html, Css, Javascript languages as well as ReactJS that I can
							combine with my skills in Graphic / Webdesign. <br />
							<br /> I like to create innovative, minimalist and modern
							websites, intuitive web applications, but also clean and
							documented code! <br />
							<br />
							Do not hesitate to contact me.
						</div>
						<div className="bg-slate-200 h-[500px] sm:w-[48%]  md:h-[750px] rounded-md introImgContainer dark:hidden">
							<Image
								src={manuImg}
								className="h-full w-full object-cover rounded-md"
								alt="Picture of the author "
							/>
						</div>
						<div className="bg-slate-200 h-[500px] sm:w-[48%]  md:h-[750px] rounded-md  hidden dark:block introImgContainer introImgContainer--Dark">
							<Image
								src={manuImg}
								className="h-full w-full object-cover rounded-md"
								alt="Picture of the author "
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Intro
