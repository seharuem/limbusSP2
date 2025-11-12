import { useState } from 'react';
import './App.css';
import { filters } from './filter';
import { Tab } from './style';
import FilterBox from './filterBox';

function App() {
	const menu = ['수감자', '자원', '주요 키워드', '기타 키워드'];

	const [tabIndex, setTabIndex] = useState(0);
	const [onFilter, setOnFilter] = useState(filters[tabIndex]);

	const tabClick = (index) => {
		if (tabIndex === index) return;
		setTabIndex(index);
		setOnFilter(filters[index]);
	};

	return (
		<>
			<h1>
				<span>LIMBUS COMPANY</span>
				서포트 패시브
			</h1>

			<div className='flex flex-col flex-1 min-h-0'>
				<div className='flex w-full'>
					{menu.map((item, index) => (
						<Tab
							key={item}
							className={tabIndex === index && 'active'}
							onClick={() => tabClick(index)}
						>
							{item}
						</Tab>
					))}
				</div>

				<FilterBox
					tabIndex={tabIndex}
					onFilter={onFilter}
					setOnFilter={setOnFilter}
				/>
			</div>
		</>
	);
}

export default App;
