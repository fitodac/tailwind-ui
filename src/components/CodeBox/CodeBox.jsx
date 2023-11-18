import { useRef } from 'react'

import {
	// avatars
	Code_AvatarDefault,
	Code_AvatarGroup,
	Code_AvatarGroupActions,
	Code_AvatarSquircle,

	// buttons
	Code_Buttons,
	Code_ButtonsGhost,
	Code_ButtonsGroup,
	Code_ButtonsGroupSize,
	Code_ButtonsIconized,
	Code_ButtonsIconText,
	Code_ButtonsOutline,
	Code_ButtonsRounded,
	Code_ButtonsSizes,
	Code_ButtonsToggler,

	// content
	Code_ContentCode,
	Code_Heading,
	Code_ListOrdered,
	Code_ListUnordered,
	Code_Paragraph,
	Code_ContentPre,

	// forms
	Code_CheckboxSizing,
	Code_CheckboxToggler,
	Code_CheckboxVertical,
	Code_CheckboxVerticalMuchText,
	Code_DatepickerInline,
	Code_DatepickerModal,
	Code_Helper,
	Code_Input,
	Code_InputAddons,
	Code_InputGroups,
	Code_RadioCheckboxStyle,
	Code_RadioSizing,
	Code_RadioToggler,
	Code_RadioVertical,
	Code_RadioVerticalMuchText,
	Code_SelectCustomBasic,
	Code_Validation,

	// list groups
	Code_ListGroupBasic,
	Code_ListGroupStriped,
	Code_ListGroupHoverable,
	Code_ListGroupHead,
	Code_ListGroupLink,

	// tables
	Code_TableBasic,
	Code_TableBordered,
	Code_TableStriped,
	Code_TableHoverable,
	Code_TableCompact,
	Code_TableScrollContent,

	// modals
	Code_Modal,
	Code_ModalCancelButton
} from '.'


// import {
// 	Code_PaginationBase,
// 	Code_PaginationRounded,
// 	Code_PaginationBoxed,
// 	Code_PaginationMinimalist
// } from './codes/components/application'

// import {
// 	Code_ToastDefault,
// 	Code_ToastCloseable
// } from './codes/toast'


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


export const CodeBox = ({code}) => {

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
				<pre className="text-slate-200 text-sm leading-tight p-6 pb-11 dark:text-slate-400" ref={elPre}>

					{/* Avatars */}
					{ code === 'Code_AvatarDefault' 						? <Code_AvatarDefault /> 							: null }
					{ code === 'Code_AvatarGroup' 							? <Code_AvatarGroup /> 								: null }
					{ code === 'Code_AvatarGroupActions' 				? <Code_AvatarGroupActions /> 				: null }
					{ code === 'Code_AvatarSquircle' 						? <Code_AvatarSquircle /> 						: null }

					{/* Buttons */}
					{ code === 'Code_Buttons' 									? <Code_Buttons /> 										: null }
					{ code === 'Code_ButtonsSizes' 							? <Code_ButtonsSizes /> 							: null }
					{ code === 'Code_ButtonsOutline' 						? <Code_ButtonsOutline /> 						: null }
					{ code === 'Code_ButtonsGhost' 							? <Code_ButtonsGhost /> 							: null }
					{ code === 'Code_ButtonsRounded' 						? <Code_ButtonsRounded /> 						: null }
					{ code === 'Code_ButtonsIconized' 					? <Code_ButtonsIconized /> 						: null }
					{ code === 'Code_ButtonsIconText' 					? <Code_ButtonsIconText /> 						: null }
					{ code === 'Code_ButtonsToggler' 						? <Code_ButtonsToggler /> 						: null }
					{ code === 'Code_ButtonsGroup' 							? <Code_ButtonsGroup /> 							: null }
					{ code === 'Code_ButtonsGroupSize' 					? <Code_ButtonsGroupSize /> 					: null }
					
					{/* Content */}
					{ code === 'Code_Heading' 									? <Code_Heading /> 										: null }
					{ code === 'Code_Paragraph' 								? <Code_Paragraph /> 									: null }
					{ code === 'Code_ListOrdered' 							? <Code_ListOrdered /> 								: null }
					{ code === 'Code_ListUnordered' 						? <Code_ListUnordered /> 							: null }
					{ code === 'Code_ContentCode' 							? <Code_ContentCode /> 								: null }
					{ code === 'Code_ContentPre' 								? <Code_ContentPre /> 								: null }
					
					{/* Form */}
					{ code === 'Code_CheckboxSizing' 						? <Code_CheckboxSizing /> 						: null }
					{ code === 'Code_CheckboxToggler' 					? <Code_CheckboxToggler /> 						: null }
					{ code === 'Code_CheckboxVertical' 					? <Code_CheckboxVertical /> 					: null }
					{ code === 'Code_CheckboxVerticalMuchText' 	? <Code_CheckboxVerticalMuchText /> 	: null }
					{ code === 'Code_DatepickerInline' 					? <Code_DatepickerInline /> 					: null }
					{ code === 'Code_DatepickerModal' 					? <Code_DatepickerModal /> 						: null }
					{ code === 'Code_Helper' 										? <Code_Helper /> 										: null }
					{ code === 'Code_Input' 										? <Code_Input /> 											: null }
					{ code === 'Code_InputAddons' 							? <Code_InputAddons /> 								: null }
					{ code === 'Code_InputGroups' 							? <Code_InputGroups /> 								: null }
					{ code === 'Code_RadioCheckboxStyle' 				? <Code_RadioCheckboxStyle /> 				: null }
					{ code === 'Code_RadioSizing' 							? <Code_RadioSizing /> 								: null }
					{ code === 'Code_RadioToggler' 							? <Code_RadioToggler /> 							: null }
					{ code === 'Code_RadioVertical' 						? <Code_RadioVertical /> 							: null }
					{ code === 'Code_RadioVerticalMuchText' 		? <Code_RadioVerticalMuchText /> 			: null }
					{ code === 'Code_SelectCustomBasic' 				? <Code_SelectCustomBasic /> 					: null }
					{ code === 'Code_Validation' 								? <Code_Validation /> 								: null }
					
					{/* List groups */}
					{ code === 'Code_ListGroupBasic' 						? <Code_ListGroupBasic /> 						: null }
					{ code === 'Code_ListGroupStriped' 					? <Code_ListGroupStriped /> 					: null }
					{ code === 'Code_ListGroupHoverable' 				? <Code_ListGroupHoverable /> 				: null }
					{ code === 'Code_ListGroupHead' 						? <Code_ListGroupHead /> 							: null }
					{ code === 'Code_ListGroupLink' 						? <Code_ListGroupLink /> 							: null }

					{/* Tables */}
					{ code === 'Code_TableBasic' 								? <Code_TableBasic /> 								: null }
					{ code === 'Code_TableBordered' 						? <Code_TableBordered /> 							: null }
					{ code === 'Code_TableStriped' 							? <Code_TableStriped /> 							: null }
					{ code === 'Code_TableHoverable' 						? <Code_TableHoverable /> 						: null }
					{ code === 'Code_TableCompact' 							? <Code_TableCompact /> 							: null }
					{ code === 'Code_TableScrollContent' 				? <Code_TableScrollContent /> 				: null }

					{/* Modals */}
					{ code === 'Code_Modal' 										? <Code_Modal classes={classes} /> 											: null }
					{ code === 'Code_ModalCancelButton' 				? <Code_ModalCancelButton classes={classes} /> 					: null }

					{/* Pagination */}
					{ code === 'Code_PaginationBase' 						? <Code_PaginationBase classes={classes} /> 						: null }
					{ code === 'Code_PaginationRounded' 				? <Code_PaginationRounded classes={classes} /> 					: null }
					{ code === 'Code_PaginationBoxed' 					? <Code_PaginationBoxed classes={classes} /> 						: null }
					{ code === 'Code_PaginationMinimalist' 			? <Code_PaginationMinimalist classes={classes} /> 			: null }
					
					{/* Toast */}
					{ code === 'Code_ToastDefault' 							? <Code_ToastDefault classes={classes} /> 							: null }
					{ code === 'Code_ToastCloseable' 						? <Code_ToastCloseable classes={classes} /> 						: null }



				</pre>
			</div>
		</div>

	</div>
	)
}