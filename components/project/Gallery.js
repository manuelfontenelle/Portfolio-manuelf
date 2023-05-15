// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const Gallery = ({ img2, img3, img4 }) => {
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<div className="container">
					<div className="flex flex-col md:flex-row justify-between  gap-10">
						<div className=" rounded-md  md:h-[995px] w-full md:flex-1 bg-[#101D43] dark:bg-[#3E3E3E]  lg:py-10">
							<Image
								src={img2}
								className="h-full w-full object-contain rounded-md"
								alt="Picture of the author"
							/>
						</div>
						<div className=" rounded-md h-[675px] md:h-[995px] w-full md:flex-1 bg-[#101D43] dark:bg-[#3E3E3E]">
							<Image
								src={img3}
								className="h-full w-full object-cover rounded-md"
								alt="Picture of the author"
							/>
						</div>
					</div>
					<div className=" rounded-md w-full lg:h-[775px] bg-[#101D43] dark:bg-[#3E3E3E] mt-10  lg:py-10">
						<Image
							src={img4}
							className="h-full w-full object-contain rounded-md"
							alt="Picture of the author"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Gallery
