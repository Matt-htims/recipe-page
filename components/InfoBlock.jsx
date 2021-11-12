import styles from '../styles/InfoBlock.module.scss';
import Image from 'next/image';

const InfoBlock = ({ icon, title, copy }) => {
	return (
		<div className={styles.infoBlock}>
			<div className={styles.icon}>
				<Image src={icon} alt={icon} width={30} height={30} />
			</div>
			<div
				className={
					icon === '/cutlery.svg'
						? `${styles.textAccent} ${styles.text}`
						: `${styles.text}`
				}
			>
				<h5>{title}</h5>
				<p>{copy}</p>
			</div>
		</div>
	);
};

export default InfoBlock;
