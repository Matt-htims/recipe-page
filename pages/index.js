import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

// Icons
import { MdRestaurantMenu } from 'react-icons/md';

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
		</div>
	);
}
