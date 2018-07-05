import React from 'react';

import BarExample from  "../charts/bar";
import TotalTickets from  "../charts/TotalTickets";


const ChartTest = () => (
	<div>
		<h1>Chart Test </h1>
		<div>
			<BarExample />
		</div>
		<div>
			<TotalTickets />
		</div>
	</div>
);

export default ChartTest;