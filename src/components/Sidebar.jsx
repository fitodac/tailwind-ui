import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navItemClassName = {
	default: 'px-4 py-2 flex hover:text-primary',
	active: 'text-primary px-4 py-2 flex'
}

export default function Sidebar(){

	const { pathname: path } = useRouter()
	const [menu, setMenu] = useState('core')

	console.log('router', path)

	useEffect(() => {
		if( path.indexOf('/application') >= 0 ) setMenu('application')
		if( path.indexOf('/dashboard') >= 0 ) setMenu('dashboard')
		if( path.indexOf('/ecommerce') >= 0 ) setMenu('ecommerce')
		if( path.indexOf('/marketing') >= 0 ) setMenu('marketing')
		
	}, [path])


	return(
		<div
			id="mainSidebar"
			className="bg-white border-r border-slte-200 w-60 -left-full top-0 transition-all fixed z-30 
			lg:left-0
		dark:bg-slate-800 dark:border-slate-700">
			<div className="h-screen grid gap-6">

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
										<Link href="/buttons" className={'/buttons' === path ? navItemClassName.active : navItemClassName.default}>Buttons</Link>
									</li>

									<li className="">
										<Link href="/colors" className={'/colors' === path ? navItemClassName.active : navItemClassName.default}>Colors</Link>
									</li>

									<li className="">
										<Link href="/content" className={'/content' === path ? navItemClassName.active : navItemClassName.default}>Content</Link>
									</li>

								</ul>
							</li>


							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">FORMS</div>
								<ul className="pl-2">
									<li className="">
										<Link href="/forms/inputs" className={'/forms/inputs' === path ? navItemClassName.active : navItemClassName.default}>Inputs</Link>
									</li>
									<li className="">
										<Link href="/forms/select" className={'/forms/select' === path ? navItemClassName.active : navItemClassName.default}>Select</Link>
									</li>
									<li className="">
										<Link href="/forms/custom-select" className={'/forms/custom-select' === path ? navItemClassName.active : navItemClassName.default}>Custom select</Link>
									</li>
									<li className="">
										<Link href="/forms/checkboxes" className={'/forms/checkboxes' === path ? navItemClassName.active : navItemClassName.default}>Checkboxes</Link>
									</li>
									<li className="">
										<Link href="/forms/radio-buttons" className={'/forms/radio-buttons' === path ? navItemClassName.active : navItemClassName.default}>Radio buttons</Link>
									</li>
									<li className="">
										<Link href="/forms/datepicker" className={'/forms/datepicker' === path ? navItemClassName.active : navItemClassName.default}>Datepicker</Link>
									</li>
								</ul>
							</li>


							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">DATA</div>
								<ul className="pl-2">
									<li className="">
										<Link href="/data/avatar" className={'/data/avatar' === path ? navItemClassName.active : navItemClassName.default}>Avatar</Link>
									</li>

									<li className="">
										<Link href="/data/tables" className={'/data/tables' === path ? navItemClassName.active : navItemClassName.default}>Tables</Link>
									</li>

									<li className="">
										<Link href="/data/list-group" className={'/data/list-group' === path ? navItemClassName.active : navItemClassName.default}>List groups</Link>
									</li>

									<li className="">
										<Link href="/data/collapsible" className={'/data/collapsible' === path ? navItemClassName.active : navItemClassName.default}>Collapsible</Link>
									</li>

									<li className="">
										<Link href="/data/badges" className={'/data/badges' === path ? navItemClassName.active : navItemClassName.default}>Badges</Link>
									</li>

								</ul>
							</li>


							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">NAVIGATION</div>
								<ul className="pl-2">
									<li className="">
										<Link href="/navigation/tabs" className={'/navigation/tabs' === path ? navItemClassName.active : navItemClassName.default}>Tabs</Link>
									</li>

									<li className="">
										<Link href="/navigation/dropdown" className={'/navigation/dropdown' === path ? navItemClassName.active : navItemClassName.default}>Dropdown</Link>
									</li>
								</ul>
							</li>
							
							
							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">FEEDBACK</div>
								<ul className="pl-2">
									<li className="">
										<Link href="/feedback/spinner" className={'/feedback/spinner' === path ? navItemClassName.active : navItemClassName.default}>Spinner</Link>
									</li>

									<li className="">
										<Link href="/feedback/modal" className={'/feedback/modal' === path ? navItemClassName.active : navItemClassName.default}>Modal</Link>
									</li>

									<li className="">
										<Link href="/feedback/toast" className={'/feedback/toast' === path ? navItemClassName.active : navItemClassName.default}>Toast</Link>
									</li>
								</ul>
							</li>


							<li className="pt-3 pb-1">
								<div className="text-xs font-semibold px-4 pb-1">OTHER</div>
								<ul className="pl-2">
									
									<li className="">
										<Link href="/other/scroll-bar" className={'/other/scroll-bar' === path ? navItemClassName.active : navItemClassName.default}>Scroll bar</Link>
									</li>

									<li className="">
										<Link href="/other/extra" className={'/other/extra' === path ? navItemClassName.active : navItemClassName.default}>Extra</Link>
									</li>

								</ul>
							</li>


						</ul>)
						: null }


						{/* Application */}
						{ 'application' === menu 
						? (<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16 dark:text-slate-100">
							<li className="">
								<Link href="/components/application" className={`font-semibold ${'/components/application' === path ? navItemClassName.active : navItemClassName.default}`}>Application components</Link>
							</li>

							<li className="">
								<Link href="/components/application/pagination" className={'/components/application/pagination' === path ? navItemClassName.active : navItemClassName.default}>Pagination</Link>
							</li>
						</ul>)
						: null }


						{/* Dashboard */}
						{ 'dashboard' === menu 
						? (<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16 dark:text-slate-100">
							<li className="">
								<Link href="/components/dashboard" className={`font-semibold ${'/components/dashboard' === path ? navItemClassName.active : navItemClassName.default}`}>Dashboard components</Link>
							</li>
						</ul>)
						: null }


						{/* E-commerce */}
						{ 'ecommerce' === menu 
						? (<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16 dark:text-slate-100">
							<li className="">
								<Link href="/components/ecommerce" className={`font-semibold ${'/components/ecommerce' === path ? navItemClassName.active : navItemClassName.default}`}>E-commerce components</Link>
							</li>
						</ul>)
						: null }


						{/* MArketing */}
						{ 'marketing' === menu 
						? (<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16 dark:text-slate-100">
							<li className="">
								<Link href="/components/marketing" className={`font-semibold ${'/components/marketing' === path ? navItemClassName.active : navItemClassName.default}`}>Marketing components</Link>
							</li>
						</ul>)
						: null }
					
				</div>

			</div>
		</div>
	)
}