/* global Path2D */

/**
 * @function label - creates Path2D representing circle
 * @param {Object} style - css-like style object
 * @param {Number} [style.top = 0] - top coordinate
 * @param {Number} [style.left = 0] - left coordinate
 * @param {Number} [style.radius = 0] - radius of the circle
 * @returns {Path2D} - circle
 */

export default function circle({top = 0, left = 0, radius = 0}) {
	let path = new Path2D();
	path.arc(left, top, radius, 0, 2 * Math.PI);
	return path;
}
