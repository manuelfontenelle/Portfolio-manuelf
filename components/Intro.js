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
								Full-stack ReactJs / NodeJs web developer from Paris.
							</span>
							<br />
							<br />
							After a prepa in applied art, I turned to graphic design and web
							design. I knew right away that I had found my voice. I liked
							computers and I could put my creativity into images.
							<br />
							<br />
							Thereafter, I quickly started to get interested in the code that
							served to animate my web designs. It became an even more
							all-consuming passion. So I joined training as a web developer.
							<br />
							<br />
							After obtaining my diploma in 2016, I focused on web development
							at 100%. My creative spirit remains an advantage that I use every
							day.
							<br />
							<br />
							I have a preference for the front-end part and in particular for
							the Html, Css, Javascript languages as well as ReactJs.
							<br />
							<br />
							I like to create innovative, minimalist, optimised and modern
							websites or web applications. Clean and well-documented code is
							also very important to me.
							<br />
							<br />
							Do not hesitate to contact me.
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
