function deleteDigit(n) {
	const numStr = n.toString()
	let maxNumber = 0

	for (let i = 0; i < numStr.length; i++) {
		const newNumber = parseInt(numStr.slice(0, i) + numStr.slice(i + 1))
		if (newNumber > maxNumber) {
			maxNumber = newNumber
		}
	}

	return maxNumber
}

module.exports = {
	deleteDigit,
}
