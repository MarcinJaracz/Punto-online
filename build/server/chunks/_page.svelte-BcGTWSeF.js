import { c as create_ssr_component, a as subscribe, v as validate_component } from './ssr-spFMPcAK.js';
import { R as Return } from './return-B8xN7Q2a.js';
import { w as writable } from './index-9RYkNPoS.js';
import { e as escape } from './escape-CEcUr6mr.js';

const cardGoal = writable(4);
const noPlayers = writable(2);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $noPlayers, $$unsubscribe_noPlayers;
  let $cardGoal, $$unsubscribe_cardGoal;
  $$unsubscribe_noPlayers = subscribe(noPlayers, (value) => $noPlayers = value);
  $$unsubscribe_cardGoal = subscribe(cardGoal, (value) => $cardGoal = value);
  $$unsubscribe_noPlayers();
  $$unsubscribe_cardGoal();
  return `${$$result.head += `<!-- HEAD_svelte-1mlai1k_START -->${$$result.title = `<title>Board</title>`, ""}<!-- HEAD_svelte-1mlai1k_END -->`, ""}  <body><div class="container vh-100"><div class="d-flex justify-content-center align-items-center vh-100"><div class="col-3 text-center"><div class="bg-primary p-1 fs-3 text-white rounded">no. players: ${escape($noPlayers)}<br>
					cards to win: ${escape($cardGoal)}</div> ${validate_component(Return, "Return").$$render($$result, {}, {}, {})}</div></div></div></body>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BcGTWSeF.js.map
