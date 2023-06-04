const theme = require('tailwindcss/defaultTheme')

const minWidth = '180px'

const LIST_GROUP_STYLE_BASE = {
	HEAD: {
		'user-select': 'none',

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
			'min-width': minWidth,
			'padding': theme.spacing[3],
			'vertical-align': 'top'
		}
	},
	FOOTER: {},
}


const LIST_GROUP_UTILITIES = {
	'table.table': {
		'width': '100%',

		'> thead': {
			...LIST_GROUP_STYLE_BASE.HEAD,

			'tr': {...LIST_GROUP_STYLE_BASE.HEAD.TR},
			'tr th': {...LIST_GROUP_STYLE_BASE.HEAD.TH}
		},

		'> tbody': {
			...LIST_GROUP_STYLE_BASE.BODY,

			'tr': {...LIST_GROUP_STYLE_BASE.BODY.TR},
			'tr td': {...LIST_GROUP_STYLE_BASE.BODY.TD},
		},

		'> tfoot': {
			...LIST_GROUP_STYLE_BASE.FOOTER,
		},


		// Table bordered
		'&.table-bordered': {
			'> tbody': {
				'> tr > td': { 'border-top-width': '1px' }
			}
		},


		// Table compact
		'&.table-compact': {
			'> thead': {
				'> tr > th': { 
					'font-size': theme.fontSize.sm[0],
					'line-height': theme.fontSize.sm[1].lineHeight,
					'padding': theme.spacing[1],
				}
			},

			'> tbody': {
				'> tr > td': { 
					'font-size': theme.fontSize.sm[0],
					'line-height': theme.fontSize.sm[1].lineHeight,
					'padding': theme.spacing[1],
				}
			}
		},

	}
}


module.exports = { LIST_GROUP_UTILITIES }