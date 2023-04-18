import React from "react"

const Competence = () => {
	return (
		<div className="w-[100%] xl:w-[48%] h-[450px] bg-[#101D43] dark:bg-[#A8A3A0] rounded-md p-8 flex flex-col gap-16 relative ">
			<div className=" bg-[#DCDAD9] dark:bg-[#222222] w-20 h-20 rounded-md"></div>
			<div className="absolute bottom-8">
				<span className="font-SofiaSans uppercase text-3xl">front-end</span>
				<span className=" block text-base leading-5 font-medium mt-5 pr-8 text-[#DCDAD9] dark:text-[#222222]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incidid enim ad minim veniam, quis nostrud
					exercitationlamco. <br />
					<br />
					ectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore.
				</span>
			</div>
		</div>
	)
}

export default Competence
