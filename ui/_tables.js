const theme = require('tailwindcss/defaultTheme')
const GLOBALS = require('./_utils')

const minWidth = '180px'

const TABLE_STYLE_BASE = {
	HEAD: {
		TR: {},
		TH: {
			'font-weight': theme.fontWeight.medium,
			'text-align': 'left',
			'min-width': minWidth,
			'padding': theme.spacing[3],
			'vertical-align': 'top'
		}
	},
	BODY: {
		TR: {
		},
		TD: {
			'border-top-width': '1px',
			'min-width': minWidth,
			'padding': theme.spacing[3],
			'vertical-align': 'top'
		}
	},
	FOOTER: {},
}


const TABLE_UTILITIES = {
	'table.table': {
		'width': '100%',

		'thead': {
			...TABLE_STYLE_BASE.HEAD,

			'tr': {...TABLE_STYLE_BASE.HEAD.TR},
			'tr th': {...TABLE_STYLE_BASE.HEAD.TH}
		},

		'tbody': {
			...TABLE_STYLE_BASE.BODY,

			'tr': {...TABLE_STYLE_BASE.BODY.TR},
			'tr td': {...TABLE_STYLE_BASE.BODY.TD},
		},

		'tfoot': {
			...TABLE_STYLE_BASE.FOOTER,
		},


		'&.table-scrollable': {}
	}
}


module.exports = { TABLE_UTILITIES }