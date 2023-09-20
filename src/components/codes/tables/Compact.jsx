export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"w-full overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`table`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"table table-bordered table-compact"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		{/* Thead */}
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`thead`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`      <`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`th`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Package`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`th`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`th`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Invoice date`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`th`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`th`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Status`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`th`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`th`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"text-end"`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Actions`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`th`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`      </`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    </`}</code>
		<code className={tag}>{`thead`}</code>
		<code className={mark}>{`>`}</code>
		<br/>


		{/* Tbody */}
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`tbody`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		
		{/* row 1 */}
		<code className={mark}>{`      <`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"font-semibold block"`}</code>
		<code className={mark}>{`>Free package</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>$287</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>Jan. 13, 2023</`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"badge bg-green-600 border-green-600"`}</code>
		<code className={mark}>{`>paid</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"text-end"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`            <`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`            class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"btn bg-primary border-primary text-white 
		            dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>Edit</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`      </`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		{/* row 2 */}
		<code className={mark}>{`      <`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"font-semibold block"`}</code>
		<code className={mark}>{`>Standard package</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>$530</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>Mar. 4, 2023</`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"badge bg-green-600 border-green-600"`}</code>
		<code className={mark}>{`>paid</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"text-end"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`            <`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`            class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"btn bg-primary border-primary text-white 
		            dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>Edit</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`      </`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		{/* row 3 */}
		<code className={mark}>{`      <`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"font-semibold block"`}</code>
		<code className={mark}>{`>Business package</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>$122</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>Jun. 22, 2023</`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"badge bg-red-700 border-red-700"`}</code>
		<code className={mark}>{`>unpaid</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"text-end"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`            <`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`            class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"btn bg-primary border-primary text-white 
		            dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>Edit</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`      </`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		{/* row 4*/}
		<code className={mark}>{`      <`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"font-semibold block"`}</code>
		<code className={mark}>{`>Basic package</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>$890</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>Nov. 28, 2023</`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"badge bg-yellow-600 border-yellow-600"`}</code>
		<code className={mark}>{`>pending</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`        <`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"text-end"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`            <`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`            class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"btn bg-primary border-primary text-white 
		            dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>Edit</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`          </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`        </`}</code>
		<code className={tag}>{`td`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`      </`}</code>
		<code className={tag}>{`tr`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`    </`}</code>
		<code className={tag}>{`tbody`}</code>
		<code className={mark}>{`>`}</code>
		<br/>

		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`table`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}