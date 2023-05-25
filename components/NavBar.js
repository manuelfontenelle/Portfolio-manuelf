// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

function darkModeListener() {
	document.documentElement.classList.toggle("dark")
}

const NavBar = () => {
	useEffect(() => {
		const body = document.body
		const header = document.querySelector("header")

		const main = document.querySelector("main")
		const headerHeight = document.querySelector("header").offsetHeight
		main.style.top = headerHeight + "px"
		let lastScroll = 0
		window.addEventListener("scroll", () => {
			// console.log("scroll")
			let currentScroll = window.pageYOffset
			if (currentScroll - lastScroll > 0) {
				header.classList.add("scroll-down")
				header.classList.remove("scroll-up")
			} else if (currentScroll === 0) {
				// console.log("test")
				header.classList.remove("scroll-up")
				header.classList.remove("scroll-down")
			} else {
				// scrolled up -- header show
				header.classList.add("scroll-up")
				header.classList.remove("scroll-down")
			}
			lastScroll = currentScroll
		})
	}, [])

	return (
		<nav className="border-b-[1px] border-[#213B86]  dark:border-[#DCDAD9] pb-4 borderNone">
			<div className="flex items-center justify-between dark:text-[#DCDAD9] text-[#213B86]">
				<Link href="/">
					<h1 className="  font-bold  text-sm uppercase font-Inter  leading-4">
						Manuel Fontenelle
					</h1>
				</Link>
				<div className="rightPart flex items-center gap-5 z">
					<div id="toggle-darkmode-container" className="w-11 h-5 ">
						<input
							type="checkbox"
							id="dark-mode-toggle"
							className="hidden"
							onChange={darkModeListener}
						/>
						<label
							htmlFor="dark-mode-toggle"
							className="w-full h-full border-[1px] border-[#213B86] dark:border-[#DCDAD9] bg-[#27e193] dark:bg-[#222222] rounded-full p-1 flex justify-between cursor-pointer"
						>
							<span className="inline dark:hidden">
								<svg
									width="11"
									height="11"
									viewBox="0 0 13 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-[#213B86] ml-[0.10rem]"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M4.53023 0.00634459C4.68154 -0.0233252 4.82297 0.0539148 4.89197 0.178522C4.95858 0.299215 4.95251 0.451176 4.87307 0.565827C4.07819 1.73717 3.60956 3.1809 3.60956 4.75259C3.60956 8.66868 6.52014 11.8132 10.083 11.8132C10.9426 11.8132 11.7642 11.6267 12.5157 11.2946C12.6693 11.2229 12.8419 11.2788 12.9337 11.4091C13.022 11.5346 13.022 11.7051 12.9342 11.8307C11.6333 13.7467 9.53134 15 7.16048 15C3.19109 15 0 11.4995 0 7.22546C0 3.98053 1.83746 1.19165 4.45833 0.0308891C4.47952 0.0207905 4.50071 0.0135052 4.52129 0.00834225L4.53023 0.00634459Z"
										fill=""
									/>
								</svg>
							</span>
							<span className="w-3 h-3 mt-[-1px] rounded-full bg-[#213B86] dark:bg-[#DCDAD9] block float-right dark:float-left"></span>
							<span className="hidden dark:inline">
								<svg
									width="11"
									height="11"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-[#DCDAD9] mr-[0.10rem]"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.0343 14.4657V12.8037C8.0343 12.5087 7.79495 12.2694 7.50003 12.2694C7.20511 12.2694 6.96576 12.5087 6.96576 12.8037V14.4657C6.96576 14.7607 7.20511 15 7.50003 15C7.79495 15 8.0343 14.7607 8.0343 14.4657ZM10.8729 11.6283L12.0478 12.803C12.2567 13.012 12.5948 13.012 12.8038 12.803C13.0121 12.5947 13.0121 12.256 12.8038 12.0477L11.6284 10.8723C11.42 10.6638 11.0813 10.6638 10.8729 10.8723C10.664 11.0811 10.664 11.4193 10.8729 11.6283ZM2.95223 12.803L4.12762 11.6283C4.33608 11.4193 4.33608 11.0811 4.12762 10.8723C3.91928 10.6638 3.58059 10.6638 3.37226 10.8723L2.19686 12.0477C1.98852 12.256 1.98852 12.5947 2.19686 12.803C2.4052 13.012 2.74389 13.012 2.95223 12.803ZM7.4862 3.78029C5.40575 3.78029 3.71639 5.46968 3.71639 7.55071C3.71639 9.63116 5.40578 11.3205 7.4862 11.3205C9.56711 11.3205 11.2566 9.63113 11.2566 7.55071C11.2566 5.4698 9.56723 3.78029 7.4862 3.78029ZM12.8039 8.0343H14.4659C14.7609 8.0343 15.0002 7.79495 15.0002 7.50003C15.0002 7.20511 14.7609 6.96576 14.4659 6.96576H12.8039C12.5089 6.96576 12.2696 7.20511 12.2696 7.50003C12.2696 7.79495 12.5089 8.0343 12.8039 8.0343ZM0.534271 8.0343H2.19634C2.49126 8.0343 2.73061 7.79495 2.73061 7.50003C2.73061 7.20511 2.49126 6.96576 2.19634 6.96576H0.534271C0.239347 6.96576 0 7.20511 0 7.50003C0 7.79495 0.239347 8.0343 0.534271 8.0343ZM2.19695 2.95232L3.37235 4.12771C3.58069 4.33606 3.91938 4.33606 4.12771 4.12771C4.33617 3.91877 4.33617 3.58056 4.12771 3.37174L2.95232 2.19683C2.74398 1.98801 2.40529 1.98801 2.19695 2.19683C1.98861 2.40517 1.98861 2.74398 2.19695 2.95232ZM11.6285 4.12771L12.8039 2.95232C13.0122 2.74398 13.0122 2.40516 12.8039 2.19683C12.595 1.98801 12.2569 1.98801 12.0479 2.19683L10.873 3.37174C10.6642 3.58055 10.6642 3.91877 10.873 4.12771C11.0815 4.33606 11.4202 4.33606 11.6285 4.12771ZM8.03455 2.19634V0.534271C8.03455 0.239347 7.7952 0 7.50027 0C7.20535 0 6.966 0.239347 6.966 0.534271V2.19634C6.966 2.49126 7.20535 2.73061 7.50027 2.73061C7.7952 2.73061 8.03455 2.49126 8.03455 2.19634Z"
										fill=""
									/>
								</svg>
							</span>
						</label>
					</div>

					<a href="#" className="uppercase font-extrabold  text-base">
						Menu
					</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
