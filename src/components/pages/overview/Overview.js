import { useState } from 'react'
import { Page } from 'src/components'
import { intl } from 'src/i18n'
import {
	TopExperts,
	InvitationsSent,
	SignUps,
	AccountDetails
} from './sections'
import { SectionContainer } from './components'
import './styles.scss'

export const Overview = ({ auth }) => {
	const [ref, setRef] = useState(null)
	const { organizationId } = auth.details

	const styles = {
		page: { content: 'overview__page' },
		container: 'overview__container'
	}

	return (
		<Page
			title={intl.overview.description}
			subtitle={intl.everthingInOnePlace.description}
			elementRef={ref}
			classes={styles.page}
		>
			<AccountDetails details={auth.details} />
			<SectionContainer>
				<div className={styles.container}>
					<InvitationsSent organizationId={organizationId} />
					<SignUps organizationId={organizationId} />
				</div>
			</SectionContainer>
			<SectionContainer title={intl.topExperts.description}>
				<TopExperts onRefChange={setRef} />
			</SectionContainer>
		</Page>
	)
}
