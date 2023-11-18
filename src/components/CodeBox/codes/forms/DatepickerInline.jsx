import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_DatepickerInline = () => {
	
	const codeBlockHTML = useRef(null)
	const codeBlockJS = useRef(null)
	
	useEffect(() => {
		codeHighlight(codeBlockHTML.current, 'html')
		codeHighlight(codeBlockJS.current, 'js')
	}, [])

	return (
		<>
		<div ref={codeBlockHTML}>
{`<!-- Html -->
<div id="datepicker"/>

<!-- JavaScript -->`}
		</div>
		<div ref={codeBlockJS}>
{`import { Datepicker } from 'vanillajs-datepicker'

const inline_datepicker = document.getElementById('datepickerInline')

const datepicker = new Datepicker(inline_datepicker, {})

inline_datepicker.addEventListener('changeDate', () => {
  console.log(datepicker.addEventListener(datepicker.getDate('dd MM y')))
})
`}
		</div>
		</>
	)

}