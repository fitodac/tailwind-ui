import { useState } from 'react'

export default function Header(){

	const [mode, setMode] = useState('')

	const toggleDarkMode = () => {
		if( !mode.length ){
			setMode('dark')
			document.body.classList.add('dark')
		}else{
			setMode('')
			document.body.classList.remove('dark')
		}
	}


	return (
		<header 
			className="bg-white border-b border-slate-200 px-6 py-3
		dark:bg-gray-800 dark:border-gray-700">

			<div className="flex justify-end">

				<div className="">
					<label 
						className="bg-white border border-slate-200 inline-flex rounded-full cursor-pointer 
						dark:bg-slate-800 dark:border-slate-700">
						<input 
							type="checkbox" 
							onChange={ toggleDarkMode } 
							checked={!mode.length}
							className="absolute hidden" />
						<span className="w-7 h-7 grid place-content-center">
							<i className="ri-sun-fill text-lg text-yellow-500 dark:hidden"></i>
							<i className="ri-moon-fill text-lg text-slate-400 hidden dark:block"></i>
						</span>
					</label>
				</div>

			</div>
		</header>
	)
}