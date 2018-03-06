export function arraysMatch(firstArr, secondArr) { //Checks if Array Match - Not My Script
	if (firstArr.length !== secondArr.length) return false; //If Array Lengths Don't Match, Return False
	for (let i = 0, len = firstArr.length; i < len; i++) { //Cycle Through Array Contents
		if (firstArr[i] !== secondArr[i]) { //Checks if Content in Location Match
			return false; //If They Don't Match, Return False
		}
	}
	return true; //If Nothing Doesn't Match, Everything Matches; Therefore, Arrays Match
}

export function objectFulfills(haystack, needle) {
	let match = true;
	Object.keys(needle).forEach(key => {
		if (!haystack[key] || haystack[key] !== needle[key]) {
			match = false;
		}
	});

	return match;
}