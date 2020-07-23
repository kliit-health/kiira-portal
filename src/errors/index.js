import { intl } from 'src/i18n'
import { ERRORS } from '../firebase/constants'

export const PARSE_CSV_ERRORS = {
	MISSING_FILE: 'Please provide a valid file',
	FAILED_PARSING: 'Failed parsing object to file.',
	BAD_FILE:
		'Please verify the file format and layout. We recommend that you download and use the sample file to prevent further issues.'
}

export const FIREBASE_ERRORS = {
	[ERRORS.INSUFICIENT_PERMISSION]: intl.insuficientPermission.description,
	[ERRORS.INVALID_EMAIL]: intl.invalidEmail.description,
	[ERRORS.WRONG_PASSWORD]: intl.wrongPassword.description,
	[ERRORS.USER_NOT_FOUND]: intl.userNotFound.description,
	[ERRORS.TOO_MANY_REQUESTS]: intl.tooManyRequest.description,
	[ERRORS.USER_PROFILE_NOT_FOUND]: intl.userProfileNotFound.description,
	[ERRORS.EXPIRED_ACTION_CODE]: intl.expiredActionCode.description,
	[ERRORS.INVALID_ACTION_CODE]: intl.invalidaActionCode.description,
	[ERRORS.USER_DISABLED]: intl.userDisabled.description,
	[ERRORS.PASSWORDS_MISMATCH]: intl.passwordsMismatch.description,
	[ERRORS.WEAK_PASSWORD]: intl.weakPassword.description
}
