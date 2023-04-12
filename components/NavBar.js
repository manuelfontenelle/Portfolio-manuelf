// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

function darkModeListener() {
	document.documentElement.classList.toggle("dark")
}

const NavBar = () => {
	useEffect(() => {}, [])

	return (
		<nav className=" border-b-[1px] border-[#DCDAD9]  pb-4">
			<div className="flex items-center justify-between dark:text-[#DCDAD9] text-[#213B86]">
				<span className=" font-bold text-xs uppercase font-Inter ">
					Manuel Fontenelle
				</span>
				<div className="rightPart flex items-center gap-5">
					<div id="toggle-darkmode-container" className="w-14 h-8">
						<input
							type="checkbox"
							id="dark-mode-toggle"
							className="hidden"
							onChange={darkModeListener}
						/>
						<label
							htmlFor="dark-mode-toggle"
							className="w-full h-full bg-gray-800 dark:bg-white rounded-full p-1 flex justify-between cursor-pointer"
						>
							<span className="inline dark:hidden">🌞</span>
							<span className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 block float-right dark:float-left"></span>
							<span className="hidden dark:inline">🌛</span>
						</label>
					</div>

					<a href="#" className="uppercase font-extrabold text-sm">
						Menu
					</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
