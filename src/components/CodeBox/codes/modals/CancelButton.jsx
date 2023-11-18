export const Code_ModalCancelButton = () => {
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code>// Button to open the modal box</code>
		<br/>

		<code className={mark}>{`<`}</code>
		<code className={tag}>{`label`}</code>
		<br/>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"btn bg-primary border-primary text-white"`}</code>
		<br/>
		<code className={class_name}> {`for`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"modal_box"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  Open modal`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>

		<code>// Modal checkbox. This is necessary for the functionality of the modal box</code>
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
		<code className={mark}>{` />`}</code>
		<br/>
		<br/>
		<br/>
		
		<code>// Modal box</code>
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
		<code className={class_list}>{`"modal`}</code>
		<code className={class_list_secondary}>{` max-w-md space-y-3 p-5"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`      <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"flex justify-end"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`label`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"btn btn-link"`}</code>
		<code className={class_name}> {`for`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"modal_box"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`i`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"ri-close-line"`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`      </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code>{`      Hi there!`}</code>
		<br/>
		<code>{`      I'm the modal box content`}</code>
		<br/>
		<code className={mark}>{`      <`}</code>
		<code className={tag}>{`label`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` w-full"`}</code>
		<code className={class_name}> {`for`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"modal_box"`}</code>
		<code className={mark}>{`>Close modal</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}