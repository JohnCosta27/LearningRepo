import React, { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);
	return (
		<div>
			<h1 data-testid="header">My Counter</h1>
			<h1 data-testid="counter">{counter}</h1>
			<button data-testid="button" onClick={() => setCounter(counter + step)}>Click to add</button>
            <input data-testid="input" onChange={(event) => setStep(Number(event.target.value))}></input>
		</div>
	);
};
export default Counter;
