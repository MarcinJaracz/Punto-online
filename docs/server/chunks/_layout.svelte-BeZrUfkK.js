import { c as create_ssr_component } from './ssr-spFMPcAK.js';
import './client-BUusD8wq.js';
import './exports-BGi7-Rnc.js';

const css = {
  code: 'body{width:100%;height:100%;display:grid;background-image:url("/background.jpg");background-color:rgba(255, 255, 255, 0.4) !important;background-repeat:no-repeat !important;background-attachment:fixed !important;background-size:cover !important;background-blend-mode:lighten !important}a{color:inherit !important;text-decoration:inherit !important}html body a{color:inherit !important;text-decoration:inherit !important}',
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\t/** @type {import('./$types').LayoutData} */\\n\\timport \\"bootstrap/dist/css/bootstrap.min.css\\"\\n\\timport { afterNavigate } from \\"$app/navigation\\"\\n\\n\\tafterNavigate(() => {\\n\\t\\tconsole.log(\\"Aktualna ścieżka:\\", window.location.pathname)\\n\\t})\\n<\/script>\\n\\n<main>\\n\\t<slot />\\n</main>\\n\\n<svelte:head>\\n\\t<link\\n\\t\\thref=\\"/font-awesome/css/all.min.css\\"\\n\\t\\trel=\\"stylesheet\\"\\n\\t/>\\n\\t<link\\n\\t\\thref=\\"/font-awesome/css/fontawesome.min.css\\"\\n\\t\\trel=\\"stylesheet\\"\\n\\t/>\\n</svelte:head>\\n\\n<style>\\n\\t:global(body) {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tdisplay: grid;\\n\\t\\tbackground-image: url(\\"/background.jpg\\");\\n\\t\\tbackground-color: rgba(255, 255, 255, 0.4) !important;\\n\\t\\tbackground-repeat: no-repeat !important;\\n\\t\\tbackground-attachment: fixed !important;\\n\\t\\tbackground-size: cover !important;\\n\\t\\tbackground-blend-mode: lighten !important;\\n\\t}\\n\\t:global(a) {\\n\\t\\tcolor: inherit !important;\\n\\t\\ttext-decoration: inherit !important;\\n\\t}\\n\\t:global(html body a) {\\n\\t\\tcolor: inherit !important;\\n\\t\\ttext-decoration: inherit !important;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0BS,IAAM,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,sBAAsB,CACxC,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACrD,iBAAiB,CAAE,SAAS,CAAC,UAAU,CACvC,qBAAqB,CAAE,KAAK,CAAC,UAAU,CACvC,eAAe,CAAE,KAAK,CAAC,UAAU,CACjC,qBAAqB,CAAE,OAAO,CAAC,UAChC,CACQ,CAAG,CACV,KAAK,CAAE,OAAO,CAAC,UAAU,CACzB,eAAe,CAAE,OAAO,CAAC,UAC1B,CACQ,WAAa,CACpB,KAAK,CAAE,OAAO,CAAC,UAAU,CACzB,eAAe,CAAE,OAAO,CAAC,UAC1B"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${slots.default ? slots.default({}) : ``}</main> ${$$result.head += `<!-- HEAD_svelte-72k31_START --><link href="/font-awesome/css/all.min.css" rel="stylesheet"><link href="/font-awesome/css/fontawesome.min.css" rel="stylesheet"><!-- HEAD_svelte-72k31_END -->`, ""}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BeZrUfkK.js.map
