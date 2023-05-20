import Sidebar from '../components/Sidebar'
import Header from '../components/Header'


export default function Layout({children}){
	return(
		<div>
			<div className="bg-slate-50 min-h-screen pl-60 dark:bg-gray-800">
				<Sidebar/>
				
				<Header/>

				<div className="container mx-auto">
					<div className="px-14">
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