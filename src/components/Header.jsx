import { useState, useEffect } from 'react'
import Link from 'next/link'


const navItemClassName = {
	BASE: 'text-slate-400 hover:text-primary'
}


export default function Header(){

	const [mode, setMode] = useState('')

	const toggleDarkMode = () => {
		if( !mode.length ){
			setMode('dark')
			document.body.classList.add('dark')
			localStorage.setItem('tailwind-ui-mode', 'dark')
		}else{
			setMode('')
			document.body.classList.remove('dark')
			localStorage.removeItem('tailwind-ui-mode')
		}
	}

	useEffect(() => {
		const color_mode = localStorage.getItem('tailwind-ui-mode')

		if( color_mode ) toggleDarkMode(color_mode)
	}, [])


	return (
		<>
			<header 
				className="bg-white border-b border-slate-200 px-6 py-3 inset-x-0 top-0 fixed z-10
			dark:bg-slate-800 dark:border-slate-700">

				<div className="flex justify-between lg:pl-60">
					<div className="text-sm flex gap-x-8 items-center">
						<Link href="/components/application" className={navItemClassName.BASE}>Application</Link>
						<Link href="/components/dashboard" className={navItemClassName.BASE}>Dashboard</Link>
						<Link href="/components/ecommerce" className={navItemClassName.BASE}>E-commerce</Link>
						<Link href="/components/marketing" className={navItemClassName.BASE}>Marketing</Link>
					</div>

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
								<i className="ri-sun-fill text-lg text-yellow-500 top-0.5 relative dark:hidden"></i>
								<i className="ri-moon-fill text-lg text-slate-400 top-0.5 relative hidden dark:block"></i>
							</span>
						</label>
					</div>

				</div>
			</header>

			<div className="h-10"></div>
		</>
	)
}