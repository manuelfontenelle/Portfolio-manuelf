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
				<h2 className="mt-3 font-SofiaSans text-[14.9vw] text-[#213B86] dark:text-[#DCDAD9] uppercase ml-[-5%] leading-none whitespace-nowrap tracking-[-0.03em]">
					Web developer
				</h2>
				<div className="container">
					<div className="flex justify-between mt-[3vh] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" sm:w-[48%]  font-Inter text-sm sm:text-base  font-medium text-[#213B86]  dark:text-[#DCDAD9]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco.
						</div>
						<div className="bg-slate-200 h-[500px] sm:w-[48%]  md:h-[750px]">
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