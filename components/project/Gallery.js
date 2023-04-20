// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const Gallery = () => {
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<div className="container">
					<div className="flex flex-col md:flex-row justify-between  gap-10">
						<div className=" rounded-md h-[675px] md:h-[995px] w-full md:flex-1 bg-[#27e193]"></div>
						<div className=" rounded-md h-[675px] md:h-[995px] w-full md:flex-1 bg-[#27e193]"></div>
					</div>
					<div className=" rounded-md w-full h-[675px] bg-[#27e193] mt-10"></div>
				</div>
			</div>
		</>
	)
}

export default Gallery
