import React from "react"

const Competence = () => {
	return (
		<div className="w-[100%] xl:w-[48%] h-[350px] bg-[#101D43] dark:bg-[#A8A3A0] rounded-md p-6 flex flex-col gap-16 relative ">
			<div className=" bg-[#DCDAD9] dark:bg-[#222222] w-16 h-16 rounded-md"></div>
			<div className="absolute bottom-6">
				<span className="font-SofiaSans uppercase text-xl">front-end</span>
				<span className=" block text-xs mt-2 pr-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incidid enim ad minim veniam, quis nostrud
					exercitationlamco. ectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore. <br />
					<br />
					ectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore.
				</span>
			</div>
		</div>
	)
}

export default Competence
