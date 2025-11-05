import React from 'react';
import { charData, resData, key1Data } from './charData/charData';
import CharCard from './card';

export default function Data({ index, filter }) {
	const resItems = React.useMemo(() => {
		if (index !== 1) return [];

		const filterData = resData
			.filter(({ res }) => filter.includes(res))
			.flatMap(({ data }) => data);

		const uniq = Array.from(
			new Map(filterData.map((item) => [item.detail, item])).values()
		);

		return uniq;
	}, [resData, filter, index]);

	const key1Items = React.useMemo(() => {
		if (index !== 2) return [];

		const filterData = key1Data
			.filter(({ key }) => filter.includes(key))
			.flatMap(({ data }) => data);

		const uniq = Array.from(
			new Map(filterData.map((item) => [item.detail, item])).values()
		);

		return uniq;
	}, [key1Data, filter, index]);

	return (
		<div className='flex justify-center gap-4 flex-wrap p-1 overflow-auto'>
			{index === 0 ? (
				<>
					{charData.map(
						({ char, name, data }) =>
							filter.includes(name) && (
								<React.Fragment key={char}>
									{data.map((item) => (
										<CharCard key={item.id} item={item} img={char} />
									))}
								</React.Fragment>
							)
					)}
				</>
			) : index === 1 ? (
				<>
					{resItems.map((item) => (
						<CharCard
							key={`${item.id} ${item.char}`}
							item={item}
							img={item.img}
							char={item.char}
							i={index}
						/>
					))}
				</>
			) : index === 2 ? (
				<>
					{key1Items.map((item) => (
						<CharCard
							key={`${item.id} ${item.char}`}
							item={item}
							img={item.img}
							char={item.char}
							i={index}
						/>
					))}
				</>
			) : (
				<div>3</div>
			)}
		</div>
	);
}
