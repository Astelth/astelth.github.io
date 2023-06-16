import {memo} from 'react';

export const Checkbox = memo(({setting, value, onChange}) => {
	const {name, checked} = value;

	return (
		<div className='settings__checkbox'>
			<input
				className="settings__checkbox-input"
				type="checkbox"
				name={name}
				id={name}
				onChange={ev => onChange({[setting]: {name, checked: ev.target.checked}})}
				checked={checked}
			/>
			<label htmlFor={name} className="settings__checkbox-label settings__checkbox-label_uppercase">{name}</label>
		</div>
	);
});
