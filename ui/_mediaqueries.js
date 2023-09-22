const MEDIA = {

	mediaQueries: {
		sm: 'max-width: 639px',
    md: 'min-width: 768px',
    lg: 'min-width: 640px',
    xl: 'min-width: 1024px',
    '2xl': 'min-width: 1280px',
    short: 'max-height: 600px',
    tall: 'min-height: 800px',
	},

	query: (mq, styles) => {
		if( !mq ) throw new Error('The TailwindCSS media query className is required, for example "md"')
		if( !styles ) throw new Error('You should to write some css styles for the component')
		if( !mq || !styles ) return

		return `@media (${MEDIA.mediaQueries[mq]}){${styles}}`
	}

}


module.exports = MEDIA