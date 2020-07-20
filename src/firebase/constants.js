// LOGIN ERRORS:

export const ERRORS = {
	INSUFICIENT_PERMISSION: 'auth/insufficient-permission',
	INVALID_EMAIL: 'auth/invalid-email',
	WRONG_PASSWORD: 'auth/wrong-password',
	USER_NOT_FOUND: 'auth/user-not-found',
	TOO_MANY_REQUESTS: 'auth/too-many-requests',
	USER_PROFILE_NOT_FOUND: 'auth/user-profile-not-found',
	EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
	EXPIRED_ACTION_CODE: 'auth/expired-action-code',
	INVALID_ACTION_CODE: 'auth/auth/invalid-action-code',
	EXPIRED_ACTION_CODE: 'auth/expired-action-code',
	USER_DISABLED: 'auth/user-disabled',
	PASSWORDS_MISMATCH: 'auth/passwords-mismatch',
	WEAK_PASSWORD: 'auth/weak-password'
}

export const CLAIMS = {
	ADMIN: 'admin'
}

export const PERSISTANCE = {
	SESSION: 'session',
	LOCAL: 'local',
	NONE: 'none'
}
