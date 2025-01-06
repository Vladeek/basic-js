function renameFiles(names) {
	const nameCounts = {}
	const result = []

	for (let name of names) {
		if (nameCounts[name]) {
			let newName = `${name}(${nameCounts[name]})`
			while (nameCounts[newName]) {
				nameCounts[name]++
				newName = `${name}(${nameCounts[name]})`
			}
			result.push(newName)
			nameCounts[newName] = 1
		} else {
			result.push(name)
			nameCounts[name] = 1
		}
	}

	return result
}

module.exports = {
	renameFiles,
}
