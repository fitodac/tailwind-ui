import { useRef } from 'react'

import Code_Buttons from './codes/buttons/Buttons'
import Code_ButtonsSizes from './codes/buttons/Sizes'
import Code_ButtonsOutline from './codes/buttons/Outline'
import Code_ButtonsGhost from './codes/buttons/Ghost'
import Code_ButtonsRounded from './codes/buttons/Rounded'
import Code_ButtonsIconized from './codes/buttons/Iconized'
import Code_ButtonsIconText from './codes/buttons/IconText'


const classes = {
	mark: 'text-white',
	tag: 'text-red-400',
	class_name: 'text-orange-400',
	equal: 'text-blue-400',
	class_list: 'text-green-500',
	class_list_highlight: 'text-green-500',
	class_list_secondary: 'text-green-600 text-opacity-90 italic',
	comment: 'text-gray-400 text-opacity-70'
}


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

	return (
	<div className="bg-slate-700 pr-16 mx-6 mb-8 relative rounded-lg">

		<button 
			className="btn btn-icon btn-outline right-3 top-3 absolute hover:bg-slate-200 hover:border-slate-200
								dark:hover:bg-slate-900 dark:hover:border-slate-900"
			onClick={copyCode}>
			<i className="ri-clipboard-line text-slate-400"></i>
		</button>
		
		<div className="overflow-hidden">
			<div className="overflow-x-auto relative top-4 -mt-4">
				<pre className="text-slate-500 text-sm leading-tight p-6 pb-11" ref={code}>

					{ props.code === 'Code_Buttons' 				? (<Code_Buttons classes={classes} />) 					: null }
					{ props.code === 'Code_ButtonsSizes' 		? (<Code_ButtonsSizes classes={classes} />) 		: null }
					{ props.code === 'Code_ButtonsOutline' 	? (<Code_ButtonsOutline classes={classes} />) 	: null }
					{ props.code === 'Code_ButtonsGhost' 		? (<Code_ButtonsGhost classes={classes} />) 		: null }
					{ props.code === 'Code_ButtonsRounded' 	? (<Code_ButtonsRounded classes={classes} />) 	: null }
					{ props.code === 'Code_ButtonsIconized' ? (<Code_ButtonsIconized classes={classes} />) 	: null }
					{ props.code === 'Code_ButtonsIconText' ? (<Code_ButtonsIconText classes={classes} />) 	: null }

				</pre>
			</div>
		</div>

	</div>
	)
}