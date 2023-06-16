import {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Suggester} from './suggester';
import {Checkbox} from './checkbox';

export const Filter = memo(({initial}) => {
	const [filterItems, setFilterItems] = useState(initial);
	const [widthWindow, setWidthWindow] = useState(0);

	const checkedItems = useMemo(() => {
		const checked = Object.entries(filterItems).map(([key, value]) => (
			Array.isArray(value)
				? {[key]: value.filter(item => item.checked).map(item => item.name)}
				: {[key]: value.checked ? [value.name] : []}
		));

		return checked.filter(item => Object.values(item)[0].length);
	}, [filterItems]);

	const changeHandler = useCallback((object) => {
		const [[name, value]] = Object.entries(object);

		if (Array.isArray(value)) {
			const newItems = [...filterItems[name]];

			value.forEach(({name, checked}) => {
				const index = newItems.findIndex(item => item.name === name);
				newItems[index] = {name, checked};
			});

			setFilterItems({...filterItems, ...{[name]: newItems}});
		} else {
			setFilterItems({...filterItems, ...object});
		}
	}, [filterItems, setFilterItems]);

	const removeHandler = useCallback((setting, name) => {
		if (Array.isArray(filterItems[setting])) {
			const newItems = [...filterItems[setting]];

			const index = newItems.findIndex(item => item.name === name);
			newItems[index] = {name, checked: false};

			setFilterItems({...filterItems, ...{[setting]: newItems}});
		} else {
			setFilterItems({...filterItems, ...{[setting]: {name, checked: false}}});
		}
	}, [filterItems, setFilterItems]);

	const resetItems = useCallback(() => {
		const hash = {};
		Object.entries(filterItems).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				const newItems = [];

				value.forEach(item => newItems.push({...item, ...{checked: false}}));
				hash[key] = newItems;
			} else {
				hash[key] = {...value, checked: false}
			}
		});

		setFilterItems(hash);
	}, [filterItems, setFilterItems]);

	const onResize = () => {
		setWidthWindow(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', onResize, false);
		onResize();
		return () => window.removeEventListener('resize', onResize, false);
	}, []);

	return (
		<>
			<div className='settings__select-bar'>
				<div className='settings__reset' onClick={resetItems}>сбросить все</div>
				<div className='settings__catalog'>жанры</div>
				<div className='settings__checkbox-list'>
					{Object.entries(filterItems).map(([key, value]) => (
						Array.isArray(value)
							? <Suggester key={`suggester-${key}`} setting={key} items={value} onChange={changeHandler} />
							: <Checkbox key={`checkbox-${key}`} setting={key} value={value} onChange={changeHandler} />
					))}
					<span className={`settings__reset-filters ${!checkedItems.length ? 'settings__reset-filters_hidden' : ''}`} onClick={resetItems}>
						Сбросить все фильтры
						<span className='icon-close settings__icon-close'></span>
					</span>
					{!!checkedItems?.length && widthWindow < 1200 &&
						<div className='settings__selected-filters'>
							{checkedItems.map(i => Object.entries(i)).flat().map(([key, value]) => (
								value.map(name => (
									<div key={name}>
										<span className='settings__selected'>{name}</span>
										<span className='icon-close settings__icon-close' onClick={() => removeHandler(key, name)}></span>
									</div>
								))
							))}
						</div>
					}
					{!!checkedItems?.length && widthWindow >= 1200 &&
						<>
							{checkedItems.map(i => Object.entries(i)).flat().map(([key, value]) => (
								value.map(name => (
									<div key={name}>
										<span className='settings__selected'>{name}</span>
										<span className='icon-close settings__icon-close' onClick={() => removeHandler(key, name)}></span>
									</div>
								))
							))}
						</>
					}
				</div>
			</div>
		</>
	);
});
