import React from 'react';

import styles from '../../styles/Instructions.module.scss';

const Instruction = ({ number, instruction }) => {
	return (
		<div className={styles.instruction}>
			<div className={styles.number}>
				<p>{number}</p>
			</div>
			<p>{instruction}</p>
		</div>
	);
};

export default Instruction;
