import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_TableBasic = (props) => {
	
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="w-full overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
  <table class="table">
    <thead>
      <tr>
        <th>
          <div>Package</div>
        </th>
        <th>
          <div>Invoice date</div>
        </th>
        <th>
          <div>Status</div>
        </th>
        <th>
          <div class="text-end">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <span class="font-semibold block">Free package</span>
          <span>$287</span>
        </td>
        <td>Jan. 13, 2023</td>
        <td>
          <span class="badge bg-green-600 border-green-600">paid</span>
        </td>
        <td>
          <div class="text-end">
            <button
              class="btn btn-sm bg-primary border-primary text-white 
                     dark:bg-primary dark:border-primary dark:text-white">
              Edit
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <span class="font-semibold block">Standard package</span>
          <span>$530</span>
        </td>
        <td>Mar. 4, 2023</td>
        <td>
          <span class="badge bg-green-600 border-green-600">paid</span>
        </td>
        <td>
          <div class="text-end">
            <button
              class="btn btn-sm bg-primary border-primary text-white 
                     dark:bg-primary dark:border-primary dark:text-white">
              Edit
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <span class="font-semibold block">Business package</span>
          <span>$122</span>
        </td>
        <td>Jun. 22, 2023</td>
        <td>
          <span class="badge bg-red-700 border-red-700">unpaid</span>
        </td>
        <td>
          <div class="text-end">
            <button
              class="btn btn-sm bg-primary border-primary text-white 
                     dark:bg-primary dark:border-primary dark:text-white">
              Edit
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <span class="font-semibold block">Basic package</span>
          <span>$890</span>
        </td>
        <td>Nov. 28, 2023</td>
        <td>
          <span class="badge bg-yellow-600 border-yellow-600">pending</span>
        </td>
        <td>
          <div class="text-end">
            <button
              class="btn btn-sm bg-primary border-primary text-white 
                     dark:bg-primary dark:border-primary dark:text-white">
              Edit
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>`}
		</div>
	)

}