const theme = require('tailwindcss/defaultTheme')


const GLOBALS = {
	// textColor: 'rgb(71 85 105)', // slate-600
	textColor: 'rgb(100 116 139)', // slate-500
	fontSize: '17px',
	fontSizeLarge: '15px',
	fontWeight: theme.fontWeight.light,
	lineHeight: '1.4',

	spacing: {
		DEFAULT: theme.spacing[3],
		y: theme.spacing[3],
		x: theme.spacing[8],
		sm: {
			x: theme.spacing[4],
			y: theme.spacing[1.5]
		},
		lg: {
			x: theme.spacing[12],
			y: theme.spacing[4],
		}
	},

	input: {
		borderColor: 'rgb(203 213 225)', // slate-300
		valid: {
			color: 'rgb(22 163 74)' // green-600
		},
		error: { 
			color: 'rgb(185 28 28)' // red-700 
		}
	}
}


module.exports = GLOBALS