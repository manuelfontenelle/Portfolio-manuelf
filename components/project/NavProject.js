// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const NavProject = ({ prevUrl, nextUrl }) => {
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<div className="container">
					<div className="flex justify-between h-[135px] md:h-[350px] text-center border-t-[1px] border-[#DCDAD9] dark:border-[#DCDAD9] text-xl uppercase font-regular mt-10 text-[#DCDAD9]  dark:text-[#222222] flex-row">
						<div className="flex items-center justify-center w-[50%]  border-r-[1px] border-[#DCDAD9] dark:border-[#DCDAD9] ">
							<Link
								href={prevUrl}
								className="flex flex-col items-start text-white hover:text-[#27e193] hover:textBorder prevBtnContainer"
							>
								<span className="font-SofiaSans  md:text-9xl leading-none text-transparent textBorder tracking-[-0.03em] prevBtn dark:hidden">
									Prev
								</span>
								<span className="font-SofiaSans  md:text-9xl leading-none text-transparent textBorder tracking-[-0.03em] prevBtn--Dark hidden dark:block">
									Prev
								</span>
								<span className="font-Inter font-black text-xs md:text-3xl mt-[-5px] md:mt-[-20px] ml-1">
									Project
								</span>
							</Link>
						</div>
						<div className="flex items-center justify-center text-center w-[50%]">
							<Link
								href={nextUrl}
								className="flex flex-col  items-start text-white hover:text-[#27e193] "
							>
								<span className="font-SofiaSans text-4xl md:text-9xl leading-none tracking-[-0.03em]">
									Next
								</span>

								<span className="font-Inter font-black text-xs md:text-3xl mt-[-5px] md:mt-[-20px] ml-1">
									Project
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavProject
