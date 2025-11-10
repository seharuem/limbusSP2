import React from 'react';
import { nameData, resData, key1Data, key2Data } from './charData/charData';
import CharCard from './card';
import { DataWrap } from './style';

export default function Data({ index, filter }) {
	const filterItems = (data) => {
		const filterData = data
			.filter(({ char, res, key, key2 }) =>
				filter.includes(char ?? res ?? key ?? key2)
			)
			.flatMap(({ data }) => data);

		return [...new Map(filterData.map((item) => [item.detail, item])).values()];
	};

	const dataMap = [nameData, resData, key1Data, key2Data];

	const items = React.useMemo(() => {
		const data = dataMap[index] || [];
		return filterItems(data);
	}, [nameData, resData, key1Data, key2Data, index, filter]);

	return (
		<DataWrap>
			<>
				{items.map((item) => (
					<CharCard
						key={`${item.id} ${item.char}`}
						item={item}
						img={item.img}
						char={item.char}
					/>
				))}
			</>
		</DataWrap>
	);
}
