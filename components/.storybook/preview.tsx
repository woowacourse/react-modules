import React from 'react';
import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export const decorators = [
	(Story) => (
		<div style={{ width: '100px', height: '300px' }}>
			<Story />
		</div>
	),
];

export default preview;
