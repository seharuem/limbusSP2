import React from 'react';
import { res } from './filter';
import { charData } from './charData/charData';
import { Card, Img, Title, Res } from './style';

export default function Data({ onFilter }) {
	const ResIcon = ({ num, req }) => {
		return (
			<span className='flex gap-1 text-[15px]'>
				<div className='flex gap-0.5 items-center'>
					<Res $res={num} />({res[num]})
				</div>
				× {req}
			</span>
		);
	};

	function CharCard({ item, char }) {
		return (
			<Card $num={item.key}>
				<Img $num={item.id} $char={char} />
				<div className='flex-1 flex flex-col gap-1.5 items-start'>
					<span className='font-extrabold text-lg text-start break-keep'>
						{item.name}
					</span>
					<Title $res={item.res}>{item.title}</Title>
					<span className='flex gap-3'>
						{Array.isArray(item.res) ? (
							item.res.map((i) => <ResIcon key={i} num={i} req={item.req} />)
						) : (
							<ResIcon num={item.res} req={item.req} />
						)}
					</span>
					<span className='text-start flex-1'>{item.detail}</span>
				</div>
			</Card>
		);
	}

	return (
		<div className='flex justify-center gap-4 flex-wrap p-1 overflow-auto'>
			{charData.map(
				({ char, name, data }) =>
					onFilter.includes(name) && (
						<React.Fragment key={char}>
							{data.map((item) => (
								<CharCard key={item.id} item={item} char={char} />
							))}
						</React.Fragment>
					)
			)}
		</div>
	);
}
