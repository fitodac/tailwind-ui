import { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


const loadDatepicker = async () => {
	try{
		return await import('vanillajs-datepicker')
	}catch (err){
		console.error('error:', err)
	}
}


export default function PageInput(){

	const [inline_datepicker_date, setInlineDatepickerDate] = useState('')
	const [modal_datepickerState, setModalDatepickerState] = useState('')
	const [modal_datepicker, setModalDatepicker] = useState(false)
	const [page_init, setPageInit] = useState(false)

	useEffect(() => {
		const init = async () => {
			if( page_init ) return
			const { Datepicker, DateRangePicker } = await loadDatepicker()

			// Input datepicker
			const input_datepicker = document.getElementById('datepicker')
			new Datepicker(input_datepicker, {})

			// Range picker
			const input_rangepicker = document.getElementById('rangePickerContainer')
			new DateRangePicker(input_rangepicker, { 
				updateOnBlur: true 
			})

			// Inline datepicker
			const inline_datepicker = document.getElementById('datepickerInline')
			const datepicker_c = new Datepicker(inline_datepicker, {})
			inline_datepicker.addEventListener('changeDate', () => setInlineDatepickerDate(datepicker_c.getDate('dd MM y')))

			// Datepicker modal
			const datepicker_modal = document.getElementById('datepickerModal')
			const datepicker_d = new Datepicker(datepicker_modal, {})
			datepicker_modal.addEventListener('changeDate', () => {
				setModalDatepickerState(datepicker_d.getDate('dd MM y'))
				setModalDatepicker(false)
			})

			setPageInit(true)
		}

		init()
	}, [])


	return(
		<Layout>
			<PageHeader 
				title="Datepicker" 
				breadcrumbs={[
					{ text: 'Forms', link: null }
				]} />

			<div className="text-slate-400 text-sm font-light mb-10">
				<p>The datepicker component depends of the <a href="https://mymth.github.io/vanillajs-datepicker/#/" target="_blank" className="text-primary">vanilla-datepicker</a> library.</p>

				<div className="content mt-3">
					<pre className="inline-flex">npm i --save-dev choices.js</pre>
				</div>
			</div>


			<div className="space-y-7">
				<DemoCard title={'Inline datepicker'} code="Code_DatepickerInline">
					<div className="grid grid-cols-3 gap-6">
						<div className="space-y-1">
							<div id="datepickerInline" />
						</div>

						{ inline_datepicker_date?.length
						? (<div className="space-y-1">
								<div className="text-sm dark:text-slate-400 font-medium">Date</div>
								<div className="">{inline_datepicker_date}</div>
							</div>)
						: null }
					</div>
				</DemoCard>



				<DemoCard title={'Input datepicker'}>
					<div className="grid grid-cols-3 gap-6">
						<div className="space-y-1">
							<input type="text" id="datepicker" defaultValue="" />
						</div>
					</div>
				</DemoCard>



				<DemoCard title={'Range picker'}>
					<div className="grid grid-cols-2">
						<div id="rangePickerContainer" className="flex items-center gap-x-2">
							<input type="text" id="rangePickerFrom" defaultValue="" />
							<span>to</span>
							<input type="text" id="rangePickerTo" defaultValue="" />
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Modal'} code="Code_DatepickerModal">
					<div className="grid grid-cols-3 gap-6">
						<div className="flex gap-x-3">
							<input type="text" id="datepickerModalDate" value={modal_datepickerState} onFocus={() => setModalDatepicker(true)} onChange={e => setModalDatepickerState(e.target.value)} />
							<div className="">
								<label htmlFor="modalBox" className="btn btn-icon bg-primary border-primary text-white">
									<i className="ri-calendar-event-line"></i>
								</label>
							</div>
						</div>

						<input type="checkbox" id="modalBox" className="hidden" defaultValue="false" checked={modal_datepicker} onChange={e => setModalDatepicker('false' === e.target.value)} />
						
						<div className="overlay">
							<div className="modal">
								<div id="datepickerModal" />
								<div className="px-3 pb-3">
									<button 
										className="btn bg-slate-700 border-slate-700 w-full hover:bg-slate-600 hover:border-slate-600"
										onClick={() => setModalDatepicker(false)}>Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</DemoCard>

			</div>

		</Layout>
	)
}