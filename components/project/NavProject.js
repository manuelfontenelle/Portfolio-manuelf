// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const NavProject = () => {
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<div className="container">
					<div className="flex justify-between h-[350px] text-center border-t-[1px] border-[#DCDAD9] dark:border-[#222222] text-xl uppercase font-regular mt-10 text-[#DCDAD9]  dark:text-[#222222] flex-col sm:flex-row">
						<div className="flex items-center justify-center sm:flex-1  border-r-[1px] border-[#DCDAD9] dark:border-[#222222] ">
							<div className="flex flex-col items-start">
								<span className="font-SofiaSans text-9xl leading-none text-transparent textBorder tracking-[-0.03em] prevBtn dark:hidden">
									Prev
								</span>
								<span className="font-SofiaSans text-9xl leading-none text-transparent textBorder tracking-[-0.03em] prevBtn--Dark hidden dark:block">
									Prev
								</span>
								<span className="font-Inter font-black text-3xl mt-[-20px] ml-1">
									Project
								</span>
							</div>
						</div>
						<div className="flex items-center justify-center text-center sm:flex-1 ">
							<div className="flex flex-col  items-start">
								<span className="font-SofiaSans text-9xl leading-none tracking-[-0.03em]">
									Next
								</span>

								<span className="font-Inter font-black text-3xl mt-[-20px] ml-1">
									Project
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavProject
