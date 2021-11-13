import React from 'react';
import styles from '../styles/Ingredients.module.scss';

// Components
import Checkbox from './Checkbox';

const Ingredients = () => {
	return (
		<div className={styles.ingredients}>
			<h2>Ingredients</h2>
			<div className={styles.graham}>
				<h3>Graham Cracker Crust</h3>
				<Checkbox
					ingredient="1"
					text={
						<p>
							1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong>{' '}
							(about 10 full sheet graham crackers)
						</p>
					}
				/>
				<Checkbox
					ingredient="2"
					text={
						<p>
							5 Tablespoons (70g) <strong>unsalted butter</strong>, melted
						</p>
					}
				/>
				<Checkbox
					ingredient="3"
					text={
						<p>
							1/4 cup (50g) <strong>granulated sugar</strong>
						</p>
					}
				/>
			</div>
			<div className={styles.cheese}>
				<h3>Cheesecake</h3>
				<Checkbox
					ingredient="4"
					text={
						<p>
							four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>,
							softened to room temperature
						</p>
					}
				/>
				<Checkbox
					ingredient="5"
					text={
						<p>
							1 cup (200g) <strong>granulated sugar</strong>
						</p>
					}
				/>
				<Checkbox
					ingredient="6"
					text={
						<p>
							1 cup (240g) full-fat <strong>sour cream</strong>, at room
							temperature
						</p>
					}
				/>
				<Checkbox
					ingredient="7"
					text={
						<p>
							1 teaspoon <strong>pure vanilla extract</strong>
						</p>
					}
				/>
				<Checkbox
					ingredient="8"
					text={
						<p>
							2 teaspoons <strong>fresh lemon juice</strong> (optional, but
							recommended)
						</p>
					}
				/>
				<Checkbox
					ingredient="9"
					text={
						<p>
							3 large <strong>eggs</strong>, at room temperature
						</p>
					}
				/>
				<Checkbox
					ingredient="10"
					text={
						<p>
							topping suggestions:{' '}
							<em>
								salted caramel, lemon curd, strawberry topping, chocolate
								ganache, red wine chocolate ganache, fresh fruit, whipped cream,
								or raspberry sauce{' '}
							</em>{' '}
							(recipe in notes){' '}
						</p>
					}
				/>
			</div>
		</div>
	);
};

export default Ingredients;
