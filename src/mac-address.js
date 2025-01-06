function isMAC48Address(n) {
	const regex = /^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/
	return regex.test(n)
}

module.exports = {
	isMAC48Address,
}
