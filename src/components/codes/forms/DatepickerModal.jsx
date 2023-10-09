export const Code_DatepickerModal = ({classes}) => {
	const {mark, tag, class_name, equal, class_list, class_list_secondary, js_syntax, js_name, js_var, js_route, js_brackets} = classes

	return (
	<>
		<code>// Html</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"flex gap-x-3"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"text"`}</code>
		<code className={class_name}> {`id`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"datepickerModalDate"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`label`}</code>
		<code className={class_name}> {`for`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"modal_box"`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` btn-primary border-primary text-white"`}</code>
		<code className={mark}>{`>Set date</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"checkbox"`}</code>
		<code className={class_name}> {`id`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"modal_box"`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"hidden"`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"overlay"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"modal"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`id`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"datepickerModal"`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`label`}</code>
		<code className={class_name}> {`for`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"modal_box"`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn"`}</code>
		<code className={mark}>{`>Cancel</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<code>// JavaScript</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`script`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={js_syntax}>{`  import`}</code>
		<code className={js_brackets}>{` { `}</code>
		<code className={js_name}>{`Datepicker`}</code>
		<code className={js_brackets}>{` }`}</code>
		<code className={js_syntax}>{` from`}</code>
		<code className={js_route}>{` 'vanillajs-datepicker'`}</code>
		<br/>
		<br/>
		<code className={js_syntax}>{`  const`}</code>
		<code className={js_var}>{` datepicker_modal`}</code>
		<code className={js_syntax}>{` = `}</code>
		<code className={js_var}>{`document`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`getElementById`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_route}>{`'datepickerModal'`}</code>
		<code className={js_syntax}>{`)`}</code>
		<br/>
		<br/>
		<code className={js_syntax}>{`  const`}</code>
		<code className={js_var}>{` datepicker`}</code>
		<code className={js_syntax}>{` = new `}</code>
		<code className={js_var}>{`Datepicker`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_var}>{`datepicker_modal`}</code>
		<code className={mark}>{`, `}</code>
		<code className={js_brackets}>{`{}`}</code>
		<code className={js_syntax}>{`)`}</code>
		<br/>
		<br/>
		<code className={js_var}>{`  datepicker_modal`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`addEventListener`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_route}>{`'changeDate'`}</code>
		<code className={mark}>{`, `}</code>
		<code className={js_syntax}>{`()`}</code>
		<code className={js_syntax}>{` => `}</code>
		<code className={js_brackets}>{`{`}</code>
		<br/>
		<code className={js_syntax}>{`    const`}</code>
		<code className={js_var}>{` datepicker_input`}</code>
		<code className={js_syntax}>{` = `}</code>
		<code className={js_var}>{`document`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`getElementById`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_route}>{`'datepickerModalDate'`}</code>
		<code className={js_syntax}>{`)`}</code>
		<br/>
		<code className={js_var}>{`    datepicker_input`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`value`}</code>
		<code className={js_syntax}>{` = `}</code>
		<code className={js_var}>{`datepicker`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`addEventListener`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_var}>{`datepicker`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`getDate`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_route}>{`'dd MM y'`}</code>
		<code className={js_syntax}>{`))`}</code>
		<br/>
		<code className={js_brackets}>{`  }`}</code>
		<code className={js_syntax}>{`)`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`script`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}