function getCommonCharacterCount(s1, s2) {
	const countChars = str => {
		const charCount = {}
		for (let char of str) {
			charCount[char] = (charCount[char] || 0) + 1
		}
		return charCount
	}

	const s1Count = countChars(s1)
	const s2Count = countChars(s2)

	let commonCount = 0

	for (let char in s1Count) {
		if (s2Count[char]) {
			commonCount += Math.min(s1Count[char], s2Count[char])
		}
	}

	return commonCount
}

module.exports = {
	getCommonCharacterCount,
}
