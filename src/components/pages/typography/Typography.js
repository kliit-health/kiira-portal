import { Page, Typography } from 'src/components'
import './styles.scss'

export default () => {
	const styles = {
		container: 'typography-sample__container',
		font: { root: 'typography-sample__font' }
	}

	return (
		<Page>
			<div className={styles.container}>
				<Typography classes={styles.font} h1>
					H1: What Can I Do With Archetype?
				</Typography>
				<Typography classes={styles.font}>
					Paragraph: Archetype lets designers like you very quickly and easily
					create consistent typography styling and spacing live, in the browser.
					These styles are all underpinned by established typographic best
					practices meaning less guesswork and more harmonious designs.
					Paragraph: Archetype helps you create a design system of consistent,
					reusable components which can be easily implemented as your finished
					design is exported as developer-friendly CSS so everyone's happy!
				</Typography>
				<Typography classes={styles.font} h2>
					H2: Sounds Great, Where Do I Start?{' '}
				</Typography>
				<Typography classes={styles.font}>
					Paragraph: It's easy peasy: 1) Start by selecting a visually
					compatible font pair. 2) Define harmoniously proportioned sizes for
					all the standard typographic elements your design might require. 3)
					Set the optimal vertical spacing of all elements in your design. 4)
					Tweak and refine individual elements to get everything looking exactly
					the way you want. 5) Export as CSS ready to send to a developer. Job
					Done.
				</Typography>
				<Typography classes={styles.font} h3>
					H3: Help Us Improve
				</Typography>
				<Typography classes={styles.font}>
					Paragraph: This is version 1 of Archetype and we'd love your feedback
					and suggestions on how we can improve it to make it even more useful.
					Please use the feedback link in the font to let us know what you
					think. Be as critical as you like, we have thick skin.
				</Typography>
				<Typography classes={styles.font} h4>
					H4: Still Reading?
				</Typography>
				<Typography classes={styles.font}>
					Paragraph: Well here's some inspirational quotes for you: “Good design
					is making something intelligible and memorable. Great design is making
					something memorable and meaningful”: Dieter Rams.
				</Typography>
				<Typography classes={styles.font} h5>
					H5: More? Ok
				</Typography>
				<Typography classes={styles.font}>
					Paragraph: “A designer knows he has achieved perfection not when there
					is nothing left to add, but when there is nothing left to take away”:
					Antoine de Saint-Exupery.
				</Typography>
				<Typography classes={styles.font} h6>
					H6: One For the Road
				</Typography>
				<Typography>
					Paragraph: “The best activities for your health are pumping and
					humping”: Arnold Schwarzenegger.
				</Typography>
				<Typography classes={styles.font} h1>
					H1
				</Typography>
				<Typography classes={styles.font} h2>
					H2
				</Typography>
				<Typography classes={styles.font} h3>
					H3
				</Typography>
				<Typography classes={styles.font} h4>
					H4
				</Typography>
				<Typography classes={styles.font} h5>
					H5
				</Typography>
				<Typography classes={styles.font} h6>
					H6
				</Typography>
				<Typography classes={styles.font} h7>
					H7
				</Typography>
			</div>
		</Page>
	)
}
