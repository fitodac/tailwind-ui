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
			className="bg-white border-b border-slate-200 px-6 py-3 2xl:px-0
		dark:bg-gray-800 dark:border-gray-700">

			<div className="flex justify-end">

				<div className="bg-white border border-slate-200 p-3 rounded-full dark:bg-gray-800 dark:border-gray-700">
					<label className="toggler-dark-mode">
						<input type="checkbox" onChange={ toggleDarkMode } checked={!mode.length} />
						<span></span>
					</label>
				</div>

			</div>
		</header>
	)
}