import { useEffect } from 'react'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'


export default function Layout({children}){

	// useEffect(() => {
		// window.addEventListener('resize', () => {
			// console.log(window.innerWidth)
			// if( window.innerWidth <= 1100 ){
				// document.getElementById('mainSidebar').current.classList.add('-left-screen')
				// console.log(sidebar.current.classList)
			// }
		// })
	// }, [])

	return(
		<div>
			<div className="bg-slate-50 min-h-screen lg:pl-60 dark:bg-gray-800">
				<Sidebar/>
				
				<Header/>

				<div className="container mx-auto">
					<div className="px-6 md:px-10">
						{children}

						<div className="border-t border-slate-200 pt-6 pb-16 mt-20 dark:border-gray-600">
							<div className="flex justify-end">
								<div className="text-slate-400 text-xs">TailwindCSS UI Alpha 1.0.0</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}