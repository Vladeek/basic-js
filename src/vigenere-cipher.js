class VigenereCipheringMachine {
	constructor(direct = true) {
		this.direct = direct
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!')
		}
		if (typeof message !== 'string' || typeof key !== 'string') {
			throw new Error('Arguments must be strings!')
		}

		message = message.toUpperCase()
		key = key.toUpperCase()

		let result = ''
		let keyIndex = 0

		for (let i = 0; i < message.length; i++) {
			const char = message[i]

			if (/[A-Z]/.test(char)) {
				const msgCharCode = char.charCodeAt(0) - 65
				const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 65
				const encryptedCharCode = ((msgCharCode + keyCharCode) % 26) + 65
				result += String.fromCharCode(encryptedCharCode)
				keyIndex++
			} else {
				result += char
			}
		}

		return this.direct ? result : result.split('').reverse().join('')
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!')
		}
		if (typeof message !== 'string' || typeof key !== 'string') {
			throw new Error('Arguments must be strings!')
		}

		message = message.toUpperCase()
		key = key.toUpperCase()

		let result = ''
		let keyIndex = 0

		for (let i = 0; i < message.length; i++) {
			const char = message[i]

			if (/[A-Z]/.test(char)) {
				const msgCharCode = char.charCodeAt(0) - 65
				const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 65
				const decryptedCharCode = ((msgCharCode - keyCharCode + 26) % 26) + 65
				result += String.fromCharCode(decryptedCharCode)
				keyIndex++
			} else {
				result += char
			}
		}

		return this.direct ? result : result.split('').reverse().join('')
	}
}

module.exports = {
	VigenereCipheringMachine,
}
