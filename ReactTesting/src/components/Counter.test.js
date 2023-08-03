import React from 'react';
import Counter from './Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
});

afterEach(() => {
    cleanup();
});

test('Testing counter header display', () => {
	const headerEl = getByTestId('header');

	expect(headerEl.textContent).toBe('My Counter');
});

test('Counter initially starts at 0', () => {
	const counter = getByTestId('counter');

	expect(counter.textContent).toBe('0');
});

test('Counter changes on button click', () => {
	const input = getByTestId('input');

	fireEvent.change(input, {
		target: {
			value: '5',
		},
	});

	expect(input.value).toBe('5');
});

test('Button adds', () => {
	const button = getByTestId('button');
	const counter = getByTestId('counter');

	expect(counter.textContent).toBe('0');
	fireEvent.click(button);

	expect(counter.textContent).toBe('1');
});

test('Button adds with step', () => {
	const button = getByTestId('button');
	const counter = getByTestId('counter');
	const input = getByTestId('input');

    fireEvent.change(input, {
        target: {
            value: 5
        }
    });

    expect(counter.textContent).toBe("0");
    fireEvent.click(button);
    expect(counter.textContent).toBe("5");

    fireEvent.change(input, {
        target: {
            value: -3
        }
    });

    fireEvent.click(button);
    expect(counter.textContent).toBe("2");

});
