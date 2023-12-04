import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_CollapsibleClosable = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="grid gap-6 mt-6 md:grid-cols-2">
  <div class="grid content-start gap-4">
    <div>
      <div class="collapsible">
        <input type="checkbox" name="collapseOnebyOne" id="tab1">
        <label class="collapsible-head text-sm" for="tab1">
          <span>What is your app about?</span>
        </label>
        <div class="collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
          <p class="p-5">...</p>
        </div>
      </div>
    </div>
    <div>
      <div class="collapsible">
        <input type="checkbox" name="collapseOnebyOne" id="tab2">
        <label class="collapsible-head text-sm" for="tab2">
          <span>How does your app work?</span>
        </label>
        <div class="collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
          <p class="p-5">...</p>
          <p class="p-5">...</p>
          <p class="p-5">...</p>
        </div>
      </div>
    </div>
    <div>
      <div class="collapsible">
        <input type="checkbox" name="collapseOnebyOne" id="tab3>
        <label class="collapsible-head text-sm" for="tab3">
          <span>Is your app free to use?</span>
        </label>
      <div class="collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
        <p class="p-5">...</p>
      </div>
    </div>
  </div>


  <div class="grid content-start gap-4">
    <div>
      <div class="collapsible">
        <input type="checkbox" name="collapseOnebyOne" id="tab4">
        <label class="collapsible-head text-sm" for="tab4">
          <span>What are the features of your app?</span>
        </label>
        <div class="collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
          <p class="p-5">...</p>
          <p class="p-5">...</p>
          <p class="p-5">...</p>
        </div>
      </div>
    </div>
    <div>
      <div class="collapsible">
        <input id="tab5" type="checkbox" name="collapseOnebyOne">
        <label class="collapsible-head text-sm" for="tab5">
          <span>How do I download and install your app?</span>
        </label>
        <div class="collapsible-content scrollbar scrollbar-thumb-slate-400   scrollbar-track-slate-100">
          <p class="p-5">...</p>
        </div>
      </div>
    </div>
    <div>
      <div class="collapsible">
        <input id="tab6" type="checkbox" name="collapseOnebyOne">
        <label class="collapsible-head text-sm" for="tab6">
          <span>What devices is your app compatible with?</span>
        </label>
        <div class="collapsible-content scrollbar scrollbar-thumb-slate-400   scrollbar-track-slate-100">
        <p class="p-5">...</p>
      </div>
    </div>
  </div>
</div>`}
		</div>
	)

}