import { useRef } from 'react'

import Code_Buttons from './codes/buttons/Buttons'

const classes = {
	mark: 'text-white',
	tag: 'text-red-400',
	class_name: 'text-orange-400',
	equal: 'text-blue-400',
	class_list: 'text-green-500'
}


const mark = 'text-white',
			tag = 'text-red-400',
			class_name = 'text-orange-400',
			equal = 'text-blue-400',
			class_list = 'text-green-500'


export default function CodeBox(props){

	const code = useRef(null)

	const copyCode = () => {
		navigator.clipboard.writeText(code.current.innerText)
		.then(() => {
			console.log('Texto copiado al portapapeles')
		})
		.catch(err => {
			console.error('No se pudo copiar el texto: ', err)
		})
	}

	return (<div className="bg-slate-700 pr-16 mx-6 mb-8 relative rounded-lg">

						<button 
							className="btn btn-icon btn-outline right-3 top-3 absolute hover:bg-slate-200 hover:border-slate-200"
							onClick={copyCode}>
							<i className="ri-clipboard-line text-slate-400"></i>
						</button>
						
						<div className="overflow-hidden">
							<div className="overflow-x-auto relative top-4 -mt-4">
								<pre className="text-slate-500 text-sm leading-tight p-6 pb-11" ref={code}>
									{
										props.code === 'Code_Buttons' ? (<Code_Buttons classes={classes} />) : null
									}
								</pre>
							</div>
						</div>

					</div>)
}