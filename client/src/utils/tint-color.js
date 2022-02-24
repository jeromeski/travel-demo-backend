export function adjust(hexInput, percent) {
	let hex = hexInput;

	// strip the leading # if it's there
	hex = hex.replace(/^\s*#|\s*$/g, "");

	// convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
	if (hex.length === 3) {
		hex = hex.replace(/(.)/g, "$1$1");
	}

	let r = parseInt(hex.substr(0, 2), 16);
	let g = parseInt(hex.substr(2, 2), 16);
	let b = parseInt(hex.substr(4, 2), 16);

	const calculatedPercent = (100 + percent) / 100;

	r = Math.round(Math.min(255, Math.max(0, r * calculatedPercent)));
	g = Math.round(Math.min(255, Math.max(0, g * calculatedPercent)));
	b = Math.round(Math.min(255, Math.max(0, b * calculatedPercent)));

	return `#${r.toString(16).toUpperCase()}${g.toString(16).toUpperCase()}${b
		.toString(16)
		.toUpperCase()}`;
}

/* ============================== *
 *   LIGHTEN OR DARKEN COLOR      *
 * ============================== *

The function takes the percent as an integer,
but could easily be modified for a decimal. 
Negative to darken, positive to lighten.

console.log(adjust("#49D174", -14)) // Darken by 14% = #3FB464 
console.log(adjust("#49D174", -27)) // Darken by 27% = #359955

https://stackoverflow.com/questions/13375039/javascript-calculate-darker-colour

*/
