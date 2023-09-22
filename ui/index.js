const plugin = require('tailwindcss/plugin')

const options = require('./_options')


const base = require('./__base')
const button = require('./_button')
const content = require('./_content')

module.exports = {
	base,
	content,
	button,
}



/******


// const { BUTTONS, btnStyles } = require('./_button')
const { FORM_INPUT_UTILITIES } = require('./_form-input')
const { FORM_SELECT_UTILITIES } = require('./_form-select')
const { FORM_CHECKBOX_UTILITIES } = require('./_form-checkbox')
const { FORM_RADIO_BUTTON_UTILITIES } = require('./_form-radiobutton')
const { CONTENT_UTILITIES } = require('./_content')
const { TABLE_UTILITIES } = require('./_table')
const { LIST_GROUP_UTILITIES } = require('./_list-group')
const { BADGE_UTILITIES } = require('./_badge')
const { SPINNER_UTILITIES } = require('./_spinner')
const { AVATAR_UTILITIES } = require('./_avatar')
const { TABS_UTILITIES } = require('./_tabs')
const { MODAL_UTILITIES } = require('./_modal')
const { OVERLAY_UTILITIES } = require('./_overlay')
const { TOAST_UTILITIES } = require('./_toast')


const {
  BASE_STYLES,
  SCROLLBAR_SIZE_UTILITIES,
  addColorUtilities
} = require('./_scrollbar')

const { addVariantOverrides } = require('./variants')


module.exports = plugin.withOptions((options) => {
	return function ({ addComponents, addBase }) {

		// Buttons
		// addComponents({
		// 	['.btn']: {
		// 		...btnStyles.BTN, ...options.btn,
		// 		['&.btn-sm']: {...btnStyles.BTN.SM, ...options.btn_sm},
		// 		['&.btn-lg']: {...btnStyles.BTN.LG, ...options.btn_sm},
		// 		['&.ghost']: {...btnStyles.BTN.GHOST, ...options.btn_ghost},
		// 		['&.btn-icon']: {...btnStyles.BTN.ICON, ...options.btn_icon},
		// 	}
		// });

		

	}

	
	// tailwind.addUtilities(FORM_INPUT_UTILITIES);
	// tailwind.addUtilities(FORM_SELECT_UTILITIES);
	// tailwind.addUtilities(FORM_CHECKBOX_UTILITIES);
	// tailwind.addUtilities(FORM_RADIO_BUTTON_UTILITIES);
	// tailwind.addUtilities(CONTENT_UTILITIES);
	// tailwind.addUtilities(TABLE_UTILITIES);
	// tailwind.addUtilities(LIST_GROUP_UTILITIES);
	// tailwind.addComponents(BADGE_UTILITIES);
	// tailwind.addComponents(AVATAR_UTILITIES);
	// tailwind.addComponents(SPINNER_UTILITIES);
	// tailwind.addComponents(TABS_UTILITIES);
	// tailwind.addComponents(MODAL_UTILITIES);
	// tailwind.addComponents(OVERLAY_UTILITIES);
	// tailwind.addComponents(TOAST_UTILITIES);

	// tailwind.addBase(BASE_STYLES);
	// tailwind.addUtilities(SCROLLBAR_SIZE_UTILITIES);
	// addColorUtilities(tailwind);
	// addVariantOverrides(tailwind);

		// if( options.nocompatible ){
		// 	addRoundedUtilities(tailwind);
		// 	addSizeUtilities(tailwind);
		// }
	}
)

 */