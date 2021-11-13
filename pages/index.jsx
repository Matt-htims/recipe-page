import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

// Components
import InfoBlock from '../components/InfoBlock';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/instructions/Instructions';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Recipe page</title>
				<meta
					name="description"
					content="Recipe page challenge from devChallenge.io completed by Matt.htims"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<h1>Classic Cheesecake Recipe</h1>
				<div className={styles.sub}>
					<div>
						<Image src="/6dots.svg" height={9} width={12} alt="Little icon" />
					</div>
					<p>
						Look no further for a creamy and ultra smooth classic cheesecake
						recipe! Paired with a buttery graham cracker crust, no one can deny
						its simple decadence. For the best results, bake in a water bath.
					</p>
				</div>
				<Image
					src="/photo1.png"
					height={470}
					width={969}
					alt="Pie on a plate"
				/>
			</header>
			<main className={styles.main}>
				<aside className={styles.card}>
					<InfoBlock icon="/cutlery.svg" title="yields" copy="12 servings" />
					<div className={styles.cardSection}>
						<div className={styles.cardMargin}>
							<InfoBlock
								icon="/clock.svg"
								title="prep time"
								copy="45 minutes"
							/>
						</div>
						<div className={styles.cardMargin}>
							<InfoBlock icon="/clock.svg" title="cook time" copy="1 hour" />
						</div>
						<div>
							<InfoBlock
								icon="/clock.svg"
								title="total time"
								copy="1,45 hours"
							/>
						</div>
					</div>
				</aside>
				<div>
					<Ingredients />
					<Instructions />
					<p className={styles.source}>
						Source:{' '}
						<a href="https://sallysbakingaddiction.com/classic-cheesecake/">
							https://sallysbakingaddiction.com/classic-cheesecake/
						</a>
					</p>
				</div>
			</main>
		</div>
	);
}
