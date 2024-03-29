import  { useState } from 'react'

import { CodeBox } from './CodeBox'


export default function DemoCard(props){

	const [ codeVisible, setCodeVisible ] = useState(false)
	
	return (
		<div 
			className="bg-white border border-slate-100 max-w-5xl mx-auto rounded-xl shadow
			dark:bg-slate-700 dark:border-slate-700 dark:bg-opacity-60
			lg:mx-0">
			
			<div className="flex justify-between items-center px-6 pt-5">
				<div className="text-slate-600 text-sm font-semibold select-none dark:text-slate-300">{ props.title }</div>

				<nav>
					{ props.code ? 
					
							!codeVisible
								? (<button 
										className="btn btn-icon bg-opacity-20 hover:bg-slate-200 hover:border-slate-200
															dark:border-slate-600 dark:hover:bg-slate-900 dark:hover:border-slate-900"
										onClick={ () => setCodeVisible(true) }>
										<i className="ri-code-s-slash-line text-slate-400"></i>
									</button>)
								: (<button 
										className="btn btn-icon bg-opacity-20 hover:bg-slate-200 hover:border-slate-200
															dark:border-slate-600  dark:hover:bg-slate-900 dark:hover:border-slate-900"
										onClick={ () => setCodeVisible(false) }>
										<i className="ri-code-line text-slate-400"></i>
									</button>) 

						: null }
				</nav>
			</div>

			<div className="px-6 pt-6 pb-8">{ props.children }</div>

			{ codeVisible ? <CodeBox code={ props.code } /> : null }

		</div>
	)
}