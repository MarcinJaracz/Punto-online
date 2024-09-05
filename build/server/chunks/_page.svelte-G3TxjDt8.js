import { c as create_ssr_component } from './ssr-spFMPcAK.js';

const css = {
  code: "img.svelte-bt8s0f{text-align:center !important;display:block !important;width:200px !important;height:200px !important;padding:0%;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2),\n			0 6px 20px 0 rgba(0, 0, 0, 0.19);border-radius:30px}.gray.svelte-bt8s0f{color:rgba(122, 122, 122, 0);-webkit-text-stroke:1px rgb(0, 0, 0);cursor:not-allowed}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\tlet activeGame = false\\n<\/script>\\n\\n<body>\\n\\t<div class=\\"container vh-100\\">\\n\\t\\t<div class=\\"d-flex justify-content-center align-items-center vh-100\\">\\n\\t\\t\\t<div class=\\"col-4\\">\\n\\t\\t\\t\\t<div class=\\"row justify-content-center\\">\\n\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\tsrc=\\"./Punto-Icon.png\\"\\n\\t\\t\\t\\t\\t\\talt=\\"Punto logo\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row justify-content-center\\">\\n\\t\\t\\t\\t\\t<h1 class=\\"text-center py-4\\">\\n\\t\\t\\t\\t\\t\\t<strong>Punto Online</strong>\\n\\t\\t\\t\\t\\t</h1>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row justify-content-center\\">\\n\\t\\t\\t\\t\\t<h3 class=\\"text-center\\">\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\thref=\\"/newgame\\"\\n\\t\\t\\t\\t\\t\\t\\tdata-sveltekit-preload-data=\\"tap\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tNew Game\\n\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row justify-content-center display-disabled\\">\\n\\t\\t\\t\\t\\t<h3\\n\\t\\t\\t\\t\\t\\tclass=\\"text-center\\"\\n\\t\\t\\t\\t\\t\\tclass:gray={!activeGame}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{#if activeGame}\\n\\t\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\t\\thref=\\"/continue\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tdata-sveltekit-preload-data=\\"tap\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\tContinue\\n\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<span>Continue</span>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row justify-content-center\\">\\n\\t\\t\\t\\t\\t<h3 class=\\"text-center\\">\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\thref=\\"/about\\"\\n\\t\\t\\t\\t\\t\\t\\tdata-sveltekit-preload-data=\\"tap\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tAbout\\n\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"row justify-content-center\\">\\n\\t\\t\\t\\t\\t<h3 class=\\"text-center\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"https://duckduckgo.com/\\"> Exit </a>\\n\\t\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</body>\\n\\n<style>\\n\\timg {\\n\\t\\ttext-align: center !important;\\n\\t\\tdisplay: block !important;\\n\\t\\twidth: 200px !important;\\n\\t\\theight: 200px !important;\\n\\t\\tpadding: 0%;\\n\\t\\tbox-shadow:\\n\\t\\t\\t0 4px 8px 0 rgba(0, 0, 0, 0.2),\\n\\t\\t\\t0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n\\t\\tborder-radius: 30px;\\n\\t}\\n\\t.gray {\\n\\t\\tcolor: rgba(122, 122, 122, 0);\\n\\t\\t-webkit-text-stroke: 1px rgb(0, 0, 0);\\n\\t\\tcursor: not-allowed;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmEC,iBAAI,CACH,UAAU,CAAE,MAAM,CAAC,UAAU,CAC7B,OAAO,CAAE,KAAK,CAAC,UAAU,CACzB,KAAK,CAAE,KAAK,CAAC,UAAU,CACvB,MAAM,CAAE,KAAK,CAAC,UAAU,CACxB,OAAO,CAAE,EAAE,CACX,UAAU,CACT,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC;AAClC,GAAG,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjC,aAAa,CAAE,IAChB,CACA,mBAAM,CACL,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAC7B,mBAAmB,CAAE,GAAG,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACrC,MAAM,CAAE,WACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body><div class="container vh-100"><div class="d-flex justify-content-center align-items-center vh-100"><div class="col-4"><div class="row justify-content-center" data-svelte-h="svelte-uq4vg7"><img src="./Punto-Icon.png" alt="Punto logo" class="svelte-bt8s0f"></div> <div class="row justify-content-center" data-svelte-h="svelte-dvhs3c"><h1 class="text-center py-4"><strong>Punto Online</strong></h1></div> <div class="row justify-content-center" data-svelte-h="svelte-1660vgk"><h3 class="text-center"><a href="/newgame" data-sveltekit-preload-data="tap">New Game</a></h3></div> <div class="row justify-content-center display-disabled"><h3 class="${["text-center svelte-bt8s0f", "gray"].join(" ").trim()}">${`<span data-svelte-h="svelte-1fjw2ub">Continue</span>`}</h3></div> <div class="row justify-content-center" data-svelte-h="svelte-36on8i"><h3 class="text-center"><a href="/about" data-sveltekit-preload-data="tap">About</a></h3></div> <div class="row justify-content-center" data-svelte-h="svelte-8sqe8o"><h3 class="text-center"><a href="https://duckduckgo.com/">Exit</a></h3></div></div></div></div> </body>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-G3TxjDt8.js.map
