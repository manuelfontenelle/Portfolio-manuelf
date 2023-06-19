import React, { useEffect } from "react"

const Competence = ({ title, svg, desc1, desc2 }) => {
	return (
		<div className=" xl:h-[535px] 2xl:h-[485px] bg-[#101D43] dark:bg-[#A8A3A0] rounded-md p-6 flex flex-col gap-8 relative">
			<div className=" bg-[#DCDAD9] dark:bg-[#222222] w-16 rounded-md flex justify-center items-center">
				{svg}
			</div>
			<div className="">
				<h4 className="font-SofiaSans uppercase text-3xl">{title}</h4>
				<span className=" block  text-sm sm:text-base  font-medium mt-2  text-[#DCDAD9] dark:text-[#222222]">
					{desc1} <br />
					<br />
					{desc2}
				</span>
			</div>
		</div>
	)
}

export default Competence
