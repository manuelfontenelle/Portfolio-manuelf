// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const About = () => {
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<div className="container">
					<div className="flex justify-between border-b-[1px] border-[#DCDAD9] dark:border-[#DCDAD9] pb-4  mt-10 text-[#DCDAD9]  dark:text-[#DCDAD9] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" lg:w-[40%] font-Inter text-lg lg:text-2xl uppercase font-semibold">
							Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
							incididunt
						</div>
					</div>
					<div className="flex justify-between border-b-[1px] border-[#DCDAD9] dark:border-[#DCDAD9] pb-14 pt-4  text-[#DCDAD9]  dark:text-[#DCDAD9] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" sm:ml-[50%] w-full flex justify-between font-Inter font-medium text-sm sm:text-base ">
							<div className="w-[50%] text-left uppercase text-[#A8A3A0]">
								<span>Client</span>
							</div>
							<div className="w-[50%] text-left">
								<span>Domaine Aventurier</span>
							</div>
						</div>
					</div>
					<div className="flex justify-between border-b-[1px] border-[#DCDAD9] dark:border-[#DCDAD9] pb-14 pt-4  text-[#DCDAD9]  dark:text-[#DCDAD9] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" sm:ml-[50%] w-full flex justify-between font-Inter font-medium text-sm sm:text-base ">
							<div className="w-[50%] text-left uppercase text-[#A8A3A0]">
								<span>Role</span>
							</div>
							<div className="w-[50%] text-left">
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eia aliqua.
								</span>
							</div>
						</div>
					</div>
					<div className="flex justify-between border-b-[1px] border-[#DCDAD9] dark:border-[#222222] pb-14 pt-4  text-[#DCDAD9]  dark:text-[#DCDAD9] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" sm:ml-[50%] w-full flex justify-between font-Inter font-medium text-sm sm:text-base ">
							<div className="w-[50%] text-left uppercase text-[#A8A3A0]">
								<span>Year</span>
							</div>
							<div className="w-[50%] text-left">
								<span>2023</span>
							</div>
						</div>
					</div>
					<div className="flex justify-between border-b-[1px] border-[#DCDAD9] dark:border-[#222222] pb-14 pt-4  text-[#DCDAD9]  dark:text-[#DCDAD9] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" sm:ml-[50%] w-full flex justify-between font-Inter font-medium text-sm sm:text-base ">
							<div className="w-[50%] text-left uppercase text-[#A8A3A0]">
								<span>Country</span>
							</div>
							<div className="w-[50%] text-left">
								<span>Canada</span>
							</div>
						</div>
					</div>
					<div className="flex pb-8 sm:pb-14 pt-4  text-[#DCDAD9]  dark:text-[#DCDAD9] flex-col sm:flex-row gap-10 sm:gap-0">
						<div className=" sm:ml-[50%] w-full flex justify-between font-Inter font-medium text-sm sm:text-base ">
							<div className="text-left">
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
