// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

function darkModeListener() {
	document.documentElement.classList.toggle("dark")
}

const Footer = () => {
	useEffect(() => {}, [])

	return (
		<nav className="border-t-[1px] border-[#DCDAD9]  dark:border-[#222222] pt-4">
			<div className="flex flex-col sm:flex-row items-center justify-between dark:text-[#222222] text-[#DCDAD9]">
				<div className=" flex flex-col sm:flex-row items-center gap-3 sm:gap-5 font-bold  text-sm uppercase font-Inter  leading-4">
					<a href="#" className="">
						Linkedin
					</a>
					<a href="#" className="">
						Github
					</a>
					<a href="#" className="">
						Resume
					</a>
					<a href="#" className="sm:ml-20">
						Mentions légales
					</a>
				</div>

				<div className=" mt-3 sm:mt-0 font-bold  text-sm font-Inter ">
					©2023 Manuel Fontenelle
				</div>
			</div>
		</nav>
	)
}

export default Footer
