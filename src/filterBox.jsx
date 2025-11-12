import { useState, useEffect } from 'react';
import { Box, Filter, Check, Text } from './style';
import { filters } from './filter';
import Data from './Data';

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

	return (
		<Box>
			<div className='flex flex-wrap gap-2 px-3'>
				<Filter>
					All
					<Check checked={all} onChange={allClick} />
					{all && <div></div>}
				</Filter>
				{filters[tabIndex].map((item, i) => (
					<Filter key={item} $tab={tabIndex} $num={i}>
						{item}
						<Check
							checked={onFilter.includes(item)}
							onChange={() => filterClick(item)}
						/>
						{onFilter.includes(item) && <div></div>}
					</Filter>
				))}
			</div>

			{onFilter.length === 0 ? (
				<Text>필터를 선택해주세요 ! ! !</Text>
			) : (
				<Data index={tabIndex} filter={onFilter} />
			)}
		</Box>
	);
}

export default FilterBox;
