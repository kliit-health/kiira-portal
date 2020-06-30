import { intl } from 'i18n'
import {
	INSUFICIENT_PERMISSION,
	INVALID_EMAIL,
	USER_NOT_FOUND,
	WRONG_PASSWORD,
	TOO_MANY_REQUESTS,
	USER_PROFILE_NOT_FOUND
} from '../../firebase/constants'

const {
	insuficientPermission,
	invalidEmail,
	wrongPassword,
	userNotFound,
	tooManyRequest,
	userProfileNotFound
} = intl

export const getLoginErrorMessage = errorCode => {
	return Errors[errorCode]
}

const Errors = {
	[INSUFICIENT_PERMISSION]: insuficientPermission.description,
	[INVALID_EMAIL]: invalidEmail.description,
	[WRONG_PASSWORD]: wrongPassword.description,
	[USER_NOT_FOUND]: userNotFound.description,
	[TOO_MANY_REQUESTS]: tooManyRequest.description,
	[USER_PROFILE_NOT_FOUND]: userProfileNotFound.description
}
