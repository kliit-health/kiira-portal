export default {
	user: {
		agreeToTerms: false,
		chats: '',
		consentAgreements: [],
		credits: '',
		displayName: '',
		email: '',
		fcmToken: '',
		firstLogin: true,
		firstName: '',
		isActive: false,
		isOnline: false,
		lastName: '',
		plan: '',
		prepaid: 0,
		profileInfo: {
			dob: '',
			firstName: '',
			insurance: '',
			isActive: false,
			lastName: '',
			plan: '',
			profileImageUrl: '',
			pronouns: '',
			sexuality: {
				value: '',
				code: ''
			},
			state: {
				code: '',
				value: ''
			}
		},
		subscription: {
			id: ''
		},
		customer: {
			id: ''
		},
		plan: {
			id: ''
		},
		questions: '',
		referalCode: '',
		role: '',
		signUpDate: '',
		stripeCustomerToken: '',
		timeOut: false,
		toUserId: '',
		uid: '',
		updatedAt: '',
		visits: 0
	},
	expert: {
		calendarID: '',
		chatEnabled: false,
		clinicInfo: {
			address: '',
			city: '',
			hours: [],
			license: '',
			name: '',
			phoneNumber: '',
			state: {
				code: '',
				value: ''
			},
			zipcode: ''
		},
		credits: '',
		expertName: '',
		fcmToken: '',
		isActive: '',
		isOnline: '',
		profileInfo: {
			bio: '',
			city: '',
			dob: '',
			email: '',
			firstName: '',
			gender: '',
			isActive: '',
			languages: [],
			lastName: '',
			profileImageUrl: '',
			license: {
				states: []
			},
			profession: {
				fullName: '',
				shortName: '',
				specialities: []
			},
			pronouns: '',
			state: {
				code: '',
				value: ''
			}
		},
		rating: '',
		referalCode: '',
		role: '',
		toUserId: '',
		uid: '',
		userRating: [],
		id: '',
		videoEnabled: false
	},
	invitation: {
		agreeToTerms: false,
		displayName: '',
		email: '',
		firstLogin: true,
		invitationDate: Date.now(),
		organizationId: '',
		profileInfo: {
			email: '',
			firstName: '',
			lastName: '',
			phoneNumber: ''
		},
		role: '',
		status: 'Unknown'
	},
	overview: {
		invitations: 0,
		chats: 0,
		visits: 0,
		activeUsers: 0,
		users: 0
	}
}
