import React from 'react';

function Scoreboard({ score, questions }) {
	return (
		<div>
			<div>You got a score of {score} in this module!</div>
			<button onClick={() => returnResults}>
				Click Here to check your results!
			</button>
		</div>
	);
}

export default Scoreboard;
