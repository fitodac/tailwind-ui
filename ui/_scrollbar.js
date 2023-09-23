const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette');
const toColorValue = require('tailwindcss/lib/util/toColorValue');


const COMPONENTS = ['track', 'thumb', 'corner'];

/**
 * Base resets to make the plugin's utilities work
 */
const STYLES = (addBase) => {
  addBase({
		'*': {
			'scrollbar-color': 'initial',
			'scrollbar-width': 'initial'
		}
	})
};

/**
 * Tells an element what to do with --scrollbar-track and --scrollbar-thumb
 * variables
 */
const SCROLLBAR_SIZE_BASE = {
  'scrollbar-color': 'var(--scrollbar-thumb, initial) var(--scrollbar-track, initial)',
	'overflow': 'auto',

  ...Object.fromEntries(COMPONENTS.map(component => {
    const base = `&::-webkit-scrollbar-${component}`;

    return [
      [base, {
        'background-color': `var(--scrollbar-${component})`,
        'border-radius': `var(--scrollbar-${component}-radius)`
      }],
      [`${base}:hover`, {
        'background-color': `var(--scrollbar-${component}-hover, var(--scrollbar-${component}))`
      }],
      [`${base}:active`, {
        'background-color': `var(--scrollbar-${component}-active, var(--scrollbar-${component}-hover, var(--scrollbar-${component})))`
      }]
    ];
  }).flat())
};

/**
 * Utilities for initializing a custom styled scrollbar, which implicitly set
 * the scrollbar's size
 */
const SCROLLBAR_SIZE_UTILITIES = (addUtilities) => {
	addUtilities({
		'.scrollbar': {
			...SCROLLBAR_SIZE_BASE,
			'scrollbar-width': 'auto',

			'&::-webkit-scrollbar': {
				display: 'block',
				width: 'var(--scrollbar-width, 6px)',
				height: 'var(--scrollbar-height, 6px)',
				maxHeight: '100px'
			}
		},

		'.scrollbar-thin': {
			...SCROLLBAR_SIZE_BASE,
			'scrollbar-width': 'thin',

			'&::-webkit-scrollbar': {
				display: 'block',
				width: '4px',
				height: '4px'
			}
		},

		'.scrollbar-none': {
			'scrollbar-width': 'none',

			'&::-webkit-scrollbar': {
				display: 'none'
			}
		}
	})
}

/**
 * Adds scrollbar-COMPONENT-COLOR utilities for every scrollbar component.
 *
 * @param {typedefs.TailwindPlugin} tailwind - Tailwind's plugin object
 */
const ADD_COLOR_UTILITIES = ({ matchUtilities, theme }) => {
  const themeColors = flattenColorPalette.default(theme('colors'));
  const colors = Object.fromEntries(
    Object.entries(themeColors).map(([k, v]) => [k, toColorValue.default(v)])
  );

  COMPONENTS.forEach(component => {
    matchUtilities(
      {
        [`scrollbar-${component}`]: value => {
          const color = toColorValue.default(value);
          return {
            [`--scrollbar-${component}`]: `${color} !important`
          };
        }
      },
      {
        values: colors,
        type: 'color'
      }
    );
  });
};

/**
 * Adds scrollbar-COMPONENT-rounded-VALUE utilities for every scrollbar
 * component.
 *
 * @param {typedefs.TailwindPlugin} tailwind - Tailwind's plugin object
 */
const ADD_ROUNDED_UTILITIES = ({ theme, matchUtilities }) => {
  COMPONENTS.forEach(component => {
    matchUtilities(
      {
        [`scrollbar-${component}-rounded`]: value => ({
          [`--scrollbar-${component}-radius`]: value
        })
      },
      {
        values: theme('borderRadius')
      }
    );
  });
};


const ADD_SIZE_UTILITIES = ({ matchUtilities, theme }) => {
  ['width', 'height'].forEach(dimension => {
    matchUtilities({
      [`scrollbar-${dimension[0]}`]: value => ({
        [`--scrollbar-${dimension}`]: value
      })
    }, {
      values: theme(dimension)
    });
  });
};

module.exports = {
  STYLES,
  SCROLLBAR_SIZE_UTILITIES,
  ADD_COLOR_UTILITIES,
  ADD_ROUNDED_UTILITIES,
  ADD_SIZE_UTILITIES
};