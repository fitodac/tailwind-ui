import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Sidebar(){
	
	const router = useRouter()
	const [menu, setMenu] = useState('core')



	useEffect(() => {
		if( router.pathname.indexOf('/application') >= 0 ) setMenu('application')
		if( router.pathname.indexOf('/dashboard') >= 0 ) setMenu('dashboard')
		if( router.pathname.indexOf('/ecommerce') >= 0 ) setMenu('ecommerce')
		if( router.pathname.indexOf('/marketing') >= 0 ) setMenu('marketing')
		
	}, [router])


	return(
		<div
			id="mainSidebar"
			className="bg-white border-r border-slte-200 w-60 -left-full top-0 transition-all fixed z-30 
			lg:left-0
		dark:bg-slate-800 dark:border-slate-700">
			<div className="h-screen grid gap-6 grid-rows-6">

				<div className="px-4 pt-5">
					<h1 className="font-bold select-none">TailwindCSS UI</h1>
				</div>

				<div className="scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
					{ 'core' === menu 
					? (<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16 dark:text-slate-100">
							<li className="">
								<Link href="/" className="font-semibold px-4 py-2 flex">Core components</Link>
							</li>

							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">ESSENTIALS</div>
								<ul className="pl-2">

									<li className="">
										<Link href="/buttons" className="px-4 py-2 flex">Buttons</Link>
									</li>

									<li className="">
										<Link href="/colors" className="px-4 py-2 flex">Colors</Link>
									</li>

									<li className="">
										<Link href="/content" className="px-4 py-2 flex">Content</Link>
									</li>

								</ul>
							</li>


							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">FORMS</div>
								<ul className="pl-2">
									<li className="">
										<Link href="/forms/inputs" className="px-4 py-2 flex">Inputs</Link>
									</li>
									<li className="">
										<Link href="/forms/select" className="px-4 py-2 flex">Select</Link>
									</li>
									<li className="">
										<Link href="/forms/custom-select" className="px-4 py-2 flex">Custom select</Link>
									</li>
									<li className="">
										<Link href="/forms/checkboxes" className="px-4 py-2 flex">Checkboxes</Link>
									</li>
									<li className="">
										<Link href="/forms/radio-buttons" className="px-4 py-2 flex">Radio buttons</Link>
									</li>
									<li className="">
										<Link href="/forms/datepicker" className="px-4 py-2 flex">Datepicker</Link>
									</li>
								</ul>
							</li>


							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">DATA</div>
								<ul className="pl-2">
									<li className="">
										<Link href="/data/avatar" className="px-4 py-2 flex">Avatar</Link>
									</li>

									<li className="">
										<Link href="/data/tables" className="px-4 py-2 flex">Tables</Link>
									</li>

									<li className="">
										<Link href="/data/list-group" className="px-4 py-2 flex">List groups</Link>
									</li>

									<li className="">
										<Link href="/data/collapsible" className="px-4 py-2 flex">Collapsible</Link>
									</li>

									<li className="">
										<Link href="/data/badges" className="px-4 py-2 flex">Badges</Link>
									</li>

								</ul>
							</li>


							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">NAVIGATION</div>
								<ul className="pl-2">
									<li className="">
										<Link href="/navigation/tabs" className="px-4 py-2 flex">Tabs</Link>
									</li>

									<li className="">
										<Link href="/navigation/dropdown" className="px-4 py-2 flex">Dropdown</Link>
									</li>
								</ul>
							</li>
							
							
							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">FEEDBACK</div>
								<ul className="pl-2">
									<li className="">
										<Link href="/feedback/spinner" className="px-4 py-2 flex">Spinner</Link>
									</li>

									<li className="">
										<Link href="/feedback/modal" className="px-4 py-2 flex">Modal</Link>
									</li>

									<li className="">
										<Link href="/feedback/toast" className="px-4 py-2 flex">Toast</Link>
									</li>
								</ul>
							</li>


							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">OTHER</div>
								<ul className="pl-2">
									
									<li className="">
										<Link href="/other/scroll-bar" className="px-4 py-2 flex">Scroll bar</Link>
									</li>

									<li className="">
										<Link href="/other/extra" className="px-4 py-2 flex">Extra</Link>
									</li>

								</ul>
							</li>


						</ul>)
						: null }


						{/* Application */}
						{ 'application' === menu 
						? (<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16 dark:text-slate-100">
							<li className="">
								<Link href="/components/application" className="font-semibold px-4 py-2 flex">Application components</Link>
							</li>

							<li className="">
								<Link href="/components/application/pagination" className="px-4 py-2 flex">Pagination</Link>
							</li>
						</ul>)
						: null }


						{/* Dashboard */}
						{ 'dashboard' === menu 
						? (<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16 dark:text-slate-100">
							<li className="">
								<Link href="/components/dashboard" className="font-semibold px-4 py-2 flex">Dashboard components</Link>
							</li>
						</ul>)
						: null }


						{/* E-commerce */}
						{ 'ecommerce' === menu 
						? (<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16 dark:text-slate-100">
							<li className="">
								<Link href="/components/ecommerce" className="font-semibold px-4 py-2 flex">E-commerce components</Link>
							</li>
						</ul>)
						: null }


						{/* MArketing */}
						{ 'marketing' === menu 
						? (<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16 dark:text-slate-100">
							<li className="">
								<Link href="/components/marketing" className="font-semibold px-4 py-2 flex">Marketing components</Link>
							</li>
						</ul>)
						: null }
					
				</div>

			</div>
		</div>
	)
}