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
  default: () => Old_layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../../chunks/index-0029e4b6.js");
var import_HeaderSearch_svelte_svelte_type_style_lang_2747ef20 = require("../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-2747ef20.js");
var import_Button_a63d0e2e = require("../../../chunks/Button-a63d0e2e.js");
var import_flatpickr = require("flatpickr");
var import_Column_dcda07a5 = require("../../../chunks/Column-dcda07a5.js");
var import_index_7e61ccad = require("../../../chunks/index-7e61ccad.js");
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const Grid = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let props;
  let $$restProps = (0, import_index_0029e4b6.l)($$props, [
    "as",
    "condensed",
    "narrow",
    "fullWidth",
    "noGutter",
    "noGutterLeft",
    "noGutterRight",
    "padding"
  ]);
  let { as = false } = $$props;
  let { condensed = false } = $$props;
  let { narrow = false } = $$props;
  let { fullWidth = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.condensed === void 0 && $$bindings.condensed && condensed !== void 0)
    $$bindings.condensed(condensed);
  if ($$props.narrow === void 0 && $$bindings.narrow && narrow !== void 0)
    $$bindings.narrow(narrow);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.noGutter === void 0 && $$bindings.noGutter && noGutter !== void 0)
    $$bindings.noGutter(noGutter);
  if ($$props.noGutterLeft === void 0 && $$bindings.noGutterLeft && noGutterLeft !== void 0)
    $$bindings.noGutterLeft(noGutterLeft);
  if ($$props.noGutterRight === void 0 && $$bindings.noGutterRight && noGutterRight !== void 0)
    $$bindings.noGutterRight(noGutterRight);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  props = __spreadProps(__spreadValues({}, $$restProps), {
    class: [
      $$restProps.class,
      "bx--grid",
      condensed && "bx--grid--condensed",
      narrow && "bx--grid--narrow",
      fullWidth && "bx--grid--full-width",
      noGutter && "bx--no-gutter",
      noGutterLeft && "bx--no-gutter--left",
      noGutterRight && "bx--no-gutter--right",
      padding && "bx--row-padding"
    ].filter(Boolean).join(" ")
  });
  return `${as ? `${slots.default ? slots.default({ props }) : ``}` : `<div${(0, import_index_0029e4b6.o)([(0, import_index_0029e4b6.q)(props)], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
var old_layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "/* purgecss start ignore */\n\n:root{\n  --header-2-height:clamp(2rem,4vh,60px);\n  --header-1-height:clamp(1rem,5vh,40px)\n}\n\n.icon{\n  border:2px solid rgb(89, 89, 89);\n  aspect-ratio:1/1;\n  height:auto;\n  width:var(--header-2-height)!important\n}\n\nheader.svelte-1mbzvnp{\n  display:block;\n  position:fixed;\n  width:100vw;\n  margin:0!important\n}\n\n.bx--grid{\n  left:0;\n  right:0;\n  margin-left:0;\n  margin-right:0px;\n  padding-left:0px;\n  padding-right:0px;\n  width:100vw\n}\n\n#head1{\n  width:100vw;\n  height:var(--header-1-height)!important;\n  background-color:whitesmoke;\n  margin:0\n}\n\n#head2{\n  width:100vw;\n  height:var(--header-2-height)!important;\n  background-color:#323132\n        ;\n  margin:0\n}\n\n.logo.svelte-1mbzvnp{\n  height:calc(var(--header-1-height)*.8)!important;\n  width:auto\n}\n\n.bx--col{\n  padding:0!important;\n  display:flex;\n  flex-grow:5!important\n}\n\n/* purgecss end ignore */")();
const css = {
  code: ":root{--header-2-height:clamp(2rem,4vh,60px);--header-1-height:clamp(1rem,5vh,40px)}.icon{border:2px solid rgb(89, 89, 89);aspect-ratio:1/1;height:auto;width:var(--header-2-height)!important}header.svelte-1mbzvnp{display:block;position:fixed;width:100vw;margin:0!important}.bx--grid{left:0;right:0;margin-left:0;margin-right:0px;padding-left:0px;padding-right:0px;width:100vw}#head1{width:100vw;height:var(--header-1-height)!important;background-color:whitesmoke;margin:0}#head2{width:100vw;height:var(--header-2-height)!important;background-color:#323132\n        ;margin:0}.logo.svelte-1mbzvnp{height:calc(var(--header-1-height)*.8)!important;width:auto}.bx--col{padding:0!important;display:flex;flex-grow:5!important}",
  map: null
};
const Old_layout = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"w-screen min-h-screen flex flex-col"}"><header class="${"svelte-1mbzvnp"}">${(0, import_index_0029e4b6.v)(Grid, "Grid").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.R, "Row").$$render($$result, { id: "head1" }, {}, {
        default: () => {
          return `${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `<img style="${"margin-left:10px;margin-top:4px"}" class="${"logo svelte-1mbzvnp"}" src="${"https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"}" alt="${"Office for National Statistics logo - Homepage"}">`;
            }
          })}`;
        }
      })}
        ${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.R, "Row").$$render($$result, { id: "head2" }, {}, {
        default: () => {
          return `${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `
            ${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
                style: "margin-left:0px",
                class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
              }, {}, {
                default: () => {
                  return `<span class="${"bx--assistive-text"}">Draw Polygon</span>
            <svg focusable="${"false"}" preserveAspectRatio="${"xMidYMid meet"}" style="${"will-change: transform; width:95%;height:95%"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--btn__icon"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path d="${"m17 15.7v-2.7h2v4l-9 4-7-7 4-9h4v2h-2.7l-2.9 6.6 5 5zm5-10.7v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"}"></path></svg>`;
                }
              })}            
 
          ${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
                class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
              }, {}, {
                default: () => {
                  return `<span class="${"bx--assistive-text"}">Select a Radius</span>
          <svg focusable="${"false"}" preserveAspectRatio="${"xMidYMid meet"}" style="${"will-change: transform;width:95%;height:95%"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--btn__icon"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path d="${"m12 2a10 10 0 0 0 -10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0 -10-10m0 18a8 8 0 0 1 -8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1 -8 8m4-5v-2h-2.28c-.36.62-1.01 1-1.72 1a2 2 0 0 1 -2-2 2 2 0 0 1 2-2c.71 0 1.36.38 1.72 1h2.28v-2l3 3z"}"></path></svg>`;
                }
              })}     
        
        
        ${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
                class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
              }, {}, {
                default: () => {
                  return `<span class="${"bx--assistive-text"}">Click Select</span>
        <svg focusable="${"false"}" preserveAspectRatio="${"xMidYMid meet"}" style="${"will-change: transform;width:95%;height:95%"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--btn__icon"}" viewBox="${"2 4 19 14"}" aria-hidden="${"true"}"><path d="${"m18.2848192 17.5777124 2.5687342 2.5687342c.1952621.1952622.1952621.5118446 0 .7071068-.1952622.1952621-.5118446.1952621-.7071068 0l-2.5687342-2.5687342-1.6616873 2.4925309c-.2260679.3391019-.7410894.2798123-.8841897-.1017884l-3-8c-.1507287-.4019432.2417831-.794455.6437263-.6437263l8 3c.3816007.1431003.4408903.6581218.1017884.8841897zm-1.0535788-.4994645 2.1792312-1.4528208-6.0560712-2.2710267 2.2710267 6.0560712 1.4528208-2.1792312c.0191996-.0300662.0419325-.0585276.0681987-.0847938s.0547276-.0489991.0847938-.0681987zm-11.7312404-14.0782479c.27614237 0 .5.22385763.5.5s-.22385763.5-.5.5c-.82842712 0-1.5.67157288-1.5 1.5 0 .27614237-.22385763.5-.5.5s-.5-.22385763-.5-.5c0-1.38071187 1.11928813-2.5 2.5-2.5zm3 1c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm-5 17c-.27614237 0-.5-.2238576-.5-.5s.22385763-.5.5-.5h2c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5zm-5.5-12.5c0-.27614237.22385763-.5.5-.5s.5.22385763.5.5v2c0 .2761424-.22385763.5-.5.5s-.5-.2238576-.5-.5zm0 5c0-.2761424.22385763-.5.5-.5s.5.2238576.5.5v2c0 .2761424-.22385763.5-.5.5s-.5-.2238576-.5-.5zm0 5c0-.2761424.22385763-.5.5-.5s.5.2238576.5.5c0 .8284271.67157288 1.5 1.5 1.5.27614237 0 .5.2238576.5.5s-.22385763.5-.5.5c-1.38071187 0-2.5-1.1192881-2.5-2.5zm18-8c0 .2761424-.2238576.5-.5.5s-.5-.2238576-.5-.5v-2c0-.27614237.2238576-.5.5-.5s.5.22385763.5.5zm0-5c0 .27614237-.2238576.5-.5.5s-.5-.22385763-.5-.5c0-.82842712-.6715729-1.5-1.5-1.5-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5c1.3807119 0 2.5 1.11928813 2.5 2.5z"}"></path></svg>`;
                }
              })}`;
            }
          })}
      \u2226

${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
                style: "margin-left:0px",
                class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
              }, {}, {
                default: () => {
                  return `${`<span class="${"bx--assistive-text"}">Additive Selection</span>
    <svg focusable="${"false"}" preserveAspectRatio="${"xMidYMid meet"}" style="${"will-change: transform; width:95%;height:95%"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--btn__icon"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path d="${"m3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v4c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2v-11c0-1.11-.89-2-2-2-1.33 0-4 0-4 0s0-2.67 0-4c0-1.11-.89-2-2-2zm0 2h11v4h-5c-1.11 0-2 .89-2 2v5s-2.67 0-4 0zm6 6h5v5h-5zm7 0h4v11h-11c0-1.33 0-4 0-4h5c1.11 0 2-.89 2-2z"}"></path></svg>`}`;
                }
              })}  

    ${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
                style: "margin-left:0px",
                class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
              }, {}, {
                default: () => {
                  return `<span class="${"bx--assistive-text"}">Undo</span>
    <svg focusable="${"false"}" preserveAspectRatio="${"xMidYMid meet"}" style="${"will-change: transform; width:95%;height:95%"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--btn__icon"}" viewBox="${"5 5 35 35"}" aria-hidden="${"true"}"><path d="${"m25 38c-5.1 0-9.7-3-11.8-7.6l1.8-.8c1.8 3.9 5.7 6.4 10 6.4 6.1 0 11-4.9 11-11s-4.9-11-11-11c-4.6 0-8.5 2.8-10.1 7.3l-1.9-.7c1.9-5.2 6.6-8.6 12-8.6 7.2 0 13 5.8 13 13s-5.8 13-13 13z"}"></path><path d="${"m20 22h-8v-8h2v6h6z"}"></path></svg>`;
                }
              })}`;
            }
          })}

${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.C, "Column").$$render($$result, { style: "flex-grow:0!important;" }, {}, {
            default: () => {
              return `${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
                style: "margin-left:0px",
                class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
              }, {}, {
                default: () => {
                  return `<span class="${"bx--assistive-text"}">Save and Build</span>
      <svg focusable="${"false"}" preserveAspectRatio="${"xMidYMid meet"}" style="${"will-change: transform; width:95%;height:95%"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--btn__icon"}" viewBox="${"0 0 16 16"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M11.04 1.33L12.71 3l.29.71v.33h-.5l-.5.5v-.83l-1.67-1.67H10v4H4v-4H2v10h3l-.5 1H2l-1-1v-10l1-1h8.33l.71.29zM7 5h2V2H7v3zm6.5 0L15 6.5l-.02.69-5.5 5.5-.13.12-.37.37-.1.09-3 1.5-.67-.67 1.5-3 .09-.1.37-.37.12-.13 5.5-5.5h.71zm-6.22 7.24l-.52 1 1.04-.48-.52-.52zm.69-1.03l.79.79 5.15-5.15-.79-.79-5.15 5.15z"}"></path></svg>`;
                }
              })}     
    
    ${(0, import_index_0029e4b6.v)(import_Button_a63d0e2e.B, "Button").$$render($$result, {
                style: "margin-left:0px",
                class: "bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon"
              }, {}, {
                default: () => {
                  return `<span class="${"bx--assistive-text"}">Explore Existing Selections</span>
      <svg focusable="${"false"}" preserveAspectRatio="${"xMidYMid meet"}" style="${"will-change: transform; width:95%;height:95%"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"bx--btn__icon"}" viewBox="${"0 0 31 31"}" aria-hidden="${"true"}"><path d="${"m9.002 31.36c-2.404 0-4.36-1.956-4.36-4.36s1.956-4.36 4.36-4.36c.731 0 1.42.182 2.026.5l2.125-3.338.607.387-2.125 3.339c1.048.797 1.727 2.057 1.727 3.473 0 2.403-1.955 4.359-4.36 4.359zm0-8c-2.007 0-3.64 1.633-3.64 3.64s1.633 3.64 3.64 3.64 3.64-1.633 3.64-3.64-1.632-3.64-3.64-3.64zm7 7.995c-.861 0-1.722-.071-2.557-.212l.119-.711c.796.135 1.617.202 2.438.202 4.648 0 8.917-2.134 11.712-5.854l.576.432c-2.932 3.904-7.411 6.143-12.288 6.143zm14.998-6.495c-.062 0-.126-.017-.182-.05l-5.995-3.505c-.11-.064-.179-.183-.179-.311s.068-.246.179-.311l5.995-3.495c.113-.065.249-.065.361-.002.111.064.181.184.181.312v7c0 .129-.069.248-.182.312-.054.034-.116.05-.178.05zm-5.281-3.865 4.921 2.877v-5.745zm-22.374 3.704c-.554-.803-1.034-1.665-1.425-2.56l.66-.289c.373.854.829 1.675 1.357 2.44zm-.219-4.222c-.092 0-.184-.035-.254-.105l-2.126-2.116c-.068-.068-.106-.16-.106-.256 0-.095.038-.187.105-.255l2.126-2.125c.141-.141.368-.141.509 0l2.122 2.121c.068.067.105.159.105.255s-.037.187-.105.254l-2.122 2.121c-.07.07-.162.106-.254.106zm-1.616-2.478 1.616 1.608 1.613-1.612-1.612-1.612zm7.251 2.177c-.732-1.266-1.119-2.711-1.119-4.181 0-3.819 2.58-7.149 6.274-8.098l.179.697c-3.375.867-5.733 3.91-5.733 7.4 0 1.343.354 2.664 1.022 3.819zm7.241-.821c-1.853 0-3.36-1.508-3.36-3.36 0-1.732 1.317-3.162 3.002-3.341v-5.659h.72v5.659c1.683.182 2.998 1.61 2.998 3.341 0 1.853-1.508 3.36-3.36 3.36zm0-6c-1.456 0-2.64 1.185-2.64 2.64 0 1.456 1.185 2.64 2.64 2.64s2.639-1.184 2.639-2.64c.001-1.455-1.183-2.64-2.639-2.64zm14.639 1.664c-.432-6.56-5.246-12.057-11.707-13.37l.143-.706c6.779 1.377 11.83 7.146 12.283 14.029zm-6.636-.664c-.062 0-.124-.016-.18-.048l-2.599-1.5c-.111-.064-.181-.184-.181-.312v-3c0-.128.069-.248.181-.312l2.599-1.5c.111-.063.248-.064.359 0l2.598 1.5c.111.064.181.183.181.312v3c0 .128-.069.248-.181.312l-2.598 1.5c-.055.032-.117.048-.179.048zm-2.238-2.068 2.238 1.292 2.237-1.292v-2.584l-2.237-1.292-2.238 1.292zm-5.769-7.927c-1.024 0-1.857-.836-1.857-1.865 0-1.023.833-1.855 1.857-1.855 1.027 0 1.863.832 1.863 1.855-.001 1.028-.837 1.865-1.863 1.865zm0-3c-.627 0-1.138.509-1.138 1.135 0 .631.51 1.145 1.138 1.145.63 0 1.142-.514 1.142-1.145 0-.626-.513-1.135-1.142-1.135zm-14.963 13.988c-.008 0-.017 0-.025-.001-.198-.015-.347-.177-.333-.375 0 0 .001-.021.001-.022.016-.198.185-.353.387-.331.198.015.346.188.331.387-.015.188-.174.342-.361.342zm.267-2.351h.009zm.534-1.947h.009zm.791-1.508c-.054 0-.108-.012-.159-.039-.175-.09-.249-.295-.16-.471.001-.003.012-.024.014-.028.094-.175.311-.24.488-.146.175.094.24.312.146.488-.066.123-.196.196-.329.196zm2.299-3.311c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.005-.004.023-.023.028-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.072-.17.109-.266.109zm-1.259 1.572c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.071.072-.169.109-.265.109zm-1.836 3.598c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.071-.169.109-.265.109zm-.535 1.947c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.071.072-.169.109-.265.109zm15.114 11.002c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.072-.169.109-.265.109zm2.007-.367c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.072-.169.109-.265.109zm3.38-2.1c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.072-.169.109-.265.109zm1.945-3.497c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.071.072-.168.109-.265.109zm-17.367-13.531c-.099 0-.197-.042-.269-.123-.133-.147-.114-.38.034-.513.009-.008.034-.029.044-.036.161-.117.386-.081.503.079.117.161.082.386-.079.503-.067.061-.15.09-.233.09zm3.425-2.163c-.14 0-.275-.078-.334-.211-.077-.176-.012-.378.159-.463.01-.005.039-.019.05-.022.186-.071.394.021.465.207s-.021.394-.207.465c-.042.016-.088.024-.133.024zm-1.772.951c-.14 0-.275-.078-.334-.211-.078-.176-.013-.378.159-.463.01-.005.039-.019.05-.022.186-.071.394.021.465.207s-.021.394-.207.465c-.043.016-.088.024-.133.024zm3.662-1.66c-.155 0-.303-.097-.351-.251-.059-.19.039-.389.229-.447l.019-.006c.187-.058.391.048.45.238.058.19-.048.392-.238.45-.036.011-.072.016-.109.016zm2.754 22.221c-.019 0-.037-.002-.056-.005-.015-.002-.049-.009-.064-.014-.191-.054-.302-.254-.247-.444.054-.191.252-.304.445-.247.196.029.319.211.289.407-.028.178-.191.303-.367.303zm5.799-1.063c-.122 0-.241-.062-.309-.175-.103-.171-.047-.392.123-.494.166-.102.393-.055.498.11.104.166.066.379-.097.487-.004.003-.025.017-.03.02-.058.035-.121.052-.185.052zm2.752-2.898c-.069 0-.139-.02-.199-.061-.166-.11-.211-.334-.101-.499.089-.18.303-.237.477-.151.178.09.244.316.155.494-.007.014-.024.044-.032.056-.069.105-.184.161-.3.161zm1.007-3.868c-.199 0-.36-.161-.36-.36s.161-.37.36-.37.36.151.36.35v.02c0 .199-.161.36-.36.36z"}"></path><path d="${"m0 0h32v32h-32z"}" fill="${"none"}"></path></svg>`;
                }
              })}`;
            }
          })}

  `;
        }
      })}
       
        ${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.R, "Row").$$render($$result, { style: "float:inline-right" }, {}, {
        default: () => {
          return `
            
            ${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `Draw Tools`;
            }
          })}
            ${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.C, "Column").$$render($$result, {}, {}, {})}
            ${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `Edit Selection`;
            }
          })}
            ${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.C, "Column").$$render($$result, {}, {}, {})}
            ${(0, import_index_0029e4b6.v)(import_Column_dcda07a5.C, "Column").$$render($$result, {}, {}, {
            default: () => {
              return `Build / Load `;
            }
          })}`;
        }
      })}`;
    }
  })}</header>
    
    
        ${slots.default ? slots.default({}) : ``}</main>`;
});
