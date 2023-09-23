/**
 * TailwindCSS UI Kit
 * version: beta 1.0.0
 */
const plugin = require('tailwindcss/plugin')

const base = require('./__base')
const content = require('./_content')
const button = require('./_button')
const form_input = require('./_form-input')
const form_select = require('./_form-select')
const form_custom_select = require('./_form-select-custom')
const form_checkbox = require('./_form-checkbox')
const form_radiobutton = require('./_form-radiobutton')
const scrollbar = require('./_scrollbar')
const avatar = require('./_avatar')
const table = require('./_table')
const list_group = require('./_list-group')
const badge = require('./_badge')
const tabs = require('./_tabs')
const spinner = require('./_spinner')
const modal = require('./_modal')
const overlay = require('./_overlay')
const toast = require('./_toast')
const collapsible = require('./_collapsible')



module.exports = plugin.withOptions((options = {
	...content.OPTIONS,
	...button.OPTIONS,
	...form_input.OPTIONS,
	...form_select.OPTIONS,
	...form_custom_select.OPTIONS,
	...form_checkbox.OPTIONS,
	...form_radiobutton.OPTIONS,
	...avatar.OPTIONS,
	...table.OPTIONS,
	...list_group.OPTIONS,
	...badge.OPTIONS,
	...tabs.OPTIONS,
	...spinner.OPTIONS,
	...modal.OPTIONS,
	...overlay.OPTIONS,
	...toast.OPTIONS,
	...collapsible.OPTIONS,
}) => {
	
	return function ({addComponents, addBase, addUtilities, matchUtilities, theme}) {
		button.COMPONENTS(addComponents, options)
		base.BASE(addBase)
		content.COMPONENTS(addComponents, options)
		form_input.COMPONENTS(addComponents, options)
		form_select.COMPONENTS(addComponents, options)
		form_custom_select.COMPONENTS(addComponents, options)
		form_checkbox.COMPONENTS(addComponents, options)
		form_radiobutton.COMPONENTS(addComponents, options)
		scrollbar.STYLES(addBase)
		scrollbar.SCROLLBAR_SIZE_UTILITIES(addUtilities)
		scrollbar.ADD_COLOR_UTILITIES({ matchUtilities, theme })
		avatar.COMPONENTS(addComponents, options)
		table.COMPONENTS(addComponents, options)
		list_group.COMPONENTS(addComponents, options)
		badge.COMPONENTS(addComponents, options)
		tabs.COMPONENTS(addComponents, options)
		spinner.COMPONENTS(addComponents, options)
		modal.COMPONENTS(addComponents, options)
		overlay.COMPONENTS(addComponents, options)
		toast.COMPONENTS(addComponents, options)
		collapsible.COMPONENTS(addComponents, options)

		if( options.nocompatible ){
			scrollbar.ADD_ROUNDED_UTILITIES({matchUtilities, theme});
			scrollbar.ADD_SIZE_UTILITIES({matchUtilities, theme});
		}
	}
}, () => {
	return{
		theme: {
			extend: {
				colors: base.COLORS,
				fontSize: { xxs: '9px' }
			}
		}
	}
})