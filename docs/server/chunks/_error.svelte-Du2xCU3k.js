import { c as create_ssr_component, a as subscribe, v as validate_component, g as getContext } from './ssr-spFMPcAK.js';
import './client-BUusD8wq.js';
import { R as Return } from './return-B8xN7Q2a.js';
import { e as escape } from './escape-CEcUr6mr.js';
import './exports-BGi7-Rnc.js';

const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: ".error-frame.svelte-1w9r1gg{text-align:center;padding:10px;border-image:linear-gradient(to right, #3acfd5 0%, #3ad544 100%) 1;border-radius:15px;border-width:4px;border-style:solid;background-color:rgba(255, 255, 255, 0.5)}",
  map: '{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script>\\n\\timport { page } from \\"$app/stores\\"\\n\\timport Return from \\"$components/return.svelte\\"\\n<\/script>\\n\\n<div class=\\"conteiner vh-100\\">\\n\\t<div class=\\"d-flex justify-content-center align-items-center h-100\\">\\n\\t\\t<div class=\\"col-2\\">\\n\\t\\t\\t<div class=\\"row justify-content-center\\">\\n\\t\\t\\t\\t<div class=\\"error-frame\\">\\n\\t\\t\\t\\t\\t{#if $page.error}\\n\\t\\t\\t\\t\\t\\t<h1>{$page.status}<br />Sorry, Page<br /> {$page.error.message}</h1>\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t<h1>Unknown error</h1>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"row justify-content-center\\">\\n\\t\\t\\t\\t<Return />\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.error-frame {\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 10px;\\n\\t\\tborder-image: linear-gradient(to right, #3acfd5 0%, #3ad544 100%) 1;\\n\\t\\tborder-radius: 15px;\\n\\t\\tborder-width: 4px;\\n\\t\\tborder-style: solid;\\n\\t\\tbackground-color: rgba(255, 255, 255, 0.5);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyBC,2BAAa,CACZ,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,CACnE,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,GAAG,CACjB,YAAY,CAAE,KAAK,CACnB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC1C"}'
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="conteiner vh-100"><div class="d-flex justify-content-center align-items-center h-100"><div class="col-2"><div class="row justify-content-center"><div class="error-frame svelte-1w9r1gg">${$page.error ? `<h1>${escape($page.status)}<br>Sorry, Page<br> ${escape($page.error.message)}</h1>` : `<h1 data-svelte-h="svelte-14edej2">Unknown error</h1>`}</div></div> <div class="row justify-content-center">${validate_component(Return, "Return").$$render($$result, {}, {}, {})}</div></div></div> </div>`;
});

export { Error$1 as default };
//# sourceMappingURL=_error.svelte-Du2xCU3k.js.map
