const theme = require('tailwindcss/defaultTheme')
const GLOBALS = require('./_utils');


const CHECKBOX_STYLE_BASE = {
	'border-width': theme.borderWidth.DEFAULT,
	'border-style': 'solid',
	'font-size': theme.fontSize.sm[0],
	'line-height': theme.fontSize.sm[1].lineHeight,
	'width': '100%',
	'max-height': theme.spacing[10],
	'padding': GLOBALS.spacing.DEFAULT,
	'border-radius': theme.borderRadius.md,
	'user-select': 'none'
}


const FORM_CHECKBOX_UTILITIES = {
	'.input-checkbox': {
		'font-size': theme.fontSize.sm[0],
		'font-weight': theme.fontWeight.normal,
		'line-height': theme.fontSize.sm[1].lineHeight,
		'display': 'inline-flex',
		'align-items': 'center',
		'gap': theme.spacing[2],
		'cursor': 'pointer',

		'input': {
			'display': 'none'
		},
		'input + span': {
			'line-height': theme.fontSize.sm[1].lineHeight,
			'display': 'flex',
			'align-items': 'center',
			'gap': theme.spacing[2],
			'transition': theme.transitionProperty.all,
			'user-select': 'none'
		},
		'input + span::before': {
			'content': '""',
			'background-repeat': 'no-repeat',
			'background-position': 'center',
			'border-width': '1px',
			'width': theme.spacing[5],
			'height': theme.spacing[5],
			'display': 'flex',
			'transition': theme.transitionProperty.all,
			'border-radius': theme.borderRadius.md
		},
		'&.input-lg input + span::before': {
			'width': theme.spacing[7],
			'height': theme.spacing[7],
			'border-radius': theme.borderRadius.lg
		},
		'input:disabled + span::before': {
			'cursor': 'auto'
		},

		// Toggler
		'&.toggler input + span::before': {
			'width': theme.spacing[10],
			'height': theme.spacing[5],
			'border-radius': theme.borderRadius.full
		},

		// Check
		'&.check input + span::before': {
			'width': theme.spacing[6],
			'height': theme.spacing[6],
			'border-radius': theme.borderRadius.full
		}
	}
}


module.exports = { 
	FORM_CHECKBOX_UTILITIES
}