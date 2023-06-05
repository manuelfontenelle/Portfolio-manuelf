// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const Footer = () => {
	useEffect(() => {}, [])

	const getYear = () => {
		return new Date().getFullYear()
	}

	return (
		<nav className="border-t-[1px] border-[#DCDAD9]   pt-9 md:pt-4">
			<div className="flex flex-col sm:flex-row items-left justify-start md:items-center md:justify-between  text-[#DCDAD9]">
				<div className=" flex flex-col sm:flex-row items-left gap-3 sm:gap-5 font-medium  text-xs md:text-sm uppercase font-Inter leading-4">
					<a
						target="_blank"
						href="https://www.linkedin.com/in/manuel-fontenelle-b406b563/"
						className="hover:text-[#27e193]"
					>
						Linkedin
					</a>
					<a
						target="_blank"
						href="https://github.com/manuelfontenelle"
						className="hover:text-[#27e193]"
					>
						Github
					</a>
					<a
						target="_blank"
						href="/files/cv-manuelfontenelle-2023.pdf"
						alt="cv manuel fontenelle"
						className="hover:text-[#27e193]"
					>
						Resume
					</a>

					<a href="#" className="sm:ml-20 hover:text-[#27e193]">
						Legal Notice
					</a>
				</div>

				<div className="mt-5 sm:mt-0 font-medium  text-xs md:text-sm font-Inter ">
					©{getYear()} Manuel Fontenelle
				</div>
			</div>
		</nav>
	)
}

export default Footer
