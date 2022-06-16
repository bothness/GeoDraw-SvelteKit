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
  default: () => Navbox
});
module.exports = __toCommonJS(stdin_exports);
var import_index_12fa369c = require("../../../../../chunks/index-12fa369c.js");
var Navbox_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '/* purgecss start ignore */\n\n.ons-toc.svelte-1dyzlhu{\n  box-sizing:border-box;\n  display:block;\n  overflow-wrap:break-word;\n  margin-top:24px\n}\n\n.ons-toc__title.svelte-1dyzlhu{\n  font-size:16px !important;\n  display:block;\n  font-weight:600;\n  -webkit-margin-after:18px;\n          margin-block-end:18px;\n  -webkit-margin-before:0;\n          margin-block-start:0;\n  -webkit-margin-end:0;\n          margin-inline-end:0;\n  -webkit-margin-start:0;\n          margin-inline-start:0;\n  margin:0 0 18px 0;\n  padding:0\n}\n\n.ons-list.svelte-1dyzlhu{\n  display:block;\n  list-style-image:none;\n  list-style-position:outside;\n  list-style-type:none;\n  -webkit-margin-after:27px;\n          margin-block-end:27px;\n  -webkit-margin-before:0;\n          margin-block-start:0;\n  margin:0 0 27px 0;\n  -webkit-margin-end:0;\n          margin-inline-end:0;\n  -webkit-margin-start:0;\n          margin-inline-start:0;\n  padding:0;\n  -webkit-padding-start:0;\n          padding-inline-start:0\n}\n\n.ons-list__item.svelte-1dyzlhu{\n  display:list-item;\n  margin:0 0 9px 25px;\n  padding:0;\n  position:relative;\n  font-size:16px !important\n}\n\n.ons-list__item.svelte-1dyzlhu::before{\n  border-top-style:solid;\n  border-top-width:1px;\n  content:"";\n  display:block;\n  height:1px;\n  left:0;\n  margin-left:-25px;\n  position:absolute;\n  top:14px;\n  width:15px\n}\n\n/* purgecss end ignore */')();
const css = {
  code: '.ons-toc.svelte-1dyzlhu{box-sizing:border-box;display:block;overflow-wrap:break-word;margin-top:24px}.ons-toc__title.svelte-1dyzlhu{font-size:16px !important;display:block;font-weight:600;margin-block-end:18px;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;margin:0 0 18px 0;padding:0}.ons-list.svelte-1dyzlhu{display:block;list-style-image:none;list-style-position:outside;list-style-type:none;margin-block-end:27px;margin-block-start:0;margin:0 0 27px 0;margin-inline-end:0;margin-inline-start:0;padding:0;padding-inline-start:0}.ons-list__item.svelte-1dyzlhu{display:list-item;margin:0 0 9px 25px;padding:0;position:relative;font-size:16px !important}.ons-list__item.svelte-1dyzlhu::before{border-top-style:solid;border-top-width:1px;content:"";display:block;height:1px;left:0;margin-left:-25px;position:absolute;top:14px;width:15px}',
  map: null
};
const Navbox = (0, import_index_12fa369c.c)(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { links = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css);
  return `<nav class="${"ons-toc svelte-1dyzlhu"}" aria-label="${"Pages in this section"}">${title ? `<h2 class="${"ons-toc__title ons-u-fs-r--b ons-u-mb-s svelte-1dyzlhu"}">${(0, import_index_12fa369c.h)(title)}</h2>` : ``}
	<ol class="${"ons-list ons-u-mb-m ons-list--dashed svelte-1dyzlhu"}">${(0, import_index_12fa369c.r)(links, (link) => {
    return `${link.url ? `<li class="${"ons-list__item svelte-1dyzlhu"}"><a${(0, import_index_12fa369c.j)("href", link.url, 0)} class="${"ons-list__link"}">${(0, import_index_12fa369c.h)(link.label)}</a>
		</li>` : `<li class="${"ons-list__item svelte-1dyzlhu"}" aria-current="${"true"}">${(0, import_index_12fa369c.h)(link.label)}</li>`}`;
  })}</ol>
</nav>`;
});
