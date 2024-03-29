// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const Intro = ({
	img1,
	descAlt,
	objectPosition,
	titreIntro,
	textIntro,
	urlIntro,
	urlDetailIntro,
}) => {
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<div className="container">
					<h2 className="mt-10 font-Inter font-black text-3xl lg:text-7xl text-[#213B86] dark:text-[#222222] uppercase  leading-none  break-words">
						{titreIntro}
					</h2>
					<div className="flex justify-between mt-8 flex-col  gap-10 sm:gap-0">
						<div className=" uppercase font-Inter text-sm  font-bold text-[#213B86]  dark:text-[#222222]">
							<span className="block lg:w-[55%] xl:w-[40%]">{textIntro}</span>
							<a
								href={urlDetailIntro}
								target="_blank"
								className="linkProject flex items-center mt-5 text-[#213B86] dark:text-[#222222] font-bold text-md lg:text-xl leading-1 break-all underline lg:no-underline
				
     hover:text-[#101D43] hover:dark:text-gray-400
     focus:text-[#101D43] focus:dark:text-gray-400
     active:text-[#101D43]"
							>
								{urlIntro}
								<span className="hidden lg:block">
									<svg
										viewBox="0 0 26 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="svg-arrow smallArrow ml-2  arrow-color dark:hidden"
									>
										<path
											d="M1.2186 21.5858C0.43755 22.3668 0.43755 23.6332 1.2186 24.4142C1.99965 25.1953 3.26598 25.1953 4.04703 24.4142L1.2186 21.5858ZM25.6328 2C25.6328 0.895431 24.7374 1.12907e-07 23.6328 9.55844e-07L5.63281 1.20872e-06C4.52824 5.34375e-07 3.63281 0.895432 3.63281 2C3.63281 3.10457 4.52824 4 5.63281 4L21.6328 4L21.6328 20C21.6328 21.1046 22.5282 22 23.6328 22C24.7374 22 25.6328 21.1046 25.6328 20L25.6328 2ZM4.04703 24.4142L25.047 3.41421L22.2186 0.585787L1.2186 21.5858L4.04703 24.4142Z"
											fill=""
										/>
									</svg>
									<svg
										width="23"
										height="26"
										viewBox="0 0 26 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="svg-arrow smallArrow ml-2  arrow-color-dark hidden dark:block"
									>
										<path
											d="M1.2186 21.5858C0.43755 22.3668 0.43755 23.6332 1.2186 24.4142C1.99965 25.1953 3.26598 25.1953 4.04703 24.4142L1.2186 21.5858ZM25.6328 2C25.6328 0.895431 24.7374 1.12907e-07 23.6328 9.55844e-07L5.63281 1.20872e-06C4.52824 5.34375e-07 3.63281 0.895432 3.63281 2C3.63281 3.10457 4.52824 4 5.63281 4L21.6328 4L21.6328 20C21.6328 21.1046 22.5282 22 23.6328 22C24.7374 22 25.6328 21.1046 25.6328 20L25.6328 2ZM4.04703 24.4142L25.047 3.41421L22.2186 0.585787L1.2186 21.5858L4.04703 24.4142Z"
											fill=""
										/>
									</svg>
								</span>
							</a>
						</div>
					</div>
					<div className="xl:h-[735px] w-full mt-8">
						<Image
							src={img1}
							className={`h-full w-full object-contain xl:object-cover rounded-md ${objectPosition}`}
							alt={descAlt}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Intro
