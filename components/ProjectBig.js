// rafce == >  type for create react app snipper
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

const ProjectBig = ({ img, linkUrl }) => {
	const [isHovering, setIsHovered] = useState(false) //false
	const onMouseEnter = () => setIsHovered(true)
	const onMouseLeave = () => setIsHovered(false) //false

	return (
		<>
			<Link
				href={linkUrl}
				className="h-[400px] md:h-[550px] xl:h-[750px] w-[100%] md:w-[60%] rounded-md relative overflow-hidden"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<div
					className={`absolute w-full h-full top-0 left-0 bg-black z-10 transition-all ease-in	${
						isHovering ? "bg-opacity-30" : "bg-opacity-0 "
					}`}
				></div>
				<div
					className={`absolute left-10 flex justify-between gap-4 transition-all ease-in z-20	${
						isHovering ? "bottom-10" : "bottom-10 lg:bottom-[-30%]"
					}`}
				>
					<span className="bg-white rounded-2xl px-5 py-3 text-[#213b86] dark:text-[#222222] font-SofiaSans uppercase text-lg lg:text-2xl flex items-center">
						See more
					</span>
					<span className="bg-white rounded-full">
						<svg
							viewBox="0 0 26 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="svg-arrowProject mx-4 dark:hidden"
						>
							<path
								d="M1.2186 21.5858C0.43755 22.3668 0.43755 23.6332 1.2186 24.4142C1.99965 25.1953 3.26598 25.1953 4.04703 24.4142L1.2186 21.5858ZM25.6328 2C25.6328 0.895431 24.7374 1.12907e-07 23.6328 9.55844e-07L5.63281 1.20872e-06C4.52824 5.34375e-07 3.63281 0.895432 3.63281 2C3.63281 3.10457 4.52824 4 5.63281 4L21.6328 4L21.6328 20C21.6328 21.1046 22.5282 22 23.6328 22C24.7374 22 25.6328 21.1046 25.6328 20L25.6328 2ZM4.04703 24.4142L25.047 3.41421L22.2186 0.585787L1.2186 21.5858L4.04703 24.4142Z"
								fill=""
							/>
						</svg>
						<svg
							viewBox="0 0 26 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="svg-arrowProject svg-arrowProject-dark mx-5 hidden dark:block"
						>
							<path
								d="M1.2186 21.5858C0.43755 22.3668 0.43755 23.6332 1.2186 24.4142C1.99965 25.1953 3.26598 25.1953 4.04703 24.4142L1.2186 21.5858ZM25.6328 2C25.6328 0.895431 24.7374 1.12907e-07 23.6328 9.55844e-07L5.63281 1.20872e-06C4.52824 5.34375e-07 3.63281 0.895432 3.63281 2C3.63281 3.10457 4.52824 4 5.63281 4L21.6328 4L21.6328 20C21.6328 21.1046 22.5282 22 23.6328 22C24.7374 22 25.6328 21.1046 25.6328 20L25.6328 2ZM4.04703 24.4142L25.047 3.41421L22.2186 0.585787L1.2186 21.5858L4.04703 24.4142Z"
								fill=""
							/>
						</svg>
					</span>
				</div>

				<Image
					src={img}
					className={`h-full w-full object-cover rounded-md transition-all ease-in	 ${
						isHovering ? "scale-110 rotate-2" : "scale-100"
					}`}
					alt={img}
				/>
			</Link>
		</>
	)
}

export default ProjectBig
