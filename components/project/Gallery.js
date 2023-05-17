// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const Gallery = ({
	img2,
	img3,
	img4,

	paddingBlock1,
	paddingBlock2,
	paddingBlock3,
	object1,
	object2,
	object3,
	descAlt,
}) => {
	useEffect(() => {}, [])

	return (
		<>
			<div>
				<div className="container">
					<div className="flex flex-col lg:flex-row justify-between  gap-10">
						<div
							className={`rounded-md md:h-[995px] w-full md:flex-1 2xl:bg-[#101D43] 2xl:dark:bg-[#3E3E3E] ${paddingBlock1}`}
						>
							<Image
								src={img2}
								className={`h-full w-full rounded-md ${object1}`}
								alt={descAlt}
							/>
						</div>
						<div
							className={`rounded-md h-[675px] md:h-[995px] w-full md:flex-1 2xl:bg-[#101D43] 2xl:dark:bg-[#3E3E3E] ${paddingBlock2}`}
						>
							<Image
								src={img3}
								className={`h-full w-full rounded-md ${object2}`}
								alt={descAlt}
							/>
						</div>
					</div>
					<div
						className={`rounded-md w-full lg:h-[775px] 2xl:bg-[#101D43] 2xl:dark:bg-[#3E3E3E] mt-10 ${paddingBlock3}`}
					>
						<Image
							src={img4}
							className={`h-full w-full rounded-md ${object3}`}
							alt={descAlt}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Gallery
