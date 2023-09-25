import { useRef } from 'react'

import Code_Buttons from './codes/buttons/Buttons'
import Code_ButtonsSizes from './codes/buttons/Sizes'
import Code_ButtonsOutline from './codes/buttons/Outline'
import Code_ButtonsGhost from './codes/buttons/Ghost'
import Code_ButtonsRounded from './codes/buttons/Rounded'
import Code_ButtonsIconized from './codes/buttons/Iconized'
import Code_ButtonsIconText from './codes/buttons/IconText'
import Code_ButtonsToggler from './codes/buttons/Toggler'
import Code_ButtonsGroup from './codes/buttons/Group'
import Code_ButtonsGroupSize from './codes/buttons/GroupSize'

import Code_Heading from './codes/content/Heading'
import Code_Paragraph from './codes/content/Paragraph'
import Code_ListOrdered from './codes/content/ListOrdered'
import Code_ListUnordered from './codes/content/ListUnordered'
import Code_ContentCode from './codes/content/Code'
import Code_ContentPre from './codes/content/Pre'


import Code_Helper from './codes/forms/Helper'
import Code_Validation from './codes/forms/Validation'
import Code_InputGroups from './codes/forms/InputGroups'
import Code_InputAddons from './codes/forms/InputAddons'

import Code_CheckboxSizing from './codes/forms/CheckboxSizing'
import Code_CheckboxVertical from './codes/forms/CheckboxVertical'
import Code_CheckboxVerticalMuchText from './codes/forms/CheckboxVerticalMuchText'
import Code_CheckboxToggler from './codes/forms/CheckboxToggler'
import Code_CheckboxInputGroup from './codes/forms/CheckboxInputGroup'

import { 
	Code_Input,
	Code_DatepickerInline,
	Code_DatepickerModal
} from './codes/forms'

import Code_TableBasic from './codes/tables/Basic'
import Code_TableBordered from './codes/tables/Bordered'
import Code_TableStriped from './codes/tables/Striped'
import Code_TableHoverable from './codes/tables/Hoverable'
import Code_TableCompact from './codes/tables/Compact'
import Code_TableScrollContent from './codes/tables/ScrollContent'

import Code_Modal from './codes/modals/Default'
import Code_ModalCancelButton from './codes/modals/CancelButton'


const classes = {
	mark: 'text-white',
	tag: 'text-red-400',
	class_name: 'text-orange-400',
	equal: 'text-blue-400',
	class_list: 'text-green-500',
	class_list_highlight: 'text-green-500',
	class_list_secondary: 'text-green-600 text-opacity-90 italic',
	comment: 'text-gray-400 text-opacity-70',
	js_syntax: 'text-indigo-300',
	js_name: 'text-red-400',
	js_var: 'text-yellow-400',
	js_route: 'text-green-500',
	js_brackets: 'text-orange-300',
}


export default function CodeBox({code}){

	const elPre = useRef(null)

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
								dark:border-slate-600 dark:hover:bg-slate-900 dark:hover:border-slate-900"
			onClick={copyCode}>
			<i className="ri-clipboard-line text-slate-400"></i>
		</button>
		
		<div className="overflow-hidden">
			<div className="overflow-x-auto relative top-4 -mt-4">
				<pre className="text-slate-500 text-sm leading-tight p-6 pb-11 dark:text-slate-400" ref={elPre}>

					{/* Buttons */}
					{ code === 'Code_Buttons' 										? (<Code_Buttons classes={classes} />) 										: null }
					{ code === 'Code_ButtonsSizes' 								? (<Code_ButtonsSizes classes={classes} />) 							: null }
					{ code === 'Code_ButtonsOutline' 							? (<Code_ButtonsOutline classes={classes} />) 						: null }
					{ code === 'Code_ButtonsGhost' 								? (<Code_ButtonsGhost classes={classes} />) 							: null }
					{ code === 'Code_ButtonsRounded' 							? (<Code_ButtonsRounded classes={classes} />) 						: null }
					{ code === 'Code_ButtonsIconized' 						? (<Code_ButtonsIconized classes={classes} />) 						: null }
					{ code === 'Code_ButtonsIconText' 						? (<Code_ButtonsIconText classes={classes} />) 						: null }
					{ code === 'Code_ButtonsToggler' 							? (<Code_ButtonsToggler classes={classes} />) 						: null }
					{ code === 'Code_ButtonsGroup' 								? (<Code_ButtonsGroup classes={classes} />) 							: null }
					{ code === 'Code_ButtonsGroupSize' 						? (<Code_ButtonsGroupSize classes={classes} />) 					: null }
					
					
					{/* Content */}
					{ code === 'Code_Heading' 										? (<Code_Heading classes={classes} />) 										: null }
					{ code === 'Code_Paragraph' 									? (<Code_Paragraph classes={classes} />) 									: null }
					{ code === 'Code_ListOrdered' 								? (<Code_ListOrdered classes={classes} />) 								: null }
					{ code === 'Code_ListUnordered' 							? (<Code_ListUnordered classes={classes} />) 							: null }
					{ code === 'Code_ContentCode' 								? (<Code_ContentCode classes={classes} />) 								: null }
					{ code === 'Code_ContentPre' 									? (<Code_ContentPre classes={classes} />) 								: null }
					
					{/* Form */}
					{ code === 'Code_Input' 											? (<Code_Input classes={classes} />) 											: null }
					{ code === 'Code_Helper' 											? (<Code_Helper classes={classes} />) 										: null }
					{ code === 'Code_Validation' 									? (<Code_Validation classes={classes} />) 								: null }
					{ code === 'Code_InputGroups' 								? (<Code_InputGroups classes={classes} />) 								: null }
					{ code === 'Code_InputAddons' 								? (<Code_InputAddons classes={classes} />) 								: null }
					
					{ code === 'Code_CheckboxSizing' 							? (<Code_CheckboxSizing classes={classes} />) 						: null }
					{ code === 'Code_CheckboxVertical' 						? (<Code_CheckboxVertical classes={classes} />) 					: null }
					{ code === 'Code_CheckboxVerticalMuchText' 		? (<Code_CheckboxVerticalMuchText classes={classes} />) 	: null }
					{ code === 'Code_CheckboxToggler' 						? (<Code_CheckboxToggler classes={classes} />) 						: null }
					{ code === 'Code_CheckboxInputGroup' 					? (<Code_CheckboxInputGroup classes={classes} />) 				: null }
					
					{ code === 'Code_DatepickerInline' 						? (<Code_DatepickerInline classes={classes} />) 					: null }
					{ code === 'Code_DatepickerModal' 						? (<Code_DatepickerModal classes={classes} />) 						: null }


					{/* Tables */}
					{ code === 'Code_TableBasic' 									? (<Code_TableBasic classes={classes} />) 								: null }
					{ code === 'Code_TableBordered' 							? (<Code_TableBordered classes={classes} />) 							: null }
					{ code === 'Code_TableStriped' 								? (<Code_TableStriped classes={classes} />) 							: null }
					{ code === 'Code_TableHoverable' 							? (<Code_TableHoverable classes={classes} />) 						: null }
					{ code === 'Code_TableCompact' 								? (<Code_TableCompact classes={classes} />) 							: null }
					{ code === 'Code_TableScrollContent' 					? (<Code_TableScrollContent classes={classes} />) 				: null }

					{/* Modals */}
					{ code === 'Code_Modal' 											? (<Code_Modal classes={classes} />) 											: null }
					{ code === 'Code_ModalCancelButton' 					? (<Code_ModalCancelButton classes={classes} />) 					: null }


				</pre>
			</div>
		</div>

	</div>
	)
}