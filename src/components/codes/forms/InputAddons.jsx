function Icon(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`svg`}</code>
		<br/>
		<code className={class_name}> {`   class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"w-7 fill-primary"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={class_name}> {`   xmlns`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"http://www.w3.org/2000/svg"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={class_name}> {`   view-box`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"0 0 24 24"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`path`}</code>
		<code className={class_name}> {`fill`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"none"`}</code>
		<code className={class_name}> {`d`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"..."`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`path`}</code>
		<code className={class_name}> {`d`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"..."`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`svg`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}


export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code>{`// Icon / input / button`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-group"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<pre className="pl-4"><>{ Icon(props) }</></pre>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"Instagram account"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`   class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` bg-primary border-primary text-white 
		   dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    Search`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>
		
		
		<code>{`// Input / icon`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-group"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"email address"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<pre className="pl-4"><>{ Icon(props) }</></pre>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>


		<code>{`// Input / icon / input`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-group"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"email address"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<pre className="pl-4"><>{ Icon(props) }</></pre>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"company name"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>.com</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>


		<code>{`// Group inset with icon`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-group-inset"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"Search for happiness"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<pre className="pl-4"><>{ Icon(props) }</></pre>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"company name"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>.com</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>


		<code>{`// Group inset, icon and button`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-group-inset"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<pre className="pl-4"><>{ Icon(props) }</></pre>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"BTC to USD"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`   class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` bg-primary border-primary text-white 
		   dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    Calculate`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}