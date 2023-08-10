// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import manuImg from "../public/manuelfontenelle.jpg"
import { useTranslation } from "next-i18next"
const Intro = () => {
	const { t } = useTranslation("home")
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<h2 className="mt-3 font-SofiaSans text-[14.9vw] text-[#213B86] dark:text-[#DCDAD9] uppercase  leading-none whitespace-nowrap tracking-[-0.03em] flex justify-start">
					<div className="messageDefilant">
						{t("home.messageDefilant")}&nbsp;
					</div>
					<div className="messageDefilant">
						{t("home.messageDefilant")}&nbsp;
					</div>
					<div className="messageDefilant">
						{t("home.messageDefilant")}&nbsp;
					</div>
				</h2>

				<div className="container">
					<div className="flex justify-between mt-[3vh] flex-col sm:flex-row gap-10 sm:gap-0">
						<h3 className=" sm:w-[41%]  font-Inter text-sm sm:text-lg  font-medium text-[#213B86]  dark:text-[#DCDAD9] introTxtContainer dark:introTxtContainer">
							<span className="font-bold">
								{t("home.intro")}
								{/* Full stack ReactJs/NodeJs creative web developer from Paris. */}
							</span>
							<br />
							<br />
							{t("home.intro2")}
							<br />
							<br />
							{t("home.intro3")}
							<br />
							<br />
							{t("home.intro4")}
							<br />
							<br />
							{t("home.intro5")}
							<br />
							<br />
							{t("home.intro6")}
						</h3>
						<div className="bg-slate-200 h-[500px] sm:w-[48%]  md:h-[750px] rounded-md introImgContainer z-20">
							<Image
								src={manuImg}
								className="h-full w-full object-cover object-top rounded-md"
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
