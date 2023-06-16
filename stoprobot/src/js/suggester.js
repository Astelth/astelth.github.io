import {memo, useState, useMemo, useCallback, useEffect, useRef} from 'react';
import {Categories} from './constants';

export const Suggester = memo(({setting, items, onChange}) => {
	const [changed, setChanged] = useState(false);
	const [filter, setFilter] = useState('');
	const [opened, setOpened] = useState(false);
	const [currentItems, setCurrentItems] = useState(items);

	const wrapperRef = useRef(null);
	const listRef = useRef(null);

// Флаг, указывающий, находится ли курсор над списком
	const isHovered = useRef(false);

// Функция для обработки события наведения курсора на список
	function handleMouseEnter() {
		window.addEventListener('wheel', handleWheel, {passive:false});
		isHovered.current = true;
	}

// Функция для обработки события ухода курсора с списка
	function handleMouseLeave() {
		window.removeEventListener('wheel', handleWheel, {passive:false});
		isHovered.current = false;
	}

// Функция для обработки события прокрутки колесиком мыши
	function handleWheel(event) {
		if (isHovered.current) {
			event.preventDefault();

			listRef.current.scrollTop += event.deltaY;
		}
	}

	const preCheckedItems = useMemo(() => items.filter(item => item.checked),[items]);

	const changeHandler = useCallback((ev) => {
		const newItems = [...currentItems];
		const index = newItems.findIndex(item => item.name === ev.target.name);
		newItems[index] = {name: ev.target.name, checked: ev.target.checked};

		setCurrentItems(newItems);
	}, [currentItems, setCurrentItems]);

	const filteredItems = useMemo(() => (
		currentItems.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
	), [filter, currentItems]);

	useEffect(() => {
		setCurrentItems(items);
	}, [items]);

	useEffect(() => {
		setChanged(currentItems.some((item, index) => item.checked !== items[index].checked));
	}, [items, currentItems]);

	useEffect(() => {
		document.documentElement.addEventListener('click', e => {
			if (opened && !wrapperRef?.current?.contains(e.target)) {
				setOpened(false);
			}
		});
	}, [opened]);

	return (
		<div className={`i-suggester ${opened ? 'i-suggester_active' : ''}`} ref={wrapperRef}>
			<div className='i-suggester__title' onClick={() => setOpened(!opened)}>
				{Categories[setting]} {!!preCheckedItems.length && <span className='i-suggester__count'>{`(${preCheckedItems.length}) `}</span>}
			</div>
			<div className='i-suggester__wrapper'>
				<div className='i-suggester__search'>
					<input className='i-suggester__search-input' type='text' onChange={e => setFilter(e.target.value)} value={filter} />
				</div>
				<div className='i-suggester__list' ref={listRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					{filteredItems.map(item => (
						<div className='settings__checkbox' key={item.name}>
							<input
								className='settings__checkbox-input'
								id={`filter-${setting}-${item.name}`}
								name={item.name}
								checked={item.checked}
								onChange={changeHandler}
								type='checkbox'
							/>
							<label className='settings__checkbox-label' htmlFor={`filter-${setting}-${item.name}`}>{item.name}</label>
						</div>
					))}
				</div>
				<div className='i-suggester__actions'>
					{!changed && (
						<div className='i-button i-button_full' onClick={() => setOpened(!opened)}>Закрыть</div>
					)}
					{changed && (
						<>
							<div className='i-button i-button_full icon-close' onClick={() => setOpened(!opened)}></div>
							<div
								className='i-button i-button_full icon-check'
						        onClick={() => {
							        changed && onChange({[setting]: currentItems});
									setOpened(!opened);
						        }}
							></div>
						</>
					)}
				</div>
			</div>
		</div>
	);
});