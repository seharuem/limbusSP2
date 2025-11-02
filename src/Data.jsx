import { res } from './filter';
import { char01 } from './charData/01';
import { Card, Img, Title, Res } from './style';

export default function Data() {
	function CharCard({ item }) {
		return (
			<Card $res={item.key}>
				<Img $num={item.id} />
				<div className='flex-1 flex flex-col gap-1.5 items-start'>
					<span className='font-extrabold text-lg'>{item.name}</span>
					<Title $res={item.res}>{item.title}</Title>
					<span className='flex gap-1'>
						<div className='flex gap-0.5 items-center'>
							<Res $res={item.res} />({res[item.res]})
						</div>
						× {item.req}
					</span>
					<span className='text-start flex-1'>{item.detail}</span>
				</div>
			</Card>
		);
	}

	return (
		<div className='flex justify-center gap-4 flex-wrap p-1 overflow-auto'>
			{char01.map((item) => (
				<CharCard key={item.id} item={item} />
			))}
		</div>
	);
}
