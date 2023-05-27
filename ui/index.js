const plugin = require('tailwindcss/plugin')
const colors = require('./_colors')

const GLOBALS = require('./_utils')
const { BUTTON_UTILITIES } = require('./_buttons')
const { FORM_INPUT_UTILITIES } = require('./_form-input')
const { FORM_SELECT_UTILITIES } = require('./_form-select')
const { FORM_CHECKBOX_UTILITIES } = require('./_form-checkboxes')
const { FORM_RADIO_BUTTON_UTILITIES } = require('./_form-radiobuttons')
const { CONTENT_UTILITIES } = require('./_content')
const { TABLE_UTILITIES } = require('./_tables')


const {
  BASE_STYLES,
  SCROLLBAR_SIZE_UTILITIES,
  addColorUtilities
} = require('./_scrollbar')

const { addVariantOverrides } = require('./variants')


module.exports = plugin.withOptions((options = {}) => tailwind => {
		tailwind.addBase({
			':root': {
				'--tw-ui-text-color': GLOBALS.textColor,
				'--tw-ui-font-size': GLOBALS.fontSize,
				'--tw-ui-font-size-lg': GLOBALS.fontSizeLarge,
				'--tw-ui-font-weight': GLOBALS.fontWeight,
				'--tw-ui-line-height': GLOBALS.lineHeight,
				'--tw-ui-input-border-color': GLOBALS.input.borderColor,
				'--tw-ui-input-valid-color': GLOBALS.input.valid.color,
				'--tw-ui-input-error-color': GLOBALS.input.error.color,
			}
		});
		tailwind.addUtilities(BUTTON_UTILITIES);
		tailwind.addUtilities(FORM_INPUT_UTILITIES);
		tailwind.addUtilities(FORM_SELECT_UTILITIES);
		tailwind.addUtilities(FORM_CHECKBOX_UTILITIES);
		tailwind.addUtilities(FORM_RADIO_BUTTON_UTILITIES);
		tailwind.addUtilities(CONTENT_UTILITIES);
		tailwind.addUtilities(TABLE_UTILITIES);

		tailwind.addBase(BASE_STYLES);
		tailwind.addUtilities(SCROLLBAR_SIZE_UTILITIES);
		addColorUtilities(tailwind);
		addVariantOverrides(tailwind);

		// if( options.nocompatible ){
		// 	addRoundedUtilities(tailwind);
		// 	addSizeUtilities(tailwind);
		// }

		return function ({ addVariant, addComponents, theme, prefix }) {
			addComponents({
				// ...buttons
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
	}
)