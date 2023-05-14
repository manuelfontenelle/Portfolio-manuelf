import React from "react"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

const Formulaire = () => {
	const [prenom, setPrenom] = useState("")
	const [nom, setNom] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()

		const data = {
			prenom: prenom,
			nom: nom,
			phone: phone,
			email: email,
			message: message,
		}

		const form = document.querySelector("#contact-form1")
		const submitButton = document.querySelector("#submit-btn1")
		const loader = document.querySelector("#loader")

		// Fonction pour vider les champs du formulaire :
		const cleanForm = () => {
			form.reset()
		}

		// Fonction pour réactiver le bouton d'envoi du formulaire :
		const isEnabled = () => {
			submitButton.removeAttribute("disabled")
			submitButton.classList.remove("disabled-btn")
			loader.classList.add("hidden")
			loader.classList.remove("block")
		}

		// Fonction pour désactiver le bouton d'envoi du formulaire :
		const isDisabled = () => {
			submitButton.setAttribute("disabled", "disabled")
			submitButton.classList.add("disabled-btn")
			loader.classList.remove("hidden")
			loader.classList.add("block")
		}

		isDisabled()

		try {
			// const response = await axios.post("http://localhost:5000/form", data)

			const response = await axios.post(
				"https://nodemailer-perso.herokuapp.com/form",
				data
			)

			if (response.status === 200) {
				alert("Votre formulaire a bien été envoyé")
				cleanForm()
				isEnabled()
			}
		} catch (e) {
			if (e.response.data.error === "Missing parameters") {
				alert("Veuillez remplir tous les champs du formulaire")
			} else {
				alert("Une erreur est survenue")
				cleanForm()
			}

			isEnabled()
		}
	}

	return (
		<div className="relative mt-5">
			<div className="block font-Inter ">
				<form id="contact-form1" onSubmit={(e) => handleSubmit(e)}>
					<div className="grid grid-cols-2 gap-6">
						<div className="form-group mb-10">
							<input
								type="text"
								className="form-control block w-full  py-3 text-base font-normal outline-none
          text-[#DCDAD9] dark:text-[#222222] bg-transparent border-b-[1px] border-[#BAC8EE] dark:border-gray-400
										placeholder-[#BAC8EE] dark:placeholder-gray-400
          transition-all
          ease-in-out
          m-0
           focus:px-2 
										focus:text-[#DCDAD9] dark:focus:dark:text-[#222222] focus:border-[#1CCBAD] focus:dark:border-[#222222] focus:shadow-none"
								id="exampleInput123"
								aria-describedby="emailHelp123"
								placeholder="Prénom"
								onChange={(e) => setPrenom(e.target.value)}
							/>
						</div>
						<div className="form-group mb-10">
							<input
								type="text"
								className="form-control block w-full py-3 text-base font-normal outline-none
								text-[#DCDAD9] dark:text-[#222222] bg-transparent border-b-[1px] border-[#BAC8EE] dark:border-gray-400
								placeholder-[#BAC8EE] dark:placeholder-gray-400
								transition-all
								ease-in-out
								m-0
								focus:px-2 
								focus:text-[#DCDAD9] dark:focus:dark:text-[#222222] focus:border-[#1CCBAD] focus:dark:border-[#222222] focus:shadow-none"
								id="exampleInput124"
								aria-describedby="emailHelp124"
								placeholder="Nom"
								onChange={(e) => setNom(e.target.value)}
							/>
						</div>
					</div>

					<div className="form-group mb-10">
						<input
							type="tel"
							className="form-control block w-full  py-3 text-base font-normal outline-none
          text-[#DCDAD9] dark:text-[#222222] bg-transparent border-b-[1px] border-[#BAC8EE] dark:border-gray-400
										placeholder-[#BAC8EE] dark:placeholder-gray-400
          transition-all
          ease-in-out
          m-0
          focus:px-2 
										focus:text-[#DCDAD9] dark:focus:dark:text-[#222222] focus:border-[#1CCBAD] focus:dark:border-[#222222] focus:shadow-none"
							id="exampleTel0"
							placeholder="Téléphone"
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>

					<div className="form-group mb-10">
						<input
							type="email"
							className="form-control block w-full  py-3 text-base font-normal outline-none
          text-[#DCDAD9] dark:text-[#222222] bg-transparent border-b-[1px] border-[#BAC8EE] dark:border-gray-400
										placeholder-[#BAC8EE] dark:placeholder-gray-400
          transition-all
          ease-in-out
          m-0
										focus:px-2 
										focus:text-[#DCDAD9] dark:focus:dark:text-[#222222] focus:border-[#1CCBAD] focus:dark:border-[#222222] focus:shadow-none"
							id="exampleInput8"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="form-group mb-6">
						<textarea
							className="form-control block w-full py-3 text-base font-normal outline-none
					text-[#DCDAD9] dark:text-[#222222] bg-transparent border-b-[1px] border-[#BAC8EE] dark:border-gray-400
					placeholder-[#BAC8EE] dark:placeholder-gray-400
					transition-all
					ease-in-out
					m-0 h-[200px]
					focus:px-2 
					focus:text-[#DCDAD9] dark:focus:dark:text-[#222222] focus:border-[#1CCBAD] focus:dark:border-[#222222] focus:shadow-none"
							id="exampleFormControlTextarea13"
							rows="3"
							placeholder="Message"
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>

					<button
						id="submit-btn1"
						type="submit"
						className="linkForm text-left flex justify-start items-start
     w-full
     
    
     mt-5
 
     text-[#BAC8EE] dark:text-gray-400 font-black
     text-xl
     leading-tight
     uppercase
     rounded
  


     hover:text-[#27e193] hover:dark:text-[#222222] 
     focus:text-[#27e193] focus:dark:text-[#222222] 
     active:text-[#1CCBAD] 
  btn-form"
					>
						Submit
						<span className="">
							<svg
								width="26"
								height="25"
								viewBox="0 0 26 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="svg-arrow ml-2  arrow-color dark:hidden"
							>
								<path
									d="M1.2186 21.5858C0.43755 22.3668 0.43755 23.6332 1.2186 24.4142C1.99965 25.1953 3.26598 25.1953 4.04703 24.4142L1.2186 21.5858ZM25.6328 2C25.6328 0.895431 24.7374 1.12907e-07 23.6328 9.55844e-07L5.63281 1.20872e-06C4.52824 5.34375e-07 3.63281 0.895432 3.63281 2C3.63281 3.10457 4.52824 4 5.63281 4L21.6328 4L21.6328 20C21.6328 21.1046 22.5282 22 23.6328 22C24.7374 22 25.6328 21.1046 25.6328 20L25.6328 2ZM4.04703 24.4142L25.047 3.41421L22.2186 0.585787L1.2186 21.5858L4.04703 24.4142Z"
									fill=""
								/>
							</svg>
							<svg
								width="26"
								height="25"
								viewBox="0 0 26 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="svg-arrow ml-2 arrow-color-dark hidden dark:block"
							>
								<path
									d="M1.2186 21.5858C0.43755 22.3668 0.43755 23.6332 1.2186 24.4142C1.99965 25.1953 3.26598 25.1953 4.04703 24.4142L1.2186 21.5858ZM25.6328 2C25.6328 0.895431 24.7374 1.12907e-07 23.6328 9.55844e-07L5.63281 1.20872e-06C4.52824 5.34375e-07 3.63281 0.895432 3.63281 2C3.63281 3.10457 4.52824 4 5.63281 4L21.6328 4L21.6328 20C21.6328 21.1046 22.5282 22 23.6328 22C24.7374 22 25.6328 21.1046 25.6328 20L25.6328 2ZM4.04703 24.4142L25.047 3.41421L22.2186 0.585787L1.2186 21.5858L4.04703 24.4142Z"
									fill=""
								/>
							</svg>
						</span>
					</button>
					<div className="hidden absolute right-0 bottom-[-25px]" id="loader">
						<div className="mx-auto flex justify-center dark:hidden">
							<ThreeDots
								id="loaderId"
								height="80"
								width="80"
								radius="9"
								color="#1CCBAD"
								ariaLabel="three-dots-loading"
								wrapperStyle={{}}
								wrapperClassName=""
								visible={true}
							/>
						</div>
						<div className="mx-auto justify-center hidden dark:flex">
							<ThreeDots
								id="loaderId"
								height="80"
								width="80"
								radius="9"
								color="#222222"
								ariaLabel="three-dots-loading"
								wrapperStyle={{}}
								wrapperClassName=""
								visible={true}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Formulaire
