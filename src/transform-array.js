function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}

	const result = []
	let i = 0

	while (i < arr.length) {
		const current = arr[i]

		if (current === '--double-next') {
			if (i + 1 < arr.length) {
				result.push(arr[i + 1])
			}
		} else if (current === '--double-prev') {
			if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
				result.push(arr[i - 1])
			}
		} else if (current === '--discard-next') {
			i++
		} else if (current === '--discard-prev') {
			if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
				result.pop()
			}
		} else {
			result.push(current)
		}

		i++
	}

	return result
}

module.exports = {
	transform,
}
