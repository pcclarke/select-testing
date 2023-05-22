import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';

import HoleSelect from '$lib/HoleSelect.svelte';

describe('Switch options', () => {
	
	it('Can see the triangle hole', async () => {
		render(HoleSelect);

		await fireEvent.click(screen.getByTestId('select-shape'));
		await fireEvent.click(screen.getByText('triangle'));

		expect(screen.getByText('It goes in the triangle hole!')).toBeInTheDocument();
	});
});
