class DepthCalculator {
	calculateDepth(arr) {
		if (!Array.isArray(arr)) {
			return 0
		}

		let depth = 1

		for (let item of arr) {
			const itemDepth = this.calculateDepth(item)
			depth = Math.max(depth, itemDepth + 1)
		}

		return depth
	}
}

module.exports = {
	DepthCalculator,
}
