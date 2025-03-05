"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hsl = [154, 40, 50];
const Hsl2Rgb = (hsl) => {
    let h = hsl[0];
    let sl = hsl[1] / 100;
    let l = hsl[2] / 100;
    let c = (1 - Math.abs(2 * l - 1)) * sl;
    let h1 = h / 60;
    let x = c * (1 - Math.abs((h1 % 2) - 1));
    let r1, g1, b1;
    if (0 <= h1 && h1 < 1) {
        (r1 = c), (g1 = x), (b1 = 0);
    }
    else if (1 <= h1 && h1 < 2) {
        (r1 = x), (g1 = c), (b1 = 0);
    }
    else if (2 <= h1 && h1 < 3) {
        (r1 = 0), (g1 = c), (b1 = x);
    }
    else if (3 <= h1 && h1 < 4) {
        (r1 = 0), (g1 = x), (b1 = c);
    }
    else if (4 <= h1 && h1 < 5) {
        (r1 = x), (g1 = 0), (b1 = c);
    }
    else if (5 <= h1 && h1 < 6) {
        (r1 = c), (g1 = 0), (b1 = x);
    }
    else {
        (r1 = -1), (g1 = -1), (b1 = -1);
    }
    let m = l - c / 2;
    let r = r1 + m;
    let g = g1 + m;
    let b = b1 + m;
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};
const Rgb2HSL = (rgb) => {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    let xmax = Math.max(r, g, b);
    let xmin = Math.min(r, g, b);
    let c = xmax - xmin;
    let l = (xmax + xmin) / 2;
    let h;
    if (c === 0) {
        h = 0;
    }
    else if (xmax === r) {
        h = 60 * (((g - b) / c) % 6);
    }
    else if (xmax === g) {
        h = 60 * ((b - r) / c + 2);
    }
    else if (xmax === b) {
        h = 60 * ((r - g) / c + 4);
    }
    else {
        h = -1;
    }
    let sl;
    if (l === 0 || l === 1) {
        sl = 0;
    }
    else {
        sl = c / (1 - Math.abs(2 * xmax - c - 1));
    }
    return [Math.round(h), Math.round(sl * 100), Math.round(l * 100)];
};
const Hsl2Hsv = (hsl) => {
    let h = hsl[0], sl = hsl[1] / 100, l = hsl[2] / 100;
    let v = l + sl * Math.min(l, 1 - l);
    let sv;
    if (v === 0) {
        sv = 0;
    }
    else {
        sv = 2 * (1 - l / v);
    }
    return [h, Math.round(sv * 100), Math.round(v * 100)];
};
const Hsv2Hsl = (hsv) => {
    let h = hsv[0], sv = hsv[1] / 100, v = hsv[2] / 100;
    let l = v * (1 - sv / 2);
    let sl;
    if (l === 0 || l === 1) {
        sl = 0;
    }
    else {
        sl = (v - l) / Math.min(l, 1 - l);
    }
    return [h, Math.round(sl * 100), Math.round(l * 100)];
};
//
const Hsv2Rgb = (hsv) => { };
const Rgb2Hsv = (rgb) => { };
const Hsv2Hwb = (hsv) => { };
const Hwb2Hsv = (hwb) => { };
const Hex2Rgb = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
};
const Rgb2Hex = (rgb) => {
    let r1 = rgb[0].toString(16).padStart(2, "0");
    let g1 = rgb[1].toString(16).padStart(2, "0");
    let b1 = rgb[2].toString(16).padStart(2, "0");
    return "#" + r1 + g1 + b1;
};
// console.log("hsl: ", hsl);
// let rgb = Hsl2Rgb(hsl);
// console.log("to rgb: ", rgb);
// console.log("to hsl: ", Rgb2HSL(rgb));
// let hsv = Hsl2Hsv(hsl);
// console.log("to hsv: ", hsv);
// console.log("to hsl: ", Hsv2Hsl(hsv));
let rgb = Hex2Rgb("#a67a0c");
let hex = Rgb2Hex(rgb);
console.log("RGB: ", rgb);
console.log("HEX BEFORE: #a67a0c", "HEX AFTER: " + hex);
//# sourceMappingURL=script.js.map