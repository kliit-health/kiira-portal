export const ERROR = {
	INSUFICIENT_PERMISSION: 'auth/insufficient-permission',
	INVALID_EMAIL: 'auth/invalid-email',
	WRONG_PASSWORD: 'auth/wrong-password',
	USER_NOT_FOUND: 'auth/user-not-found',
	TOO_MANY_REQUESTS: 'auth/too-many-requests',
	USER_PROFILE_NOT_FOUND: 'auth/user-profile-not-found',
	EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
	EXPIRED_ACTION_CODE: 'auth/expired-action-code',
	INVALID_ACTION_CODE: 'auth/invalid-action-code',
	USER_DISABLED: 'auth/user-disabled',
	PASSWORDS_MISMATCH: 'auth/passwords-mismatch',
	WEAK_PASSWORD: 'auth/weak-password',
	CLAIMS_TOO_LARGE: 'auth/claims-too-large',
	EMAIL_ALREADY_EXISTS: 'email-already-exists',
	ID_TOKEN_EXPIRED: 'auth/id-token-expired',
	ID_TOKEN_REVOKED: 'auth/id-token-revoked',
	INTERNAL_ERROR: 'auth/internal-error',
	INVALID_ARGUMENT: 'auth/invalid-argument',
	INVALID_CLAIMS: 'auth/invalid-claims',
	INVALID_CONTINUE_URL: 'auth/invalid-continue-uri',
	INVALID_CREATION_TIME: 'auth/invalid-creation-time',
	INVALID_CREDENTIAL: 'auth/invalid-credential',
	INVALID_DISABLED_FIELD: 'auth/invalid-disabled-field',
	INVALID_DISPLAY_NAME: 'auth/invalid-display-name',
	INVALID_DYNAMIC_LINK_DOMAIN: 'auth/invalid-dynamic-link-domain',
	INVALID_HASH_ALGORITHM: 'auth/invalid-hash-algorithm',
	INVALID_HASH_BLOCK_SIZE: 'auth/invalid-hash-block-size',
	INVALID_HASH_DERIVED_KEY_LENGTH: 'auth/invalid-hash-derived-key-length',
	INVALID_HASH_KEY: 'auth/invalid-hash-key',
	INVALID_HASH_MEMORY_COST: 'auth/invalid-hash-memory-cost',
	INVALID_HASH_PARALLELIZATION: 'auth/invalid-hash-parallelization',
	INVALID_HASH_ROUNDS: 'auth/invalid-hash-rounds',
	INVALID_HASH_SALT_SEPARATOR: 'auth/invalid-hash-salt-separator',
	INVALID_ID_TOKEN: 'auth/invalid-id-token',
	INVALID_LAST_SIGN_IN_TIME: 'auth/invalid-last-sign-in-time',
	INVALID_PAGE_TOKEN: 'auth/invalid-page-token',
	INVALID_PASSWORD: 'auth/invalid-password',
	INVALID_PASSWORD_HASH: 'auth/invalid-password-hash',
	INVALID_PASSWORD_SALT: 'auth/invalid-password-salt',
	INVALID_PHONE_NUMBER: 'auth/invalid-phone-number',
	INVALID_PHOTO_URL: 'auth/invalid-photo-url',
	INVALID_PROVIDER_DATA: 'auth/invalid-provider-data',
	INVALID_PROVIDER_ID: 'auth/invalid-provider-id',
	INVALID_SESSION_COOKIE_DURATION: 'auth/invalid-session-cookie-duration',
	INVALID_UID: 'auth/invalid-uid',
	INVALID_USER_IMPORT: 'auth/invalid-user-import',
	MAXIMUM_USER_COUNT_EXCEEDED: 'auth/maximum-user-count-exceeded',
	MISSING_ANDROID_PKG_NAME: 'auth/missing-android-pkg-name',
	MISSING_CONTINUE_URI: 'auth/missing-continue-uri',
	MISSING_HASH_ALGORITHM: 'auth/missing-hash-algorithm',
	MISSING_IOS_BUNDLE_ID: 'auth/missing-ios-bundle-id',
	MISSING_UID: 'auth/missing-uid',
	OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
	PHONE_NUMBER_ALREADY_EXISTS: 'auth/phone-number-already-exists',
	PROJECT_NOT_FOUND: 'auth/project-not-found',
	RESERVED_CLAIMS: 'auth/reserved-claims',
	SESSION_COOKIE_EXPIRED: 'auth/session-cookie-expired',
	SESSION_COOKIE_REVOKED: 'auth/session-cookie-revoked',
	UID_ALREADY_EXISTS: 'auth/uid-already-exists',
	UNAUTHORIZED_CONTINUE_URI: 'auth/unauthorized-continue-uri'
}

export const CLAIMS = {
	ADMIN: 'admin'
}

export const PERSISTANCE = {
	SESSION: 'session',
	LOCAL: 'local',
	NONE: 'none'
}

export const collections = {
	invitations: 'invitations',
	users: 'users',
	organizations: 'organizations'
}
