/**
 * Checks if two arrays match exactly
 * @param {Array} firstArr
 * @param {Array} secondArr
 * @returns {boolean}
 */
export function arraysMatch(firstArr, secondArr) { //Checks if Array Match - Not My Script
	if (firstArr.length !== secondArr.length) return false; //If Array Lengths Don't Match, Return False
	for (let i = 0, len = firstArr.length; i < len; i++) { //Cycle Through Array Contents
		if (firstArr[i] !== secondArr[i]) { //Checks if Content in Location Match
			return false; //If They Don't Match, Return False
		}
	}
	return true; //If Nothing Doesn't Match, Everything Matches; Therefore, Arrays Match
}

/**
 * Check if one object is fully contained in another
 * @param {Object} haystack - Object to search in
 * @param {Object} needle - Data to search for
 * @returns {boolean}
 */
export function objectSearch(haystack, needle) {
	let match = true;
	Object.keys(needle).forEach(key => {
		if (!(key in haystack) || haystack[key] !== needle[key]) {
			match = false;
		}
	});

	return match;
}