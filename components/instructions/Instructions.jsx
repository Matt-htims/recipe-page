import React from 'react';

import styles from '../../styles/Instructions.module.scss';
// Components
import Instruction from './Instruction';

const Instructions = () => {
	return (
		<div className={styles.instructions}>
			<h2>Instructions</h2>
			<div>
				<Instruction
					number="1"
					instruction={
						<p>
							Adjust the oven rack to the lower-middle position and preheat oven
							to 350°F (177°C).
						</p>
					}
				/>
				<Instruction
					number="2"
					instruction={
						<p>
							<strong>Make the crust:</strong> Using a food processor, pulse the
							graham crackers into crumbs. Pour into a medium bowl and stir in
							sugar and melted butter until combined. (You can also pulse it all
							together in the food processor.) Mixture will be sandy. Press
							firmly into the bottom and slightly up the sides of a 9-inch or
							10-inch springform pan. No need to grease the pan first. I use the
							bottom of a measuring cup to pack the crust down tightly. Pre-bake
							for 8 minutes. Remove from the oven and place the hot pan on a
							large piece of aluminum foil. The foil will wrap around the pan
							for the water bath in step 4. Allow crust to slightly cool as you
							prepare the filling.
						</p>
					}
				/>
			</div>
		</div>
	);
};

export default Instructions;
