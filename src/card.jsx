import { res } from './filter';
import { Card, Img, Title, Res } from './style';

export const ResIcon = ({ num }) => {
	return (
		<span className='flex gap-1 items-center text-[15px]'>
			<Res $res={num} />({res[num]})
		</span>
	);
};

export default function CharCard({ item, img, char }) {
	return (
		<Card $num={item.key}>
			<Img $num={item.id} $img={img} />
			<div className='flex-1 flex flex-col gap-1.5 items-start'>
				<span className='font-extrabold text-lg text-start break-keep'>
					{item.name} {char}
				</span>
				<Title $res={item.res}>{item.title}</Title>
				<span className='flex gap-1'>
					{item.req2 ? (
						<>
							<ResIcon num={item.res[0]} />× {item.req}
							<ResIcon num={item.res[1]} />× {item.req2}
						</>
					) : (
						<>
							{Array.isArray(item.res) ? item.res.map((i) => <ResIcon key={i} num={i} />) : <ResIcon num={item.res} />}×{' '}
							{item.req}
						</>
					)}
				</span>
				<span className='text-start flex-1 break-keep font-normal max-sm:text-sm'>{item.detail}</span>
			</div>
		</Card>
	);
}
