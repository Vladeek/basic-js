function getDNSStats(domains) {
	const stats = {}

	for (let domain of domains) {
		const parts = domain.split('.').reverse()
		let current = ''

		for (let part of parts) {
			current += `.${part}`
			stats[current] = (stats[current] || 0) + 1
		}
	}

	return stats
}

module.exports = {
	getDNSStats,
}
