import { intl } from 'i18n'

const {
	insuficientPermission,
	invalidEmail,
	wrongPassword,
	userNotFound
} = intl

export const getLoginErrorMessage = errorCode => {
	return Errors[errorCode]
}

const Errors = {
	'auth/insufficient-permission': insuficientPermission.description,
	'auth/invalid-email': invalidEmail.description,
	'auth/wrong-password': wrongPassword.description,
	'auth/user-not-found': userNotFound.description
}
