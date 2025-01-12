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
  add_mode: () => add_mode,
  c2bbox: () => c2bbox,
  draw_enabled: () => draw_enabled,
  draw_type: () => draw_type,
  drawtools: () => drawtools,
  location: () => location,
  mapfunctions: () => mapfunctions,
  maplayer: () => maplayer,
  mapobject: () => mapobject,
  mapsource: () => mapsource,
  mapstyle: () => mapstyle,
  maxbounds: () => maxbounds,
  maxzoom: () => maxzoom,
  minzoom: () => minzoom,
  query: () => query,
  radiusInKm: () => radiusInKm,
  selected: () => selected,
  server: () => server,
  store1: () => store1,
  store2: () => store2,
  store3: () => store3
});
module.exports = __toCommonJS(stdin_exports);
var import_index_7e61ccad = require("../../../chunks/index-7e61ccad.js");
var import_index_0029e4b6 = require("../../../chunks/index-0029e4b6.js");
const draw_type = (0, import_index_7e61ccad.w)(void 0);
const selected = (0, import_index_7e61ccad.w)([{ oa: /* @__PURE__ */ new Set(), lat: [], lng: [] }]);
const mapsource = (0, import_index_7e61ccad.w)({});
const maplayer = (0, import_index_7e61ccad.w)([]);
const mapfunctions = (0, import_index_7e61ccad.w)([]);
const mapobject = (0, import_index_7e61ccad.w)(void 0);
let add_mode = (0, import_index_7e61ccad.w)(true);
let draw_enabled = (0, import_index_7e61ccad.w)(false);
let query = (0, import_index_7e61ccad.w)({ error: false });
const radiusInKm = (0, import_index_7e61ccad.w)(5);
const store1 = (0, import_index_7e61ccad.w)({});
const store2 = (0, import_index_7e61ccad.w)({});
const store3 = (0, import_index_7e61ccad.w)({});
let minzoom = 4;
let maxzoom = 14;
let drawtools = true;
let location = {
  bounds: [
    [-5.816, 49.864],
    [1.863, 55.872]
  ]
};
let maxbounds = null;
const server = "https://onsvisual.github.io/ONS_CensusDraw_TileGen/geodraw_tileset";
const mapstyle = `/css/style-omt.json`;
function c2bbox(lat, lng) {
  var min_coords = [
    Math.min.apply(null, lng),
    Math.min.apply(null, lat)
  ];
  var max_coords = [
    Math.max.apply(null, lng),
    Math.max.apply(null, lat)
  ];
  return [min_coords, max_coords];
}
