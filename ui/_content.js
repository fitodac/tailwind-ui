const plugin = require('tailwindcss/plugin')
const theme = require('tailwindcss/defaultTheme')


const OPTIONS = {
	'.code h1': {},
	'.code h2': {},
	'.code h3': {},
	'.code h4': {},
	'.code h5': {},
	'.code p + p': {},
	'.code ul': {},
	'.code ol': {},
	'.code code': {},
	'.code pre': {},
}


const BASE = {
	H1: { fontSize: theme.fontSize['5xl'], lineHeight: 1 },
	H2: { fontSize: theme.fontSize['4xl'], lineHeight: 1 },
	H3: { fontSize: theme.fontSize['3xl'], lineHeight: 1 },
	H4: { fontSize: theme.fontSize['2xl'], lineHeight: 1 },
	H5: { fontWeight: theme.fontWeight.bold },

	P_P: { marginTop: theme.spacing[8] },

	UL: { listStyleType: 'disc' },
	OL: { listStyleType: 'decimal' },
	
	CODE: {
		'font-size': theme.fontSize.sm[0],
		'line-height': 1,
		'letter-spacing': theme.letterSpacing.tight
	},

	PRE: {
		'font-size': theme.fontSize.sm[0],
		'letter-spacing': theme.letterSpacing.tight,
		'white-space': 'pre',
		'padding': `${theme.spacing[3]} ${theme.spacing[5]}`,
		'border-radius': theme.borderRadius.lg,
	}
}


module.exports = plugin.withOptions((options = OPTIONS) => {
	return function ({addComponents}) {
		addComponents({
			['.content']: {
				['h1']: {...BASE.H1, ...options['.code h1']},
				['h2']: {...BASE.H2, ...options['.code h2']},
				['h3']: {...BASE.H3, ...options['.code h3']},
				['h4']: {...BASE.H4, ...options['.code h4']},
				['h5']: {...BASE.H5, ...options['.code h5']},
				['p + p']: {...BASE.P_P, ...options['.code p+p']},
				['ul']: {...BASE.UL, ...options['.code ul']},
				['ol']: {...BASE.OL, ...options['.code ol']},
				['code']: {...BASE.CODE, ...options['.code code']},
				['pre']: {...BASE.PRE, ...options['.code pre']}
			}
		})
	}
})