function countCats(matrix) {
	let catCount = 0

	for (let row of matrix) {
		for (let item of row) {
			if (item === '^^') {
				catCount++
			}
		}
	}

	return catCount
}

module.exports = {
	countCats,
}
