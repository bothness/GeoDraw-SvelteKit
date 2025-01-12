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
  default: () => BarChart
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0029e4b6 = require("../../../../chunks/index-0029e4b6.js");
var BarChart_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '/* purgecss start ignore */\n\n.label-group.svelte-1ri9pb8.svelte-1ri9pb8{\n  margin:4px 0 1px 0;\n  padding:0;\n  line-height:1.2;\n  font-size:0.9rem\n}\n\n.bold.svelte-1ri9pb8.svelte-1ri9pb8{\n  font-weight:bold\n}\n\n.sml.svelte-1ri9pb8.svelte-1ri9pb8{\n  margin-left:3px;\n  font-size:.85rem\n}\n\n.brackets.svelte-1ri9pb8.svelte-1ri9pb8::before{\n  content:"("\n}\n\n.brackets.svelte-1ri9pb8.svelte-1ri9pb8::after{\n  content:")"\n}\n\n.bar-group.svelte-1ri9pb8.svelte-1ri9pb8{\n  display:block;\n  position:relative;\n  width:100%\n}\n\n.bar-group.svelte-1ri9pb8>div.svelte-1ri9pb8{\n  position:absolute;\n  height:100%;\n  top:0\n}\n\n.bar.svelte-1ri9pb8.svelte-1ri9pb8{\n  background-color:#27A0CC\n}\n\n.marker.svelte-1ri9pb8.svelte-1ri9pb8{\n  border-left-color:black;\n  border-left-style:solid\n}\n\nul.legend-block.svelte-1ri9pb8.svelte-1ri9pb8{\n  list-style-type:none;\n  padding:0;\n  margin:0 0 5px 0\n}\n\nul.legend-block.svelte-1ri9pb8>li.svelte-1ri9pb8{\n  display:inline-block;\n  margin:0 10px 0 0;\n  padding:0\n}\n\n.legend-vis.svelte-1ri9pb8.svelte-1ri9pb8{\n  display:inline-block;\n  transform:translate(0,3px)\n}\n\n/* purgecss end ignore */')();
const css = {
  code: '.label-group.svelte-1ri9pb8.svelte-1ri9pb8{margin:4px 0 1px 0;padding:0;line-height:1.2;font-size:0.9rem}.bold.svelte-1ri9pb8.svelte-1ri9pb8{font-weight:bold}.sml.svelte-1ri9pb8.svelte-1ri9pb8{margin-left:3px;font-size:.85rem}.brackets.svelte-1ri9pb8.svelte-1ri9pb8::before{content:"("}.brackets.svelte-1ri9pb8.svelte-1ri9pb8::after{content:")"}.bar-group.svelte-1ri9pb8.svelte-1ri9pb8{display:block;position:relative;width:100%}.bar-group.svelte-1ri9pb8>div.svelte-1ri9pb8{position:absolute;height:100%;top:0}.bar.svelte-1ri9pb8.svelte-1ri9pb8{background-color:#27A0CC}.marker.svelte-1ri9pb8.svelte-1ri9pb8{border-left-color:black;border-left-style:solid}ul.legend-block.svelte-1ri9pb8.svelte-1ri9pb8{list-style-type:none;padding:0;margin:0 0 5px 0}ul.legend-block.svelte-1ri9pb8>li.svelte-1ri9pb8{display:inline-block;margin:0 10px 0 0;padding:0}.legend-vis.svelte-1ri9pb8.svelte-1ri9pb8{display:inline-block;transform:translate(0,3px)}',
  map: null
};
const BarChart = (0, import_index_0029e4b6.c)(($$result, $$props, $$bindings, slots) => {
  let xDomain;
  let zDomain;
  let xScale;
  let data_grouped;
  let { data } = $$props;
  let { xKey = "value" } = $$props;
  let { yKey = "category" } = $$props;
  let { zKey = "group" } = $$props;
  let { format = (d) => d } = $$props;
  let { suffix = "%" } = $$props;
  let { barHeight = 25 } = $$props;
  let { markerWidth = 3 } = $$props;
  function groupData(data2, key) {
    let data_indexed = {};
    for (const d of data2) {
      if (!data_indexed[d[key]]) {
        data_indexed[d[key]] = { label: d[key], values: [] };
      }
      data_indexed[d[key]].values.push(d);
    }
    let data_grouped2 = [];
    for (const key2 in data_indexed) {
      data_grouped2.push(data_indexed[key2]);
    }
    return data_grouped2;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.xKey === void 0 && $$bindings.xKey && xKey !== void 0)
    $$bindings.xKey(xKey);
  if ($$props.yKey === void 0 && $$bindings.yKey && yKey !== void 0)
    $$bindings.yKey(yKey);
  if ($$props.zKey === void 0 && $$bindings.zKey && zKey !== void 0)
    $$bindings.zKey(zKey);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.barHeight === void 0 && $$bindings.barHeight && barHeight !== void 0)
    $$bindings.barHeight(barHeight);
  if ($$props.markerWidth === void 0 && $$bindings.markerWidth && markerWidth !== void 0)
    $$bindings.markerWidth(markerWidth);
  $$result.css.add(css);
  xDomain = [0, Math.max(...data.map((d) => d[xKey]))];
  data.map((d) => d[yKey]).filter((v, i, a) => a.indexOf(v) === i);
  zDomain = data.map((d) => d[zKey]).filter((v, i, a) => a.indexOf(v) === i);
  xScale = (value) => value / xDomain[1] * 100;
  data_grouped = groupData(data, yKey);
  return `${zDomain[1] ? `<ul class="${"legend-block svelte-1ri9pb8"}">${(0, import_index_0029e4b6.j)(zDomain, (group, i) => {
    return `<li class="${"svelte-1ri9pb8"}"><div class="${"legend-vis " + (0, import_index_0029e4b6.f)(i == 0 ? "bar" : "marker") + " svelte-1ri9pb8"}"${(0, import_index_0029e4b6.e)({
      "height": `1rem`,
      "width": i == 0 ? "1rem" : markerWidth + "px"
    })}></div>
		<span class="${(0, import_index_0029e4b6.f)((0, import_index_0029e4b6.k)(i == 0 ? "bold" : "brackets")) + " svelte-1ri9pb8"}">${(0, import_index_0029e4b6.f)(group)}</span>
	</li>`;
  })}</ul>` : ``}

${(0, import_index_0029e4b6.j)(data_grouped, (group) => {
    return `<div class="${"label-group svelte-1ri9pb8"}">${(0, import_index_0029e4b6.f)(group.label)}
		${(0, import_index_0029e4b6.j)(group.values, (d, i) => {
      return `<span class="${"label " + (0, import_index_0029e4b6.f)(i == 0 ? "bold" : "sml brackets") + " svelte-1ri9pb8"}">${(0, import_index_0029e4b6.f)(format(d.value))}${(0, import_index_0029e4b6.f)(suffix)}</span>`;
    })}</div>
	<div class="${"bar-group svelte-1ri9pb8"}"${(0, import_index_0029e4b6.e)({ "height": `${barHeight}px` })}>${(0, import_index_0029e4b6.j)(group.values, (d, i) => {
      return `${i == 0 ? `<div class="${"bar svelte-1ri9pb8"}"${(0, import_index_0029e4b6.e)({
        "left": `0`,
        "width": `${xScale(d[xKey])}%`
      })}></div>` : `<div class="${"marker svelte-1ri9pb8"}"${(0, import_index_0029e4b6.e)({
        "left": `calc(${xScale(d[xKey])}% - ${markerWidth / 2}px)`,
        "border-left-width": `${markerWidth}px`
      })}></div>`}`;
    })}
	</div>`;
  })}`;
});
