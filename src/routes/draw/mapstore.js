import {
    writable,
    get
} from 'svelte/store';

// global variables shared between units. 
export const draw_type = writable(undefined); // drawing tool type
export const selected = writable([{oa:new Set(),lat:[],lng:[]}]); // which layers contain data e.g. ['centroids']
// export const select = writable([]); // selected areacodes

export const mapsource = writable({}); // source dictionary
export const maplayer = writable([]); // layer list
export const mapfunctions = writable([]);
export const mapobject = writable(undefined); // the mapbox 'map' object
export let add_mode = writable(true);
export let draw_enabled = writable(false);
export let query = writable({error:false});


//export const coordinates = writable({});
export const radiusInKm = writable(5);
// export const selected = writable(new Set([]))

// export const level = writable('oa'); // which level are we currently showing. 
// export const levels = writable([]); // center of map
// export const zoomed = writable(false); // center of map


export const store1 = writable({});
export const store2 = writable({});
export const store3 = writable({});

// map constants

export let minzoom = 4;
export let maxzoom = 14;
export let drawtools = true

export let location = {
    bounds: [
        [-5.816, 49.864],
        [1.863, 55.872]
    ], // England & Wales bounding box
};
export let maxbounds = null;
[
    [-9, 47],
    [5, 57]
];
export const mapstyle = `/css/style-omt.json`
// `https://bothness.github.io/ons-basemaps/data/style-omt.json`
//'https://api.mapbox.com/styles/v1/carbondesignsystem/ck7c8ce1y05h61ipb2fixfe76?access_token=pk.eyJ1IjoibWJvc3RvY2siLCJhIjoiY2s5ZWRqb2w1MDBnYjNmbzcxb2xxaGZjeSJ9.ZOeAUq-8dsbN7zqgG7vkdQ'
//"https://bothness.github.io/ons-basemaps/data/style-omt.json";

export function c2bbox(lat, lng) {

    var min_coords = [
        Math.min.apply(null, lng),
        Math.min.apply(null, lat)
    ]
    var max_coords = [
        Math.max.apply(null, lng),
        Math.max.apply(null, lat)
    ]

    return [min_coords, max_coords]
}


