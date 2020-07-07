import { intl } from 'i18n'
import { ERRORS } from '../firebase/constants'

export const PARSE_CSV_ERRORS = {
	MISSING_FILE: {
		description: 'Please provide a valid file',
		code: 'MISSING_FILE'
	}
}

export const FIREBASE_ERRORS = {
	[ERRORS.INSUFICIENT_PERMISSION]: intl.insuficientPermission.description,
	[ERRORS.INVALID_EMAIL]: intl.invalidEmail.description,
	[ERRORS.WRONG_PASSWORD]: intl.wrongPassword.description,
	[ERRORS.USER_NOT_FOUND]: intl.userNotFound.description,
	[ERRORS.TOO_MANY_REQUESTS]: intl.tooManyRequest.description,
	[ERRORS.USER_PROFILE_NOT_FOUND]: intl.userProfileNotFound.description
}
