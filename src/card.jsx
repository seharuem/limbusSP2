import { res } from './filter';
import { Card, Img, Title, Res } from './style';

export const ResIcon = ({ num, req, i }) => {
	return (
		<span className='flex gap-1 text-[15px]'>
			<div className='flex gap-0.5 items-center'>
				<Res $res={num} />
				{i !== 1 && `(${res[num]})`}
			</div>
			× {req}
		</span>
	);
};

export default function CharCard({ item, img, char, i }) {
	return (
		<Card $num={item.key}>
			<Img $num={item.id} $img={img} />
			<div className='flex-1 flex flex-col gap-1.5 items-start'>
				<span className='font-extrabold text-lg text-start break-keep'>
					{item.name} {char}
				</span>
				<Title $res={item.res}>{item.title}</Title>
				<span className='flex gap-3'>
					{Array.isArray(item.res) ? (
						item.res.map((i) => <ResIcon key={i} num={i} req={item.req} />)
					) : (
						<ResIcon num={item.res} req={item.req} i={i} />
					)}
				</span>
				<span className='text-start flex-1'>{item.detail}</span>
			</div>
		</Card>
	);
}
