import React from 'react';

import styles from '../styles/Checkbox.module.scss';

const Checkbox = ({ ingredient, text }) => {
	return (
		<div className={styles.checkbox}>
			<input type="checkbox" name={ingredient} id={ingredient} />
			<label htmlFor={ingredient}>{text}</label>
		</div>
	);
};

export default Checkbox;
