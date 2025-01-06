function getEmailDomain(email) {
	return email.substring(email.lastIndexOf('@') + 1)
}

module.exports = {
	getEmailDomain,
}
