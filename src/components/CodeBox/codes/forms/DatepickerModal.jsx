import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'


export const Code_DatepickerModal = () => {
	
	const codeBlockHtml = useRef(null)
	const codeBlockJS = useRef(null)

	useEffect(() => {
		codeHighlight(codeBlockHtml.current, 'html')
		codeHighlight(codeBlockJS.current, 'js')
	}, [])

	return (
		<>
			<div ref={codeBlockHtml}>
{`<!-- Html -->
<div class="flex gap-x-3">
  <input type="text" id="datepickerModalDate">

  <div>
    <label for="modal_box" class="btn btn-primary border-primary text-white">Set date</label>
  </div>
</div>

<input type="checkbox" id="modal_box" class="hidden"/>

<div class="overlay">
  <div class="modal">
    <div id="datepickerModal"/>
    <label for="modal_box" class="btn">Cancel</label>
  </div>
</div>

<!-- JavaScript -->`}
			</div>
			<div ref={codeBlockJS}>
{`import { Datepicker } from 'vanillajs-datepicker'

const datepicker_modal = document.getElementById('datepickerModal')

const datepicker = new Datepicker(datepicker_modal, {})

datepicker_modal.addEventListener('changeDate', () => {
  const datepicker_input = document.getElementById('datepickerModalDate')
  datepicker_input.value = datepicker.addEventListener(datepicker.getDate('dd MM y'))
})`}
			</div>
		</>
	)

}