export const Code_DatepickerInline = ({classes}) => {
	const {mark, tag, class_name, equal, class_list, js_syntax, js_name, js_var, js_route, js_brackets} = classes

	return (
	<>
		<code>// Html</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`id`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"datepicker"`}</code>
		<code className={mark}>{`/>`}</code>
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
		<code className={js_var}>{` inline_datepicker`}</code>
		<code className={js_syntax}>{` = `}</code>
		<code className={js_var}>{`document`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`getElementById`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_route}>{`'datepickerInline'`}</code>
		<code className={js_syntax}>{`)`}</code>
		<br/>
		<br/>
		<code className={js_syntax}>{`  const`}</code>
		<code className={js_var}>{` datepicker`}</code>
		<code className={js_syntax}>{` = new `}</code>
		<code className={js_var}>{`Datepicker`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_var}>{`inline_datepicker`}</code>
		<code className={mark}>{`, `}</code>
		<code className={js_brackets}>{`{}`}</code>
		<code className={js_syntax}>{`)`}</code>
		<br/>
		<br/>
		<code className={js_var}>{`  inline_datepicker`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`addEventListener`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_route}>{`'changeDate'`}</code>
		<code className={mark}>{`, `}</code>
		<code className={js_syntax}>{`()`}</code>
		<code className={js_syntax}>{` => `}</code>
		<code className={js_brackets}>{`{`}</code>
		<br/>
		<code className={js_var}>{`    console`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`log`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_var}>{`datepicker`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`addEventListener`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_var}>{`datepicker`}</code>
		<code className={mark}>{`.`}</code>
		<code className={js_syntax}>{`getDate`}</code>
		<code className={js_syntax}>{`(`}</code>
		<code className={js_route}>{`'dd MM y'`}</code>
		<code className={js_syntax}>{`)))`}</code>
		<br/>
		<code className={js_brackets}>{`  }`}</code>
		<code className={js_syntax}>{`)`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`script`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}