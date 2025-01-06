function sortByHeight(arr) {
	const sortedHeights = arr
		.filter(height => height !== -1)
		.sort((a, b) => a - b)

	let index = 0

	return arr.map(height => {
		if (height !== -1) {
			return sortedHeights[index++]
		}
		return height
	})
}

module.exports = {
	sortByHeight,
}
