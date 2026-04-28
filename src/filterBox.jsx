import { useState, useEffect } from 'react';
import { FilterGrid, Filter, Check, Hide, Text, FilterIcon, FilterWrap, Item } from './style';
import { filters } from './filter';
import Data from './Data';
import { useRef } from 'react';

function FilterBox({ tabIndex, onFilter, setOnFilter }) {
	const [all, setAll] = useState(true);

	const allClick = () => {
		if (onFilter === filters[tabIndex]) {
			setOnFilter([]);
		} else {
			setOnFilter(filters[tabIndex]);
		}
	};

	const filterClick = (item) => {
		if (onFilter.includes(item)) {
			setOnFilter(onFilter.filter((f) => f !== item));
		} else {
			setOnFilter([...onFilter, item]);
		}
	};

	useEffect(() => {
		if (onFilter.length === filters[tabIndex].length) {
			setAll(true);
		} else {
			setAll(false);
		}
	}, [onFilter, tabIndex, filters]);

	const [isFold, setIsFold] = useState(false);
	const foldRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			if (foldRef.current && !foldRef.current.contains(e.target)) {
				setIsFold(true);
			}
		};

		document.addEventListener('mousedown', handleClick);

		return () => {
			document.addEventListener('mousedown', handleClick);
		};
	}, [foldRef, isFold]);

	return (
		<>
			<FilterWrap ref={foldRef}>
				<FilterIcon onClick={() => setIsFold(!isFold)}>필터</FilterIcon>
				{onFilter.length > 0 && (
					<div className='flex gap-1 items-center border-2 bg-black/30 border-(--main)/30 backdrop-blur-xs rounded-sm p-1 w-max z-10 max-lg:flex-col'>
						{filters[tabIndex].map((item, i) => {
							if (!onFilter.includes(item)) return;

							return <Item key={item} $tab={tabIndex} $num={i} />;
						})}
					</div>
				)}
				<FilterGrid className={isFold ? 'fold' : ''}>
					<Filter className='col-span-3 w-full'>
						All
						<Check checked={all} onChange={allClick} />
					</Filter>

					{filters[tabIndex].map((item, i) => (
						<Filter key={item} $tab={tabIndex} $num={i}>
							{item}
							<Check checked={onFilter.includes(item)} onChange={() => filterClick(item)} />
						</Filter>
					))}
				</FilterGrid>
			</FilterWrap>

			{onFilter.length === 0 ? <Text>필터를 선택해주세요 ! ! !</Text> : <Data index={tabIndex} filter={onFilter} />}
		</>
	);
}

export default FilterBox;
