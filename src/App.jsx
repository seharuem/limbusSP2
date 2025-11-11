import { useState, useEffect } from 'react';
import './App.css';
import { filters } from './filter';
import { Tab, Box, Filter, Hide, Text } from './style';
import Data from './Data';

function App() {
	const menu = ['수감자', '자원', '주요 키워드', '기타 키워드'];

	const [activeTab, setActiveTab] = useState(menu[0]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [all, setAll] = useState(true);
	const [onFilter, setOnFilter] = useState(filters[activeIndex]);

	const tabClick = (item, index) => {
		if (activeIndex !== index) {
			setActiveTab(item);
			setActiveIndex(index);
			setOnFilter(filters[index]);
		}
	};

	const allClick = () => {
		if (onFilter === filters[activeIndex]) {
			setOnFilter([]);
		} else {
			setOnFilter(filters[activeIndex]);
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
		if (onFilter.length === filters[activeIndex].length) {
			setAll(true);
		} else {
			setAll(false);
		}
	}, [onFilter, activeIndex, filters]);

	return (
		<>
			<h1>
				<span>LIMBUS COMPANY</span>
				서포트 패시브
			</h1>

			<div className='flex flex-col py-2 flex-1 max-h-screen'>
				<div className='flex w-full'>
					{menu.map((item, index) => (
						<Tab
							key={item}
							className={activeTab === item && 'active'}
							onClick={() => tabClick(item, index)}
						>
							{item}
						</Tab>
					))}
				</div>

				<Box>
					<div className='flex flex-wrap gap-2 px-3'>
						<Filter className={all && 'select'} onClick={allClick}>
							All
						</Filter>
						{filters[activeIndex].map((item, i) => (
							<Filter
								key={item}
								$tab={activeIndex}
								$num={i}
								className={onFilter.includes(item) && 'select'}
								onClick={() => filterClick(item)}
							>
								{item}
							</Filter>
						))}
					</div>

					{/* <Hide>dd</Hide> */}

					{onFilter.length === 0 ? (
						<Text>필터를 선택해주세요 ! ! !</Text>
					) : (
						<Data index={activeIndex} filter={onFilter} />
					)}
				</Box>
			</div>
		</>
	);
}

export default App;
