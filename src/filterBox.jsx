import { useState, useEffect } from 'react';
import { FilterWrap, Filter, Check, Hide, Text } from './style';
import { filters } from './filter';
import Data from './Data';

function FilterBox({ tabIndex, onFilter, setOnFilter }) {
	const [all, setAll] = useState(true);
	const [text, setText] = useState('접기');

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

	const hideClick = () => {
		if (text === '접기') {
			setText('펼치기');
			setIsFold(true);
		} else {
			setText('접기');
			setIsFold(false);
		}
	};

	useEffect(() => {
		setText('접기');
		setIsFold(false);
	}, [tabIndex]);

	return (
		<>
			<div className='flex gap-1 px-3'>
				<FilterWrap>
					{!isFold ? (
						<>
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
						</>
					) : (
						<>
							{filters[tabIndex].map((item, i) => {
								if (!onFilter.includes(item)) return;

								return <Filter key={item} $tab={tabIndex} $num={i} />;
							})}
						</>
					)}
				</FilterWrap>
				{!(onFilter.length === 0) && <Hide onClick={hideClick}>{text}</Hide>}
			</div>

			{onFilter.length === 0 ? (
				<Text>필터를 선택해주세요 ! ! !</Text>
			) : (
				<Data index={tabIndex} filter={onFilter} />
			)}
		</>
	);
}

export default FilterBox;
