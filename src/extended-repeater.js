function repeater(str, options) {
	const repeatTimes = options.repeatTimes || 1
	const separator = options.separator || '+'
	const addition = 'addition' in options ? String(options.addition) : ''
	const additionRepeatTimes = options.additionRepeatTimes || 1
	const additionSeparator = options.additionSeparator || '|'

	const additionPart = Array(additionRepeatTimes)
		.fill(addition)
		.join(additionSeparator)

	const result = Array(repeatTimes)
		.fill(String(str) + additionPart)
		.join(separator)

	return result
}

module.exports = {
	repeater,
}
