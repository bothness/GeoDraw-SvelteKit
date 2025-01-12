var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => EditButtons
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../../../chunks/index-0029e4b6.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_2747ef20 = require("../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-2747ef20.js");
var import_Button_a63d0e2e = require("../../../../chunks/Button-a63d0e2e.js");
var import_ButtonSet_fcab3a17 = require("../../../../chunks/ButtonSet-fcab3a17.js");
var import_flatpickr = require("flatpickr");
var import_mapstore = require("../../../endpoints/draw/mapstore.js");
var import_index_7e61ccad = require("../../../../chunks/index-7e61ccad.js");
var EditButtons_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\nsvg.svelte-xz9lei path.svelte-xz9lei{\n  fill:rgb(255, 255, 255)\n}\n\n/* purgecss end ignore */")();
const css = {
  code: "svg.svelte-xz9lei path.svelte-xz9lei{fill:rgb(255, 255, 255)}",
  map: null
};
const EditButtons = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_add_mode;
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_add_mode = (0, import_index_0029e4b6.b)(import_mapstore.add_mode, (value) => value);
  $$unsubscribe_selected = (0, import_index_0029e4b6.b)(import_mapstore.selected, (value) => $selected = value);
  let { disabled = "false" } = $$props;
  let { fill = true } = $$props;
  function init() {
    import_mapstore.draw_type.subscribe((e) => {
      disabled = e === "click";
    });
  }
  (0, import_index_0029e4b6.u)(init);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  $$result.css.add(css);
  $$unsubscribe_add_mode();
  $$unsubscribe_selected();
  return `${(0, import_index_0029e4b6.v)(import_ButtonSet_fcab3a17.B, "ButtonSet").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
        style: "margin-left:0px;width:auto",
        disabled,
        class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
      }, {}, {
        default: () => {
          return `${fill ? `<span class="${"bx--assistive-text"}">Additive Selection</span>
            <svg width="${"24"}" height="${"24"}" viewBox="${"0 0 36 36"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-xz9lei"}"><path d="${"m34.7925 38.8834 4.3438-4.3438c.3187-.3187.8637-.093.8637.3577v4.3438c0 .2794-.2265.5059-.506.5059h-4.3437c-.4508 0-.6765-.5449-.3578-.8636ZM17.7889 27.2885c.4179 0 .7635-.1366 1.0368-.4098.2732-.2733.4099-.6189.4099-1.0368v-6.5581h6.6545c.3858 0 .7153-.1366.9886-.4099.2732-.2732.4098-.6188.4098-1.0367 0-.418-.1366-.7636-.4098-1.0368-.2733-.2733-.6189-.4099-1.0368-.4099h-6.6063V9.39842c0-.38577-.1367-.71528-.4099-.98854C18.5524 8.13663 18.2068 8 17.7889 8c-.4179 0-.7635.13663-1.0367.40988-.2733.27326-.4099.61884-.4099 1.03676v6.94386H9.39842c-.38577 0-.71528.1366-.98854.4099C8.13663 17.0736 8 17.4192 8 17.8372c0 .4179.13663.7635.40988 1.0367.27326.2733.61884.4099 1.03676.4099h6.89566v6.6063c0 .3858.1366.7153.4099.9886.2732.2732.6188.4098 1.0367.4098Z"}" class="${"svelte-xz9lei"}"></path></svg>` : `<span class="${"bx--assistive-text"}">Subtractive Selection</span>
            <svg width="${"24"}" height="${"24"}" viewBox="${"0 0 36 36"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-xz9lei"}"><path d="${"m34.7925 34.7884 4.3438-4.3438c.3187-.3187.8637-.093.8637.3578v4.3437c0 .2795-.2265.506-.506.506h-4.3437c-.4508 0-.6765-.545-.3578-.8637ZM9.44664 14.8933H25.8901c.3858 0 .7153-.1447.9885-.434.2733-.2893.4099-.6269.4099-1.0127 0-.4179-.1366-.7635-.4099-1.0367-.2732-.2733-.6188-.4099-1.0367-.4099H9.39842c-.38577 0-.71528.1447-.98854.434C8.13663 12.7233 8 13.0609 8 13.4466c0 .418.13663.7635.40988 1.0368.27326.2733.61884.4099 1.03676.4099Z"}" class="${"svelte-xz9lei"}"></path></svg>`}`;
        }
      })}

        ${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
        disabled: $selected.length < 2,
        style: "margin-left:0px",
        class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
      }, {}, {
        default: () => {
          return `<span class="${"bx--assistive-text"}">Undo</span>
          <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" version="${"1.1"}" id="${"mdi-undo-variant"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"svelte-xz9lei"}"><path d="${"M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z"}" class="${"svelte-xz9lei"}"></path></svg>`;
        }
      })}`;
    }
  })}`;
});
