import MyComponent from '../../../../slices/Separator';

export default {
	title: 'slices/Separator',
};

export const _Default = () => (
	<MyComponent
		slice={{
			variation: 'default',
			name: 'Default',
			slice_type: 'separator',
			items: [],
			primary: {},
			id: '_Default',
		}}
	/>
);
_Default.storyName = 'Default';

export const _separatorFacingUp = () => (
	<MyComponent
		slice={{
			variation: 'separatorFacingUp',
			name: 'Separator - Facing Up',
			slice_type: 'separator',
			items: [],
			primary: {},
			id: '_separatorFacingUp',
		}}
	/>
);
_separatorFacingUp.storyName = 'Separator - Facing Up';
