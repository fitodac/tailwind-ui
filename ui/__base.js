const plugin = require('tailwindcss/plugin')
const colors = require('./_color')
const GLOBALS = require('./_utils')

const OPTIONS = {}


module.exports = plugin.withOptions((options = OPTIONS) => {
	return function ({addBase}) {
		addBase({
			':root': {
				'--tw-ui-text-color': GLOBALS.textColor,
				'--tw-ui-font-size': GLOBALS.fontSize,
				'--tw-ui-font-weight': GLOBALS.fontWeight,
				'--tw-ui-line-height': GLOBALS.lineHeight,
				'--tw-ui-input-border-color': GLOBALS.input.borderColor,
				'--tw-ui-input-valid-color': GLOBALS.input.valid.color,
				'--tw-ui-input-error-color': GLOBALS.input.error.color,
				// dark
				'--tw-ui-dark-text-color': GLOBALS.DARK.textColor,
				'--tw-ui-dark-border-color': GLOBALS.DARK.borderColor,
			}
		})
	}
},
() => {
	return {
		theme: { 
			extend: {
				colors: colors,
				fontSize: {
					xxs: '9px'
				}
			}
		},
	}
})