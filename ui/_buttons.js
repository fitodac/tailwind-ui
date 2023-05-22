const theme = require('tailwindcss/defaultTheme')
const GLOBALS = require('./_utils')


const BUTTON_STYLE_BASE = {
	/// Button basics:
	BTN: {
		'border-width': theme.borderWidth.DEFAULT,
		'font-size': theme.fontSize.xs[0],
		'line-height': theme.lineHeight.none,
		'font-weight': theme.fontWeight.medium,
		'max-height': theme.spacing[10],
		'padding': `${GLOBALS.spacing.y} ${GLOBALS.spacing.x}`,
		'transition': theme.transitionProperty.all,
		'transition-duration': theme.transitionDuration[300],
		'border-radius': theme.borderRadius.md,
		'overflow': 'hidden',
		'text-overflow': 'ellipsis',
		'user-select': 'none'
	},

	/// Button icon:
	ICON: {
		'width': theme.spacing[10],
		'height': theme.spacing[10],
		'padding': theme.spacing[0],
		'display': 'inline-grid',
		'place-content': 'center'
	},

	/// Button group:
	BTN_GROUP: {
		'display': 'inline-flex'
	},
	BTN_GROUP_CHILDREN: {
		'font-size': theme.fontSize.sm[0],
		'border-radius': theme.borderRadius.none
	},
	BTN_GROUP_CHILDREN_FIRST: { 'border-radius': `${theme.borderRadius.md} 0 0 ${theme.borderRadius.md}` },
	BTN_GROUP_CHILDREN_LAST: { 'border-radius': `0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0` },
}


const BUTTON_UTILITIES = {
	'.btn': {
		...BUTTON_STYLE_BASE.BTN,

		'&.btn-sm': {
			'font-size': theme.fontSize.xs[0],
			'padding': `${GLOBALS.spacing.sm.y} ${GLOBALS.spacing.sm.x}`
		},
		'&.btn-lg': {
			'padding': `${GLOBALS.spacing.lg.y} ${GLOBALS.spacing.lg.x}`,
			'max-height': theme.spacing[14],
		},
		'&.btn-icon': {...BUTTON_STYLE_BASE.ICON},
		'&.rounded-full': {'border-radius': theme.borderRadius.full}
	},

	'.btn-group': {
		...BUTTON_STYLE_BASE.BTN_GROUP,
		'& > .btn': {
			...BUTTON_STYLE_BASE.BTN,
			...BUTTON_STYLE_BASE.BTN_GROUP_CHILDREN,
			'padding-left': theme.spacing[5],
			'padding-right': theme.spacing[5],
			'&:first-of-type': {...BUTTON_STYLE_BASE.BTN_GROUP_CHILDREN_FIRST},
			'&:last-of-type': {...BUTTON_STYLE_BASE.BTN_GROUP_CHILDREN_LAST}
		}
	},
	'.btn-group-sm': {
		...BUTTON_STYLE_BASE.BTN_GROUP,
		'& > .btn': {
			...BUTTON_STYLE_BASE.BTN,
			...BUTTON_STYLE_BASE.BTN_GROUP_CHILDREN,
			'font-size': theme.fontSize.xs[0],
			'padding': `${theme.spacing[1.5]} ${theme.spacing[3]}`,
			'&:first-of-type': {...BUTTON_STYLE_BASE.BTN_GROUP_CHILDREN_FIRST},
			'&:last-of-type': {...BUTTON_STYLE_BASE.BTN_GROUP_CHILDREN_LAST}
		}
	},
	'.btn-group-lg': {
		...BUTTON_STYLE_BASE.BTN_GROUP,
		'& > .btn': {
			...BUTTON_STYLE_BASE.BTN,
			...BUTTON_STYLE_BASE.BTN_GROUP_CHILDREN,
			'padding': `${GLOBALS.spacing.lg.y} ${GLOBALS.spacing.lg.x}`,
			'max-height': theme.spacing[14],
			'&:first-of-type': { 'border-radius': `${theme.borderRadius.lg} 0 0 ${theme.borderRadius.lg}` },
			'&:last-of-type': { 'border-radius': `0 ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0` }
		}
	}
}


module.exports = { BUTTON_UTILITIES }