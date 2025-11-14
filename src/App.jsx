import { useState, useEffect } from 'react';
import './App.css';
import { filters } from './filter';
import { Tab, Box } from './style';
import FilterBox from './filterBox';
import Dots from './Dots';

const imgFolder = [
	{ folder: 'logo', count: 12 },
	{ folder: 'res', count: 7 },
	{ folder: 'key', count: 10 },
	{ folder: 'key2', count: 6 }
];

const imgPaths = [];
imgFolder.forEach((item) => {
	for (let i = 0; i < item.count; i++) {
		imgPaths.push(`./img/${item.folder}/${i}.webp`);
	}
});

function App() {
	const menu = ['수감자', '자원', '주요 키워드', '기타 키워드'];

	const [tabIndex, setTabIndex] = useState(0);
	const [onFilter, setOnFilter] = useState(filters[tabIndex]);

	const tabClick = (index) => {
		if (tabIndex === index) return;
		setTabIndex(index);
		setOnFilter(filters[index]);
	};

	const [load, setLoad] = useState(false);

	useEffect(() => {
		setLoad(false);

		let loadedCount = 0;
		imgPaths.forEach((path) => {
			const img = new Image();
			img.src = path;
			img.onload = () => {
				loadedCount++;
				if (loadedCount === imgPaths.length) {
					setLoad(true);
				}
			};
		});
	}, [tabIndex]);

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

				<Box>
					{!load ? (
						<Dots />
					) : (
						<FilterBox
							tabIndex={tabIndex}
							onFilter={onFilter}
							setOnFilter={setOnFilter}
						/>
					)}
				</Box>
			</div>
		</>
	);
}

export default App;
