// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const Intro = () => {
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<h1 className="mt-3 font-SofiaSans text-[14.9vw] text-[#213B86] dark:text-[#DCDAD9] uppercase ml-[-5%] leading-none whitespace-nowrap tracking-[-0.03em]">
					Web developer
				</h1>
				<div className="container">
					<div className="flex justify-between">
						<div className="left w-[48%] pr-9 font-Inter font-medium text-[#213B86]  dark:text-[#DCDAD9]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco.
						</div>
						<div className="right w-[48%] bg-slate-200 h-[400px]"></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Intro
